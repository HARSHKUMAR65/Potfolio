import nodemailer from "nodemailer";
const SMTP_HOST="smtp.gmail.com";
const SMTP_USER="kabiryadav55555@gmail.com";
const SMTP_PASS="gcul arya puoz tdig";
const CONTACT_TO_EMAIL="harshkumar672001@gmail.com";

  
export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { ok: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const smtpHost = SMTP_HOST;
    const smtpUser = SMTP_USER;
    const smtpPass = SMTP_PASS;
    const toEmail = CONTACT_TO_EMAIL;
    const fromEmail = SMTP_USER || smtpUser;
    console.log(smtpHost, smtpUser, smtpPass, toEmail);

    if (!smtpHost || !smtpUser || !smtpPass || !toEmail) {
      console.warn(
        "Contact form submitted but email transport is not fully configured (missing SMTP_HOST/SMTP_USER/SMTP_PASS/CONTACT_TO_EMAIL)."
      );
      return Response.json(
        {
          ok: true,
          skippedEmail: true,
          message: "Email delivery is not configured yet, but your message was received.",
        },
        { status: 200 }
      );
    }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
        });

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}

${message}`,
    });

    return Response.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error", error);
    return Response.json(
      { ok: false, error: "Unable to send message right now. Please try again later." },
      { status: 500 }
    );
  }
}
