export const LOCALES = ['pt', 'en', 'es'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_LABELS: Record<Locale, string> = {
  pt: 'PT',
  en: 'EN',
  es: 'ES',
};

export const LOCALE_NAMES: Record<Locale, string> = {
  pt: 'Português',
  en: 'English',
  es: 'Español',
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    work: string;
    services: string;
    about: string;
    contact: string;
    cta: string;
  };
  hero: {
    kicker: string;
    line1: string;
    line2: string;
    subhead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
  };
  work: {
    kicker: string;
    title: string;
    intro: string;
    concept: string;
    viewCase: string;
    allProjects: string;
    role: string;
    year: string;
  };
  services: {
    kicker: string;
    title: string;
    intro: string;
    cta: string;
    items: { index: string; title: string; description: string; tags: string[] }[];
  };
  about: {
    kicker: string;
    title: string;
    paragraphs: string[];
    stack: { label: string; items: string[] }[];
  };
  contact: {
    kicker: string;
    title: string;
    intro: string;
    formName: string;
    formEmail: string;
    formCompany: string;
    formCompanyOptional: string;
    formType: string;
    formTypeOptions: string[];
    formMessage: string;
    formMessagePlaceholder: string;
    formSubmit: string;
    formSubmitting: string;
    formSuccess: string;
    formError: string;
    directLabel: string;
  };
  footer: {
    tagline: string;
    rights: string;
    back: string;
  };
  notFound: {
    kicker: string;
    title: string;
    body: string;
    cta: string;
  };
  caseStudy: {
    overview: string;
    category: string;
    servicesLabel: string;
    year: string;
    challenge: string;
    solution: string;
    process: string;
    result: string;
    noResult: string;
    next: string;
    back: string;
  };
}
