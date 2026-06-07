import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export default function CTABanner({
  lang,
  title,
  text,
  buttonLabel,
}: {
  lang: Locale;
  title: string;
  text: string;
  buttonLabel: string;
}) {
  return (
    <section className="bg-brand-light">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 text-center text-white">
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl mb-3">{title}</h2>
        <p className="text-white/90 mb-7 max-w-xl mx-auto">{text}</p>
        <Link
          href={`/${lang}/quote`}
          className="inline-flex items-center gap-2 rounded-full bg-white text-brand-dark font-bold px-7 py-3.5 hover:bg-brand-dark hover:text-white transition-colors shadow-lg"
        >
          {buttonLabel} <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
