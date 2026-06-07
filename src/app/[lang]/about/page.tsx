import Image from "next/image";
import { getDictionary, type Locale } from "@/lib/i18n";
import SectionHeading from "@/components/SectionHeading";
import CTABanner from "@/components/CTABanner";

const teamImages = ["fum-image8.jpeg", "fum-image9.jpeg", "term-image6.jpeg", "term-image1.jpeg"];

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);

  return (
    <>
      <section className="bg-brand-dark text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="font-heading font-extrabold text-4xl mb-4">{dict.about.title}</h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-center space-y-5">
        <p className="text-lg text-brand-ink/80">{dict.about.p1}</p>
        <p className="text-lg text-brand-ink/80">{dict.about.p2}</p>
      </section>

      <section className="bg-brand-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <SectionHeading title={dict.about.valuesTitle} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dict.about.values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-heading font-bold text-brand-dark mb-2">{v.title}</h3>
                <p className="text-sm text-brand-ink/70">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading title={dict.about.teamTitle} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamImages.map((img) => (
            <div key={img} className="relative h-64 w-full overflow-hidden rounded-2xl shadow-sm">
              <Image src={`/images/${img}`} alt={dict.about.teamTitle} fill className="object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </section>

      <CTABanner lang={lang as Locale} title={dict.services.ctaTitle} text={dict.services.ctaText} buttonLabel={dict.services.ctaButton} />
    </>
  );
}
