import { getDictionary, type Locale } from "@/lib/i18n";
import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";

export default async function TestimonialsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);

  return (
    <>
      <section className="bg-brand-dark text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="font-heading font-extrabold text-4xl mb-4">{dict.testimonials.title}</h1>
          <p className="text-white/80 max-w-2xl mx-auto">{dict.testimonials.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.testimonials.list.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </section>

      <CTABanner lang={lang as Locale} title={dict.services.ctaTitle} text={dict.services.ctaText} buttonLabel={dict.services.ctaButton} />
    </>
  );
}
