import type { LanguageItem, LanguageType } from "@/types/typesDapp/language";

/**
 * Get translation for a given language item.
 * Falls back to English if the translation is missing.
 */
export function t(item: LanguageItem | string, lang: LanguageType): string {
  if (typeof item === 'string') return item;
  return item[lang] || item['en'] || '';
}

/**
 * Helper to create a translation object
 */
export function createI18n<T extends Record<string, any>>(data: T): T {
  return data;
}
