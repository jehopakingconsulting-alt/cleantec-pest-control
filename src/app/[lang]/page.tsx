import { getDictionary, type Locale } from "@/lib/i18n";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";
import VideoSection from "@/components/VideoSection";
import FAQ from "@/components/FAQ";

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);

  return (
    <>
      <Hero lang={lang as Locale} dict={dict} />

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading title={dict.home.servicesTitle} subtitle={dict.home.servicesSubtitle} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.services.list.map((s) => (
            <ServiceCard
              key={s.name}
              name={s.name}
              summary={s.summary}
              image={s.image}
              href={`/${lang}/services`}
              ctaLabel={dict.services.ctaButton}
            />
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-brand-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeading title={dict.home.whyTitle} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dict.home.why.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-light text-white font-bold">✔</span>
                <span className="font-semibold text-brand-ink">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading title={dict.home.howTitle} />
        <div className="grid gap-8 sm:grid-cols-3">
          {dict.home.how.map((step, i) => (
            <div key={step.title} className="relative rounded-2xl border border-black/5 bg-white p-8 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-dark text-white font-heading font-extrabold text-xl">
                {i + 1}
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-dark mb-2">{step.title}</h3>
              <p className="text-sm text-brand-ink/70">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <VideoSection dict={dict} />

      {/* Testimonials */}
      <section className="bg-brand-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeading title={dict.home.testimonialsTitle} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dict.testimonials.list.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <FAQ dict={dict} />

      <CTABanner
        lang={lang as Locale}
        title={dict.home.ctaBannerTitle}
        text={dict.home.ctaBannerText}
        buttonLabel={dict.home.ctaBannerButton}
      />
    </>
  );
}
