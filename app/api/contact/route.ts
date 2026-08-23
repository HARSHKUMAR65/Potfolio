import { NextResponse } from "next/server";

import { profile } from "../../site-config";

type ContactPayload = {
  name: string;
  email: string;
  project: string;
  message: string;
};

export const runtime = "nodejs";

function sanitizeText(value: string): string {
  return value.trim();
}

function getTransportConfig() {
  const host = sanitizeText(process.env.SMTP_HOST ?? "smtp.gmail.com");
  const port = Number(process.env.SMTP_PORT ?? "587");
  const secure = sanitizeText(process.env.SMTP_SECURE ?? "false") === "true";
  const user = sanitizeText(process.env.SMTP_USER ?? "kabiryadav55555@gmail.com");
  const pass = sanitizeText(process.env.SMTP_PASS ?? "yblv ttyu gltg azbs").replace(/\s+/g, "");

  if (!host || !user || !pass || Number.isNaN(port)) {
    return null;
  }

  return { host, port, secure, auth: { user, pass } };
}

export async function POST(request: Request) {
  const payload = (await request.json()) as Partial<ContactPayload>;
  const name = sanitizeText(payload.name ?? "");
  const email = sanitizeText(payload.email ?? "");
  const project = sanitizeText(payload.project ?? "");
  const message = sanitizeText(payload.message ?? "");

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const transportConfig = getTransportConfig();
  if (!transportConfig) {
    return NextResponse.json({ error: "SMTP settings are not configured." }, { status: 500 });
  }

  const to = sanitizeText(process.env.SMTP_TO ?? "") || profile.email;

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const from = sanitizeText(process.env.SMTP_FROM ?? `"Portfolio" <${transportConfig.auth.user}>`);
  
  const summary = [
    `Hello Harsh, my name is ${name}.`,
    `Email: ${email}`,
    project ? `Project: ${project}` : null,
    `Message: ${message}`,
  ].filter(Boolean).join("\n");

  try {
    const { createTransport } = (await import("nodemailer")) as typeof import("nodemailer");

    const transporter = createTransport({
      ...transportConfig,
      connectionTimeout: 15000,
      greetingTimeout: 10000,
      socketTimeout: 20000,
    });

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `Project enquiry from ${name}`,
      text: summary,
      html: `<p>${summary.replace(/\n/g, "<br />")}</p>`,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unknown server error.";
    return NextResponse.json({ error: "Failed to send email.", detail: message }, { status: 500 });
  }
}
