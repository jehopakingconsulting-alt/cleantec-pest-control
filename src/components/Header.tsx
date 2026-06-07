import Link from "next/link";
import Image from "next/image";
import type { Locale, Dictionary } from "@/lib/i18n";
import LangSwitcher from "./LangSwitcher";
import MobileNav from "./MobileNav";

export default function Header({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const links = [
    { href: `/${lang}`, label: dict.nav.home },
    { href: `/${lang}/services`, label: dict.nav.services },
    { href: `/${lang}/about`, label: dict.nav.about },
    { href: `/${lang}/areas`, label: dict.nav.areas },
    { href: `/${lang}/testimonials`, label: dict.nav.testimonials },
    { href: `/${lang}/blog`, label: dict.nav.blog },
    { href: `/${lang}/contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-black/5 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link href={`/${lang}`} className="flex items-center gap-3 shrink-0">
          <Image src="/images/logo.jpeg" alt="Cleantec Pest Control" width={56} height={32} className="rounded-md object-contain" />
          <span className="font-heading font-extrabold text-lg sm:text-xl text-brand-dark leading-none">
            Cleantec <span className="text-brand-light">Pest Control</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-semibold text-brand-ink hover:text-brand-dark transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LangSwitcher lang={lang} />
          <a
            href={`tel:${dict.common.phone.replace(/[^+\d]/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full bg-brand-dark text-white text-sm font-semibold px-4 py-2 hover:bg-brand-light transition-colors"
          >
            📞 {dict.nav.callNow}
          </a>
          <Link
            href={`/${lang}/quote`}
            className="inline-flex items-center gap-2 rounded-full bg-brand-light text-white text-sm font-semibold px-4 py-2 hover:bg-brand-dark transition-colors"
          >
            {dict.nav.quote}
          </Link>
        </div>

        <MobileNav lang={lang} dict={dict} links={links} />
      </div>
    </header>
  );
}
