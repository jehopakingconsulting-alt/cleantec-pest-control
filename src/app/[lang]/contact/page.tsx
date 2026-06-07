import { getDictionary, type Locale } from "@/lib/i18n";
import ContactForm from "@/components/ContactForm";

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  const c = dict.contact;

  return (
    <>
      <section className="bg-brand-dark text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="font-heading font-extrabold text-4xl mb-4">{c.title}</h1>
          <p className="text-white/80 max-w-2xl mx-auto">{c.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 grid gap-12 lg:grid-cols-2">
        <div className="rounded-2xl bg-brand-gray p-8">
          <ContactForm dict={dict} />
        </div>

        <div>
          <h2 className="font-heading font-bold text-2xl text-brand-dark mb-6">{c.infoTitle}</h2>
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-light text-white">📞</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-brand-ink/50">{c.phoneLabel}</p>
                <a href={`tel:${dict.common.phone.replace(/[^+\d]/g, "")}`} className="font-semibold text-brand-ink hover:text-brand-dark">{dict.common.phone}</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-light text-white">📧</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-brand-ink/50">{c.emailLabel}</p>
                <a href={`mailto:${dict.common.email}`} className="font-semibold text-brand-ink hover:text-brand-dark">{dict.common.email}</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-light text-white">📍</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-brand-ink/50">{c.addressLabel}</p>
                <p className="font-semibold text-brand-ink">{c.address}</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-light text-white">🕒</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-brand-ink/50">{c.hoursLabel}</p>
                <p className="font-semibold text-brand-ink">{dict.footer.hoursWeek}</p>
                <p className="font-semibold text-brand-ink">{dict.footer.hoursEmergency}</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
