import Link from "next/link";
import Image from "next/image";
import type { Locale, Dictionary } from "@/lib/i18n";

export default function Hero({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-brand-dark text-white">
      <Image
        src="/images/fum-image2.jpeg"
        alt=""
        fill
        priority
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-2xl">
          <p className="font-heading font-bold tracking-wide text-brand-light uppercase mb-3">Cleantec Pest Control</p>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            {dict.home.heroTitle}
          </h1>
          <p className="text-lg sm:text-xl text-white/85 mb-8 max-w-xl">
            {dict.home.heroSubtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={`/${lang}/quote`}
              className="inline-flex items-center gap-2 rounded-full bg-brand-light text-white font-semibold px-6 py-3.5 hover:bg-white hover:text-brand-dark transition-colors shadow-lg"
            >
              🟢 {dict.home.ctaQuote}
            </Link>
            <a
              href={`tel:${dict.common.phone.replace(/[^+\d]/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white text-white font-semibold px-6 py-3.5 hover:bg-white hover:text-brand-dark transition-colors"
            >
              📞 {dict.home.ctaCall}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
