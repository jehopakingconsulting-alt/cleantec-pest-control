import { NextResponse } from "next/server";
import { sendNotification } from "@/lib/mailer";

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const { name, phone, email, problemType, message } = body as Record<string, string>;
  if (!name || !phone || !email || !problemType || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const html = `
    <h2>Nouveau message — Formulaire de contact</h2>
    <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
    <p><strong>Téléphone :</strong> ${escapeHtml(phone)}</p>
    <p><strong>Courriel :</strong> ${escapeHtml(email)}</p>
    <p><strong>Type de problème :</strong> ${escapeHtml(problemType)}</p>
    <p><strong>Message :</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
  `;

  try {
    await sendNotification(`Nouveau message de contact — ${name}`, html, email);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact form error:", err);
    return NextResponse.json({ error: "Email delivery failed" }, { status: 502 });
  }
}
