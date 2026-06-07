import Link from "next/link";
import Image from "next/image";
import type { Locale, Dictionary } from "@/lib/i18n";
import SocialLinks from "./SocialLinks";

export default function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const links = [
    { href: `/${lang}`, label: dict.nav.home },
    { href: `/${lang}/services`, label: dict.nav.services },
    { href: `/${lang}/about`, label: dict.nav.about },
    { href: `/${lang}/areas`, label: dict.nav.areas },
    { href: `/${lang}/blog`, label: dict.nav.blog },
    { href: `/${lang}/contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="bg-brand-ink text-white mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Image src="/images/logo.jpeg" alt="Cleantec Pest Control" width={48} height={28} className="rounded object-contain" />
            <span className="font-heading font-extrabold text-lg">Cleantec <span className="text-brand-light">Pest Control</span></span>
          </div>
          <p className="text-sm text-white/70">{dict.footer.tagline}</p>
        </div>

        <div>
          <h3 className="font-heading font-bold text-brand-light mb-3">{dict.footer.quickLinks}</h3>
          <ul className="space-y-2 text-sm text-white/80">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-white">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-bold text-brand-light mb-3">{dict.footer.contactUs}</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>📞 <a href={`tel:${dict.common.phone.replace(/[^+\d]/g, "")}`} className="hover:text-white">{dict.common.phone}</a></li>
            <li>📧 <a href={`mailto:${dict.common.email}`} className="hover:text-white">{dict.common.email}</a></li>
            <li>🌐 <a href={`https://${dict.common.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-white">{dict.common.website}</a></li>
            <li>📍 {dict.contact.address}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-bold text-brand-light mb-3">{dict.footer.hours}</h3>
          <ul className="space-y-2 text-sm text-white/80 mb-5">
            <li>🕒 {dict.footer.hoursWeek}</li>
            <li>🚨 {dict.footer.hoursEmergency}</li>
          </ul>
          <SocialLinks dict={dict} />
        </div>
      </div>
      <div className="border-t border-white/10 py-4 flex items-center justify-between gap-3 text-center text-xs text-white/60 sm:px-4 lg:px-8 max-w-7xl mx-auto w-full">
        <a
          href="https://www.jehopakingconsulting.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="JeHoPa King Consulting"
          className="flex items-center opacity-60 hover:opacity-100 transition-opacity shrink-0"
        >
          <Image src="/images/jehopa-king-logo.png" alt="JeHoPa King Consulting" width={32} height={32} className="rounded object-contain" />
        </a>
        <span className="flex-1 text-center">© {new Date().getFullYear()} Cleantec Pest Control — {dict.footer.rights}</span>
        <span className="hidden sm:block w-8 shrink-0" aria-hidden />
      </div>
    </footer>
  );
}
