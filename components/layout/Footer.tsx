'use client';

import { useEffect, useState } from 'react';
import { site } from '@/content/site';
import { useI18n } from '@/lib/i18n/LanguageProvider';
import { cursorHover } from '@/components/cursor/cursor-store';
import { scrollToId } from './SmoothScroll';

function useLocalTime(timeZone: string, locale: string) {
  const [time, setTime] = useState('');
  useEffect(() => {
    const update = () => {
      try {
        setTime(new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit', timeZone }).format(new Date()));
      } catch {
        setTime('');
      }
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, [timeZone, locale]);
  return time;
}

function ClockBadge({ city, time }: { city: string; time: string }) {
  return (
    <span className="font-mono text-2xs uppercase tracking-[0.14em] text-dim">
      {city} <span className="text-text/60">{time || '—'}</span>
    </span>
  );
}

/**
 * Slim closing bar — status/clocks + copyright/back-to-top. The primary
 * contact CTA lives in components/sections/Contact.tsx; keeping this ambient
 * strip here (not duplicated) reinforces "available now, in your timezone"
 * on every page without repeating the WhatsApp/email actions.
 */
export function Footer() {
  const { locale, dict } = useI18n();
  const saoPaulo = useLocalTime(site.contact.timezone, locale);
  const newYork = useLocalTime('America/New_York', locale);

  return (
    <footer className="border-t border-white/[0.08] bg-bg">
      <div className="shell py-10 md:py-12">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="flex items-center gap-2 font-mono text-2xs uppercase tracking-[0.14em] text-dim">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent2 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent2" />
            </span>
            <span className="text-text/75">{dict.footer.onlineNow}</span>
          </span>
          <ClockBadge city="São Paulo / UTC-3" time={saoPaulo} />
          <ClockBadge city="New York / UTC-5" time={newYork} />
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-white/[0.08] pt-6 font-mono text-2xs uppercase tracking-[0.14em] text-dim md:flex-row md:items-center md:justify-between">
          <span>{dict.footer.copyright}</span>
          <button onClick={() => scrollToId('top')} className="link-underline w-fit" {...cursorHover('link')}>
            {dict.footer.backToTop}
          </button>
        </div>
      </div>
    </footer>
  );
}
