'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { site } from '@/content/site';
import { useI18n } from '@/lib/i18n/LanguageProvider';
import { scrollToId } from './SmoothScroll';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { cursorHover } from '@/components/cursor/cursor-store';
import { cn } from '@/lib/utils';

/**
 * Minimalist sticky header: wordmark, a live "available for work" status
 * pill, the language toggle, and a single direct CTA. No hamburger / nav
 * links — this is a one-page, scroll-driven flow (see app/page.tsx).
 */
export function Navigation() {
  const { dict } = useI18n();
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setAtTop(y < 24);
    setHidden(y > prev && y > 240);
  });

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? '-110%' : '0%' }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-[80] transition-colors duration-500',
        !atTop && 'bg-bg/70 backdrop-blur-md',
      )}
    >
      <div className="shell flex items-center justify-between gap-4 py-5">
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

        <div className="hidden items-center gap-2 sm:flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent2 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent2" />
          </span>
          <span className="font-mono text-2xs uppercase tracking-[0.14em] text-dim">{dict.header.status}</span>
        </div>

        <div className="flex items-center gap-5 md:gap-6">
          <LanguageSwitcher />
          <MagneticButton href={site.contact.whatsappUrl} cursorLabel={dict.header.bookProject} className="px-4 py-2.5 text-2xs sm:px-5 sm:py-3 sm:text-xs">
            {dict.header.bookProject}
            <span aria-hidden>↗</span>
          </MagneticButton>
        </div>
      </div>
    </motion.header>
  );
}
