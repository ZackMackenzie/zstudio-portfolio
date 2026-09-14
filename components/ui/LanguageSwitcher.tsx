'use client';

import { usePathname, useRouter } from 'next/navigation';
import { LOCALES, LOCALE_LABELS, type Locale } from '@/lib/i18n/types';
import { cn } from '@/lib/utils';

const LOCALE_COOKIE = 'z_locale';

interface LanguageSwitcherProps {
  current: Locale;
  className?: string;
}

export function LanguageSwitcher({ current, className }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  function switchTo(locale: Locale) {
    if (locale === current) return;
    document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000`;
    const rest = pathname.split('/').slice(2).join('/');
    router.push(`/${locale}${rest ? `/${rest}` : ''}`);
  }

  return (
    <div className={cn('flex items-center gap-1 font-mono text-2xs', className)} role="group" aria-label="Language">
      {LOCALES.map((locale, index) => (
        <span key={locale} className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => switchTo(locale)}
            aria-pressed={locale === current}
            className={cn(
              'rounded-sm px-1.5 py-1 uppercase tracking-wide transition-colors duration-400',
              locale === current ? 'text-text' : 'text-dim hover:text-text'
            )}
          >
            {LOCALE_LABELS[locale]}
          </button>
          {index < LOCALES.length - 1 ? <span className="text-line">/</span> : null}
        </span>
      ))}
    </div>
  );
}
