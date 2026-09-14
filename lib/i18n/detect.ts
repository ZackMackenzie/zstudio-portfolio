import { DEFAULT_LOCALE, LOCALES, type Locale } from './types';

/**
 * Picks a locale from a raw `Accept-Language` header value.
 * Simple weighted-tag parse — good enough for a 3-locale site, no dependency needed.
 */
export function detectLocaleFromAcceptLanguage(header: string | null): Locale {
  if (!header) return DEFAULT_LOCALE;

  const tags = header
    .split(',')
    .map((part) => {
      const [tag, q] = part.trim().split(';q=');
      return { tag: tag.toLowerCase(), q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of tags) {
    const short = tag.split('-')[0];
    const match = LOCALES.find((locale) => locale === short);
    if (match) return match;
  }

  return DEFAULT_LOCALE;
}
