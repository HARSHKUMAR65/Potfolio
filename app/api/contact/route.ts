import { NextResponse } from "next/server";
import { profile } from "../../site-config";

export const runtime = "nodejs";

const emailPattern = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
const reply = (body: object, status = 200) => NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]!));

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return reply({ error: "Please submit this form from the portfolio website." }, 403);
  if (!request.headers.get("content-type")?.includes("application/json")) return reply({ error: "Please submit a valid contact form." }, 415);
  if (Number(request.headers.get("content-length") || 0) > 18000) return reply({ error: "Your message is too long." }, 413);

  let payload: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > 18000) return reply({ error: "Your message is too long." }, 413);
    const data: unknown = JSON.parse(raw);
    if (!data || typeof data !== "object" || Array.isArray(data)) return reply({ error: "Invalid form data." }, 400);
    payload = data as Record<string, unknown>;
  } catch {
    return reply({ error: "Invalid form data." }, 400);
  }
  for (const key of ["name", "email", "message"]) {
    if (typeof payload[key] !== "string" || !payload[key].trim()) return reply({ error: "Please add your name, email and message." }, 400);
  }
  if (payload.project !== undefined && typeof payload.project !== "string") return reply({ error: "Invalid project name." }, 400);
  const name = (payload.name as string).trim();
  const email = (payload.email as string).trim();
  const project = ((payload.project as string) || "").trim();
  const message = (payload.message as string).trim();
  if (name.length > 100 || project.length > 200 || message.length > 6000 || email.length > 254) return reply({ error: "Please shorten your name, project or message." }, 400);
  if (!emailPattern.test(email) || /[\r\n]/.test(email)) return reply({ error: "Enter a valid email address." }, 400);
  if (/[\r\n]/.test(name)) return reply({ error: "Please enter your name on one line." }, 400);

  const host = (process.env.SMTP_HOST || "smtp.gmail.com").trim();
  const port = Number(process.env.SMTP_PORT || "587");
  const user = (process.env.SMTP_USER || "").trim();
  let pass = process.env.SMTP_PASS || "";
  // Google displays app passwords with spaces. Other providers may use spaces literally.
  if (host === "smtp.gmail.com") pass = pass.replace(/\s+/g, "");
  const to = (process.env.SMTP_TO || profile.email).trim();
  if (!user || !pass) {
    if (process.env.MAIL_MODE === "smtp") return reply({ error: "Email is not configured yet. Please contact me directly by email." }, 503);
    return reply({ ok: true, demo: true });
  }
  if (!host || !Number.isInteger(port) || port < 1 || port > 65535 || !emailPattern.test(to)) return reply({ error: "Email configuration needs attention. Please contact me directly." }, 503);
  const secure = process.env.SMTP_SECURE === undefined ? port === 465 : process.env.SMTP_SECURE === "true";
  const from = (process.env.SMTP_FROM || user).trim();
  const summary = ["New portfolio enquiry", "", `Name: ${name}`, `Email: ${email}`, project ? `Project: ${project}` : null, "", message].filter(line => line !== null).join("\n");
  let transporter: import("nodemailer").Transporter | undefined;
  try {
    const { createTransport } = await import("nodemailer");
    transporter = createTransport({
      host, port, secure, requireTLS: !secure, auth: { user, pass },
      tls: { minVersion: "TLSv1.2" },
      connectionTimeout: 8000, greetingTimeout: 5000, socketTimeout: 12000,
      disableFileAccess: true, disableUrlAccess: true,
    });
    const info = await transporter.sendMail({
      from: { name: "Harsh Kumar Portfolio", address: from },
      to, replyTo: { name, address: email }, subject: `Portfolio enquiry: ${project || name}`,
      text: summary, html: `<div style="font-family:Arial,sans-serif;line-height:1.6"><h2>New portfolio enquiry</h2><p><strong>Name:</strong> ${escapeHtml(name)}<br/><strong>Email:</strong> ${escapeHtml(email)}${project ? `<br/><strong>Project:</strong> ${escapeHtml(project)}` : ""}</p><p>${escapeHtml(message).replace(/\r?\n/g, "<br/>")}</p></div>`,
    });
    if (!info.accepted?.length) return reply({ error: "The mail server did not accept the message. Please contact me directly." }, 502);
    return reply({ ok: true, demo: false });
  } catch (error) {
    const code = (error as { code?: string }).code;
    // Never expose SMTP replies, credentials, or a visitor's message in public errors.
    console.error("Contact email failed:", code === "EAUTH" ? "SMTP_AUTH" : code === "ETIMEDOUT" ? "SMTP_TIMEOUT" : "SMTP_UNAVAILABLE");
    return reply({ error: "Email could not be sent. Please try again later or use the direct email link." }, 502);
  } finally {
    transporter?.close();
  }
}
