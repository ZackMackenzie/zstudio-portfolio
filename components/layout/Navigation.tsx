'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { site, whatsappHref } from '@/content/site';
import { useI18n } from '@/lib/i18n/LanguageProvider';
import { scrollToId } from './SmoothScroll';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { cursorHover } from '@/components/cursor/cursor-store';
import { cn } from '@/lib/utils';

const NAV_IDS = ['work', 'services', 'about', 'contact'] as const;

/**
 * Sticky header: wordmark, four scroll-anchored nav links (desktop), a live
 * "available for work" status pill, the language toggle, and a single direct
 * CTA. Below `md` the links collapse into a simple slide-down panel — still
 * a one-page, scroll-driven flow (see app/page.tsx), just with real nav.
 */
export function Navigation() {
  const { dict } = useI18n();
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setAtTop(y < 24);
    setHidden(!menuOpen && y > prev && y > 240);
  });

  function goTo(id: string) {
    setMenuOpen(false);
    scrollToId(id);
  }

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? '-110%' : '0%' }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-[80] transition-colors duration-500',
        (!atTop || menuOpen) && 'bg-bg/70 backdrop-blur-md',
      )}
    >
      <div className="shell flex items-center justify-between gap-4 py-5">
        <Link
          href="/"
          onClick={(e) => {
            if (window.location.pathname === '/') {
              e.preventDefault();
              goTo('top');
            }
          }}
          className="font-display text-xl font-extrabold tracking-tight"
          {...cursorHover('link')}
        >
          {site.wordmark}
        </Link>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8" aria-label="Primary">
          {NAV_IDS.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => goTo(id)}
              className="link-underline font-mono text-2xs uppercase tracking-[0.14em] text-dim transition-colors duration-300 hover:text-text"
              {...cursorHover('link')}
            >
              {dict.nav[id]}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 2xl:flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent2 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent2" />
          </span>
          <span className="whitespace-nowrap font-mono text-2xs uppercase tracking-[0.14em] text-dim">{dict.header.status}</span>
        </div>

        <div className="flex items-center gap-4 md:gap-5 lg:gap-6">
          <LanguageSwitcher className="hidden sm:flex" />
          <MagneticButton
            href={whatsappHref(dict.whatsappMessage)}
            cursorLabel={dict.header.bookProject}
            className="hidden px-4 py-2.5 text-2xs sm:inline-flex sm:px-5 sm:py-3 sm:text-xs"
          >
            {dict.header.bookProject}
            <span aria-hidden>↗</span>
          </MagneticButton>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="relative flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
            {...cursorHover('link')}
          >
            <span
              className={cn(
                'h-px w-5 bg-text transition-transform duration-300',
                menuOpen && 'translate-y-[3.5px] rotate-45',
              )}
            />
            <span
              className={cn(
                'h-px w-5 bg-text transition-transform duration-300',
                menuOpen && '-translate-y-[3.5px] -rotate-45',
              )}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/[0.08] bg-bg md:hidden"
          >
            <div className="shell flex flex-col gap-1 py-6">
              {NAV_IDS.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => goTo(id)}
                  className="py-3 text-left font-display text-2xl font-extrabold tracking-tight"
                >
                  {dict.nav[id]}
                </button>
              ))}
              <div className="mt-4 flex items-center justify-between border-t border-white/[0.08] pt-5">
                <LanguageSwitcher />
                <MagneticButton href={whatsappHref(dict.whatsappMessage)} cursorLabel={dict.header.bookProject} className="px-5 py-3 text-xs">
                  {dict.header.bookProject}
                  <span aria-hidden>↗</span>
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
