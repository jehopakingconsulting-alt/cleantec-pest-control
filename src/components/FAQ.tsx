import type { Dictionary } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function FAQ({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-brand-gray">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading title={dict.home.faqTitle} />
        <div className="space-y-3">
          {dict.home.faq.map((item) => (
            <details key={item.q} className="group rounded-xl bg-white p-5 shadow-sm open:shadow-md">
              <summary className="cursor-pointer list-none font-heading font-bold text-brand-dark flex items-center justify-between gap-4">
                {item.q}
                <span className="shrink-0 text-brand-light transition-transform group-open:rotate-45 text-xl">+</span>
              </summary>
              <p className="mt-3 text-sm text-brand-ink/70 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
