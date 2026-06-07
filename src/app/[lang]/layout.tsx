import type { Metadata } from "next";
import { getDictionary, locales, type Locale } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  return {
    title: { default: `Cleantec Pest Control — ${dict.home.heroTitle}`, template: "%s | Cleantec Pest Control" },
    description: dict.home.heroSubtitle,
    alternates: {
      languages: { fr: "/fr", en: "/en" },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);

  return (
    <div lang={lang} className="flex min-h-screen flex-col">
      <Header lang={lang as Locale} dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang as Locale} dict={dict} />
      <WhatsAppButton dict={dict} />
    </div>
  );
}
