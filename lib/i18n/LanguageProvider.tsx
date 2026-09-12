'use client';

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Locale } from './types';
import { ptBR, type Dictionary } from './locales/pt-BR';
import { en } from './locales/en';
import { es } from './locales/es';
import { STORAGE_KEY, detectLocale } from './detect';

const dictionaries: Record<Locale, Dictionary> = { 'pt-BR': ptBR, en, es };

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dict: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

declare global {
  interface Window {
    __Z_LANG__?: Locale;
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always starts as pt-BR — matches the statically-rendered HTML exactly,
  // so React's hydration pass never sees a text mismatch. The real locale
  // (saved choice, else browser language) is applied right after mount, in
  // the effect below — a normal post-hydration state update, not part of
  // the hydration diff.
  const [locale, setLocaleState] = useState<Locale>('pt-BR');

  useEffect(() => {
    const resolved = window.__Z_LANG__ ?? detectLocale();
    if (resolved !== 'pt-BR') setLocaleState(resolved);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  function setLocale(next: Locale) {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage unavailable — the choice just won't persist across visits
    }
  }

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, dict: dictionaries[locale] }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useI18n must be used within <LanguageProvider>.');
  return ctx;
}
