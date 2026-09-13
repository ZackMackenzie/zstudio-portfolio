export const LOCALES = ['en', 'pt-BR'] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  'pt-BR': 'PT',
};
