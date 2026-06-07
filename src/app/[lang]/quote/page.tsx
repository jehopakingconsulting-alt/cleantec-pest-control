import { getDictionary, type Locale } from "@/lib/i18n";
import QuoteForm from "@/components/QuoteForm";

export default async function QuotePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  const q = dict.quote;

  return (
    <>
      <section className="bg-brand-dark text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="font-heading font-extrabold text-4xl mb-4">{q.title}</h1>
          <p className="text-white/80 max-w-2xl mx-auto">{q.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-2xl bg-brand-gray p-8">
          <QuoteForm dict={dict} />
        </div>
      </section>
    </>
  );
}
