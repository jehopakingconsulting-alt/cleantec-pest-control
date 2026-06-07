"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale, Dictionary } from "@/lib/i18n";
import LangSwitcher from "./LangSwitcher";

export default function MobileNav({
  lang,
  dict,
  links,
}: {
  lang: Locale;
  dict: Dictionary;
  links: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        aria-label="Menu"
        onClick={() => setOpen((o) => !o)}
        className="flex flex-col gap-1.5 p-2"
      >
        <span className={`block h-0.5 w-6 bg-brand-dark transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
        <span className={`block h-0.5 w-6 bg-brand-dark transition-opacity ${open ? "opacity-0" : ""}`} />
        <span className={`block h-0.5 w-6 bg-brand-dark transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-20 left-0 right-0 bg-white border-b border-black/10 shadow-lg px-4 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-semibold text-brand-ink py-1">
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-2 border-t border-black/10">
            <LangSwitcher lang={lang} />
            <a href={`tel:${dict.common.phone.replace(/[^+\d]/g, "")}`} className="flex-1 text-center rounded-full bg-brand-dark text-white text-sm font-semibold px-4 py-2">
              📞 {dict.nav.callNow}
            </a>
          </div>
          <Link href={`/${lang}/quote`} onClick={() => setOpen(false)} className="text-center rounded-full bg-brand-light text-white text-sm font-semibold px-4 py-2">
            {dict.nav.quote}
          </Link>
        </div>
      )}
    </div>
  );
}
