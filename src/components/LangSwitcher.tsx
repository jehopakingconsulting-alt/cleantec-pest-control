"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

export default function LangSwitcher({ lang }: { lang: Locale }) {
  const pathname = usePathname();
  const other: Locale = lang === "fr" ? "en" : "fr";
  const rest = pathname?.split("/").slice(2).join("/") ?? "";
  const href = `/${other}${rest ? `/${rest}` : ""}`;

  return (
    <Link
      href={href}
      className="text-sm font-bold rounded-full border border-brand-dark text-brand-dark px-3 py-1.5 hover:bg-brand-dark hover:text-white transition-colors"
    >
      {other.toUpperCase()}
    </Link>
  );
}
