"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/lib/i18n";

export default function ContactForm({ dict }: { dict: Dictionary }) {
  const t = dict.contact.form;
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm focus:border-brand-light focus:outline-none focus:ring-2 focus:ring-brand-light/30";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder={t.name} className={inputClass} />
        <input name="phone" required type="tel" placeholder={t.phone} className={inputClass} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="email" required type="email" placeholder={t.email} className={inputClass} />
        <select name="problemType" required defaultValue="" className={inputClass}>
          <option value="" disabled>{t.problemType}</option>
          {dict.common.problemTypes.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>
      <textarea name="message" required rows={5} placeholder={t.message} className={inputClass} />

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-dark text-white font-semibold px-7 py-3.5 hover:bg-brand-light transition-colors disabled:opacity-60 w-full sm:w-auto"
      >
        {status === "sending" ? t.sending : t.submit}
      </button>

      {status === "success" && <p className="text-brand-dark font-semibold text-sm">{t.success}</p>}
      {status === "error" && <p className="text-red-600 font-semibold text-sm">{t.error}</p>}
    </form>
  );
}
