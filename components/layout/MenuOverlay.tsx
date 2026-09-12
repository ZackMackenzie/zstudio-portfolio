'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { site } from '@/content/site';
import { useI18n } from '@/lib/i18n/LanguageProvider';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { StartProjectButton } from '@/components/ui/StartProjectButton';
import { formatIndex } from '@/lib/utils';
import { cursorHover } from '@/components/cursor/cursor-store';

export function MenuOverlay({
  onNavigate,
  onClose,
}: {
  onNavigate: (id: string) => void;
  onClose: () => void;
}) {
  const { dict } = useI18n();
  const ref = useRef<HTMLDivElement>(null);

  const navLabels: Record<string, string> = {
    work: dict.nav.work,
    services: dict.nav.services,
    about: dict.nav.about,
    capabilities: dict.nav.capabilities,
    lab: dict.nav.lab,
    contact: dict.nav.contact,
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    // focus first link for keyboard users
    ref.current?.querySelector<HTMLElement>('a,button')?.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      id="menu-overlay"
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-label={dict.nav.menuAria}
      initial={{ clipPath: 'inset(0 0 100% 0)' }}
      animate={{ clipPath: 'inset(0 0 0% 0)' }}
      exit={{ clipPath: 'inset(0 0 100% 0)' }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[75] bg-bg"
    >
      <div className="shell flex h-full flex-col justify-between pb-[env(safe-area-inset-bottom)] pt-28">
        <nav className="flex flex-col">
          {site.nav.map((item, i) => (
            <motion.button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 + i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-baseline gap-5 border-b border-line py-4 text-left md:py-6"
              {...cursorHover('link')}
            >
              <span className="label w-8 shrink-0 text-accent">{formatIndex(item.index)}</span>
              <span className="font-display text-2xl font-medium tracking-tighter transition-transform duration-400 ease-expo group-hover:translate-x-3 md:text-3xl">
                {navLabels[item.id]}
              </span>
            </motion.button>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col gap-6 py-8"
        >
          <StartProjectButton className="w-fit" onBeforeNavigate={onClose} />
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline font-mono text-xs uppercase tracking-[0.14em] text-dim hover:text-text"
                  {...cursorHover('link')}
                >
                  {s.label}
                </a>
              ))}
            </div>
            <LanguageSwitcher />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
