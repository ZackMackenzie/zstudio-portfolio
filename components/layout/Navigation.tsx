'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { site } from '@/content/site';
import { useI18n } from '@/lib/i18n/LanguageProvider';
import { scrollToId } from './SmoothScroll';
import { MenuOverlay } from './MenuOverlay';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { cursorHover } from '@/components/cursor/cursor-store';
import { cn } from '@/lib/utils';

/**
 * Deliberately just three things: the wordmark, the language switcher
 * (kept outside any menu on purpose — see lib/i18n), and Menu. Work / Services
 * / About / Contact and the "Start a project" CTA live inside MenuOverlay —
 * the portfolio is one click away, not competing for header space.
 */
export function Navigation() {
  const { dict } = useI18n();
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setAtTop(y < 24);
    if (open) return;
    setHidden(y > prev && y > 240);
  });

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  function goTo(id: string) {
    setOpen(false);
    // let the overlay begin closing before scrolling
    requestAnimationFrame(() => scrollToId(id));
  }

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden ? '-110%' : '0%' }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed inset-x-0 top-0 z-[80] transition-colors duration-500',
          !atTop && !open && 'bg-bg/70 backdrop-blur-md',
        )}
      >
        <div className="shell flex items-center justify-between py-5">
          <Link
            href="/"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                scrollToId('top');
              }
            }}
            className="font-display text-xl font-medium tracking-tight"
            {...cursorHover('link')}
          >
            {site.wordmark}
          </Link>

          <div className="flex items-center gap-5 md:gap-6">
            <LanguageSwitcher />
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em]"
              aria-expanded={open}
              aria-controls="menu-overlay"
              {...cursorHover('link')}
            >
              <span className="hidden sm:inline">{open ? dict.nav.close : dict.nav.menu}</span>
              <span className="relative flex h-3 w-5 flex-col justify-between">
                <motion.span
                  animate={{ rotate: open ? 45 : 0, y: open ? 5 : 0 }}
                  className="block h-px w-full bg-current"
                />
                <motion.span animate={{ opacity: open ? 0 : 1 }} className="block h-px w-full bg-current" />
                <motion.span
                  animate={{ rotate: open ? -45 : 0, y: open ? -5 : 0 }}
                  className="block h-px w-full bg-current"
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <MenuOverlay open={open} onNavigate={goTo} onClose={() => setOpen(false)} />
    </>
  );
}
