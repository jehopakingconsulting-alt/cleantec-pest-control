import nodemailer from "nodemailer";

export const RECIPIENTS = ["info@cleantechaiti.com", "kayproductions070814@yahoo.fr"];

export function getTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

export async function sendNotification(subject: string, html: string, replyTo?: string) {
  const transport = getTransport();
  if (!transport) {
    throw new Error("SMTP is not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS in your environment.");
  }

  await transport.sendMail({
    from: `"Cleantec Pest Control — Site Web" <${process.env.SMTP_USER}>`,
    to: RECIPIENTS.join(", "),
    replyTo,
    subject,
    html,
  });
}
