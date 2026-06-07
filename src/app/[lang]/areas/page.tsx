import { getDictionary, type Locale } from "@/lib/i18n";
import CTABanner from "@/components/CTABanner";

export default async function AreasPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);

  return (
    <>
      <section className="bg-brand-dark text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="font-heading font-extrabold text-4xl mb-4">{dict.areas.title}</h1>
          <p className="text-white/80 max-w-2xl mx-auto">{dict.areas.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid gap-12 lg:grid-cols-2 items-start">
        <div>
          <ul className="grid grid-cols-2 gap-4">
            {dict.areas.cities.map((city) => (
              <li key={city} className="flex items-center gap-3 rounded-xl bg-brand-gray px-5 py-4 font-semibold text-brand-ink">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-light text-white">📍</span>
                {city}
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-lg border border-black/5">
          <iframe
            title={dict.areas.mapNote}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d177943.6!2d-73.85!3d45.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDM3JzQ4LjAiTiA3M8KwNDQnMzAuMCJX!5e0!3m2!1sen!2sca!4v1700000000000"
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <CTABanner lang={lang as Locale} title={dict.services.ctaTitle} text={dict.services.ctaText} buttonLabel={dict.services.ctaButton} />
    </>
  );
}
