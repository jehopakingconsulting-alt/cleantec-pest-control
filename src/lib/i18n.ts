import "server-only";
import fr from "@/dictionaries/fr.json";
import en from "@/dictionaries/en.json";

export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

const dictionaries = { fr, en };

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export type Dictionary = ReturnType<typeof getDictionary>;
