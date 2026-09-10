'use client';

import Link from 'next/link';
import { site } from '@/content/site';
import { scrollToId } from './SmoothScroll';
import { cursorHover } from '@/components/cursor/cursor-store';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg">
      <div className="shell py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl font-medium tracking-tight">{site.wordmarkFull}</p>
            <p className="mt-4 max-w-xs text-sm text-dim">{site.description}</p>
          </div>

          <nav className="flex flex-col gap-2">
            <p className="label mb-2">Index</p>
            {site.nav.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className="link-underline w-fit text-sm text-dim hover:text-text"
                {...cursorHover('link')}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <nav className="flex flex-col gap-2">
            <p className="label mb-2">Elsewhere</p>
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline w-fit text-sm text-dim hover:text-text"
                {...cursorHover('link')}
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-6 font-mono text-2xs uppercase tracking-[0.14em] text-dim md:flex-row md:items-center md:justify-between">
          <span>
            © {year} {site.wordmarkFull}
          </span>
          <span className="hidden md:inline">
            Hanken Grotesk · Inter · IBM Plex Mono — Next.js · Remotion
          </span>
          <button onClick={() => scrollToId('top')} className="link-underline w-fit" {...cursorHover('link')}>
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
