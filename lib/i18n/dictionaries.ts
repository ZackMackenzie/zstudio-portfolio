import type { Dictionary } from './types';
import type { Locale } from './types';
import en from './locales/en';
import pt from './locales/pt';
import es from './locales/es';

const dictionaries: Record<Locale, Dictionary> = { en, pt, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
