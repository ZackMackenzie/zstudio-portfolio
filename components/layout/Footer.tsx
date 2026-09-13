'use client';

import { useEffect, useState } from 'react';
import { site } from '@/content/site';
import { useI18n } from '@/lib/i18n/LanguageProvider';
import { MotionText } from '@/components/ui/MotionText';
import { MagneticButton } from '@/components/ui/MagneticButton';
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

export function Footer() {
  const { locale, dict } = useI18n();
  const time = useLocalTime(site.contact.timezone, locale);
  const [copied, setCopied] = useState(false);
  const year = new Date().getFullYear();

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — the email is still visible/selectable text
    }
  }

  return (
    <footer id="contact" className="scroll-mt-24 border-t border-line bg-bg">
      <div className="shell py-20 md:py-28">
        <MotionText
          as="h2"
          lines={dict.footer.titleLines}
          className="max-w-2xl font-display text-3xl font-medium leading-[0.98] tracking-tightest md:text-5xl"
        />

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <MagneticButton href={site.contact.whatsappUrl} cursorLabel="WhatsApp" className="text-text">
            {dict.footer.whatsapp}
            <span aria-hidden>↗</span>
          </MagneticButton>

          <div className="relative">
            <MagneticButton onClick={copyEmail} cursorLabel={dict.footer.copyEmail} className="text-dim">
              {site.contact.email}
            </MagneticButton>
            <span
              className={`pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-pill bg-accent2 px-3 py-1 font-mono text-2xs text-black transition-opacity duration-300 ${
                copied ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {dict.footer.copied}
            </span>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-line pt-6 font-mono text-2xs uppercase tracking-[0.14em] text-dim">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent2 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent2" />
          </span>
          <span className="text-text/75">{dict.footer.onlineNow}</span>
          <span className="opacity-40">·</span>
          <span>{dict.footer.baseLocation}</span>
          <span className="opacity-40">·</span>
          <span>{time || '—'}</span>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-6 font-mono text-2xs uppercase tracking-[0.14em] text-dim md:flex-row md:items-center md:justify-between">
          <span>
            © {year} {site.wordmark}
          </span>
          <button onClick={() => scrollToId('top')} className="link-underline w-fit" {...cursorHover('link')}>
            {dict.footer.backToTop}
          </button>
        </div>
      </div>
    </footer>
  );
}
