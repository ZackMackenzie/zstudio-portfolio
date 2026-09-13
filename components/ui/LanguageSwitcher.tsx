'use client';

import { useI18n } from '@/lib/i18n/LanguageProvider';
import { LOCALES, LOCALE_LABELS } from '@/lib/i18n/types';
import { cursorHover } from '@/components/cursor/cursor-store';
import { cn } from '@/lib/utils';

/** PT / EN / ES — small, discreet, matches the mono `.label` style used
 * across the site. Persists the choice via LanguageProvider (localStorage). */
export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, dict } = useI18n();

  return (
    <div
      className={cn('flex items-center gap-1.5 font-mono text-2xs uppercase tracking-[0.14em]', className)}
      role="group"
      aria-label={dict.languageSwitcher.label}
    >
      {LOCALES.map((l, i) => (
        <span key={l} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-dim">/</span>}
          <button
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={locale === l}
            className={cn(
              'transition-colors duration-300',
              locale === l ? 'text-accent2' : 'text-dim hover:text-text',
            )}
            {...cursorHover('link')}
          >
            {LOCALE_LABELS[l]}
          </button>
        </span>
      ))}
    </div>
  );
}
