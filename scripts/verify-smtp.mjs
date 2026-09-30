import nodemailer from 'nodemailer';
const host = (process.env.SMTP_HOST || 'smtp.gmail.com').trim();
const port = Number(process.env.SMTP_PORT || '587');
const user = process.env.SMTP_USER?.trim();
const pass = host === 'smtp.gmail.com' ? process.env.SMTP_PASS?.replace(/\s+/g, '') : process.env.SMTP_PASS;
if (!user || !pass) { console.error('Set SMTP_USER and SMTP_PASS in .env.local or server environment variables.'); process.exit(1); }
const secure = process.env.SMTP_SECURE === undefined ? port === 465 : process.env.SMTP_SECURE === 'true';
const transport = nodemailer.createTransport({host, port, secure, requireTLS: !secure, auth: {user, pass}, tls: {minVersion: 'TLSv1.2'}, connectionTimeout: 8000, greetingTimeout: 5000, socketTimeout: 12000});
try {
  await transport.verify();
  console.log('SMTP connection and authentication verified. No email was sent.');
} catch (error) {
  const code = ['EAUTH','ETIMEDOUT','EDNS','ECONNECTION','ESOCKET'].includes(error.code) ? error.code : 'SMTP_UNAVAILABLE';
  console.error(`SMTP verification failed (${code}). Check your server network access and SMTP settings.`);
  process.exitCode = 1;
} finally { transport.close(); }
