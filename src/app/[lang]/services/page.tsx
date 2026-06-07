import Image from "next/image";
import Link from "next/link";
import { getDictionary, type Locale } from "@/lib/i18n";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";

export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);

  return (
    <>
      <section className="bg-brand-dark text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="font-heading font-extrabold text-4xl mb-4">{dict.services.title}</h1>
          <p className="text-white/80 max-w-2xl mx-auto">{dict.services.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        {dict.services.list.map((s, i) => (
          <div key={s.name} className={`grid gap-10 items-center lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="relative h-72 sm:h-96 w-full overflow-hidden rounded-2xl shadow-lg">
              <Image src={`/images/${s.image}`} alt={s.name} fill className="object-cover" />
            </div>
            <div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-dark mb-3">{s.name}</h2>
              <p className="text-brand-ink/70 mb-5">{s.summary}</p>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-semibold text-brand-ink">
                    <span className="text-brand-light">✔</span> {item}
                  </li>
                ))}
              </ul>
              <Link
                href={`/${lang}/quote`}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-dark text-white font-semibold px-6 py-3 hover:bg-brand-light transition-colors"
              >
                {dict.services.ctaButton} <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        ))}
      </section>

      <CTABanner lang={lang as Locale} title={dict.services.ctaTitle} text={dict.services.ctaText} buttonLabel={dict.services.ctaButton} />
    </>
  );
}
