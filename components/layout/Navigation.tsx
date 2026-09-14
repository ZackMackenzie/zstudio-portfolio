'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Dictionary } from '@/lib/i18n/types';
import type { Locale } from '@/lib/i18n/types';
import { Logo } from '@/components/ui/Logo';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { cn } from '@/lib/utils';

interface NavigationProps {
  dict: Dictionary;
  locale: Locale;
}

export function Navigation({ dict, locale }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: `/${locale}#work`, label: dict.nav.work },
    { href: `/${locale}#services`, label: dict.nav.services },
    { href: `/${locale}#contact`, label: dict.nav.contact },
  ];

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-400',
        scrolled ? 'border-b border-line bg-bg/85 backdrop-blur-md' : 'border-b border-transparent'
      )}
    >
      <nav className="container-page flex h-[72px] items-center justify-between" aria-label="Primary">
        <Link href={`/${locale}`} data-cursor-hover className="text-lg">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-cursor-hover
                className="text-sm text-dim transition-colors duration-400 hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <LanguageSwitcher current={locale} className="hidden sm:flex" />
          <MagneticButton className="hidden md:inline-block">
            <a
              href={`/${locale}#contact`}
              data-cursor-hover
              className="rounded-pill border border-line px-5 py-2.5 text-sm transition-colors duration-400 hover:border-accent hover:text-accent-soft"
            >
              {dict.nav.cta}
            </a>
          </MagneticButton>

          <button
            type="button"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 5 : 0 }}
              className="h-px w-6 bg-text"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -5 : 0 }}
              className="h-px w-6 bg-text"
            />
          </button>
        </div>
      </nav>

      {open ? (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-line bg-bg md:hidden"
        >
          <ul className="container-page flex flex-col gap-1 py-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-xl font-display"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-4 flex items-center justify-between">
              <LanguageSwitcher current={locale} />
              <a
                href={`/${locale}#contact`}
                onClick={() => setOpen(false)}
                className="rounded-pill border border-line px-5 py-2.5 text-sm"
              >
                {dict.nav.cta}
              </a>
            </li>
          </ul>
        </motion.div>
      ) : null}
    </header>
  );
}
