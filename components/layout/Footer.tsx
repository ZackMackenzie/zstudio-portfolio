'use client';

import { site } from '@/content/site';
import { useI18n } from '@/lib/i18n/LanguageProvider';
import { scrollToId } from './SmoothScroll';
import { cursorHover } from '@/components/cursor/cursor-store';

export function Footer() {
  const { dict } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg">
      <div className="shell py-16 md:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-3xl font-medium tracking-tight">{site.wordmarkFull}</p>
            <p className="mt-3 max-w-xs text-sm text-dim">{dict.footer.tagline}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline w-fit font-mono text-xs uppercase tracking-[0.14em] text-dim hover:text-text"
                {...cursorHover('link')}
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 font-mono text-2xs uppercase tracking-[0.14em] text-dim md:flex-row md:items-center md:justify-between">
          <span>
            © {year} {site.wordmarkFull}
          </span>
          <span className="hidden md:inline">{dict.footer.colophon}</span>
          <button onClick={() => scrollToId('top')} className="link-underline w-fit" {...cursorHover('link')}>
            {dict.footer.backToTop}
          </button>
        </div>
      </div>
    </footer>
  );
}
