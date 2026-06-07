import Link from "next/link";
import { getDictionary, type Locale } from "@/lib/i18n";

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);

  return (
    <>
      <section className="bg-brand-dark text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="font-heading font-extrabold text-4xl mb-4">{dict.blog.title}</h1>
          <p className="text-white/80 max-w-2xl mx-auto">{dict.blog.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 grid gap-6 sm:grid-cols-2">
        {dict.blog.posts.map((post) => (
          <article key={post.slug} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col">
            <time className="text-xs font-semibold text-brand-light uppercase tracking-wide mb-2">
              {new Date(post.date).toLocaleDateString(lang === "fr" ? "fr-CA" : "en-CA", { year: "numeric", month: "long", day: "numeric" })}
            </time>
            <h2 className="font-heading font-bold text-xl text-brand-dark mb-2">{post.title}</h2>
            <p className="text-sm text-brand-ink/70 flex-1">{post.excerpt}</p>
            <Link href={`/${lang}/blog/${post.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-light hover:text-brand-dark transition-colors">
              {dict.blog.readMore} <span aria-hidden>→</span>
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
