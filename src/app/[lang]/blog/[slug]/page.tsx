import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, locales, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.flatMap((lang) => {
    const dict = getDictionary(lang as Locale);
    return dict.blog.posts.map((p) => ({ lang, slug: p.slug }));
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const dict = getDictionary(lang as Locale);
  const post = dict.blog.posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <Link href={`/${lang}/blog`} className="text-sm font-semibold text-brand-light hover:text-brand-dark">
        ← {dict.blog.title}
      </Link>
      <time className="block mt-6 text-xs font-semibold text-brand-light uppercase tracking-wide">
        {new Date(post.date).toLocaleDateString(lang === "fr" ? "fr-CA" : "en-CA", { year: "numeric", month: "long", day: "numeric" })}
      </time>
      <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-dark mt-2 mb-6">{post.title}</h1>
      <p className="text-lg text-brand-ink/80 leading-relaxed mb-4">{post.excerpt}</p>
      <p className="text-brand-ink/70 leading-relaxed">
        {lang === "fr"
          ? "L'équipe de Cleantec Pest Control prépare régulièrement du contenu pour vous aider à mieux comprendre, prévenir et traiter les problèmes de nuisibles. Pour une évaluation personnalisée de votre situation, n'hésitez pas à demander une soumission gratuite ou à nous appeler directement."
          : "The Cleantec Pest Control team regularly prepares content to help you better understand, prevent and treat pest issues. For a personalized assessment of your situation, feel free to request a free quote or call us directly."}
      </p>
      <Link
        href={`/${lang}/quote`}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-dark text-white font-semibold px-6 py-3 hover:bg-brand-light transition-colors"
      >
        {dict.services.ctaButton} <span aria-hidden>→</span>
      </Link>
    </article>
  );
}
