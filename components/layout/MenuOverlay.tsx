'use client';

import { useEffect, useRef } from 'react';
import { site } from '@/content/site';
import { useI18n } from '@/lib/i18n/LanguageProvider';
import { StartProjectButton } from '@/components/ui/StartProjectButton';
import { formatIndex } from '@/lib/utils';
import { cursorHover } from '@/components/cursor/cursor-store';
import { cn } from '@/lib/utils';

/**
 * Always mounted (never conditionally rendered) — only the `open` prop
 * drives its visible state, via plain CSS transitions rather than Framer
 * Motion's `animate` prop. A Framer-driven version of this (both a
 * conditionally-mounted `motion.div` inside `AnimatePresence`, and later an
 * always-mounted one with a state-driven `animate` target) was found to
 * never actually reach its target values in this app, in dev AND in the
 * static production build, even though `open` itself updated correctly —
 * CSS transitions do not have that problem. `inert` keeps it out of the tab
 * order and the accessibility tree while closed.
 */
export function MenuOverlay({
  open,
  onNavigate,
  onClose,
}: {
  open: boolean;
  onNavigate: (id: string) => void;
  onClose: () => void;
}) {
  const { dict } = useI18n();
  const ref = useRef<HTMLDivElement>(null);

  const navLabels: Record<string, string> = {
    work: dict.nav.work,
    services: dict.nav.services,
    about: dict.nav.about,
    contact: dict.nav.contact,
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    // focus first link for keyboard users, next tick so it doesn't collide
    // with the opening transition
    const id = requestAnimationFrame(() => {
      ref.current?.querySelector<HTMLElement>('a,button')?.focus();
    });
    return () => {
      document.removeEventListener('keydown', onKey);
      cancelAnimationFrame(id);
    };
  }, [open, onClose]);

  return (
    <div
      id="menu-overlay"
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-label={dict.nav.menuAria}
      aria-hidden={!open}
      inert={!open}
      className={cn(
        'fixed inset-0 z-[75] bg-bg transition-[opacity,transform] duration-300 ease-expo',
        open ? 'translate-y-0 opacity-100' : '-translate-y-3 pointer-events-none opacity-0',
      )}
    >
      <div className="shell flex h-full flex-col justify-between pb-[env(safe-area-inset-bottom)] pt-28">
        <nav className="flex flex-col">
          {site.nav.map((item, i) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              style={{ transitionDelay: open ? `${100 + i * 50}ms` : '0ms' }}
              className={cn(
                'group flex items-baseline gap-5 border-b border-line py-4 text-left transition-[opacity,transform] duration-500 ease-expo md:py-6',
                open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
              )}
              {...cursorHover('link')}
            >
              <span className="label w-8 shrink-0 text-accent">{formatIndex(item.index)}</span>
              <span className="font-display text-2xl font-medium tracking-tighter transition-transform duration-400 ease-expo group-hover:translate-x-3 md:text-3xl">
                {navLabels[item.id]}
              </span>
            </button>
          ))}
        </nav>

        <div
          style={{ transitionDelay: open ? '350ms' : '0ms' }}
          className={cn(
            'flex flex-col gap-6 py-8 transition-opacity duration-500',
            open ? 'opacity-100' : 'opacity-0',
          )}
        >
          <StartProjectButton className="w-fit" onBeforeNavigate={onClose} />
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
        </div>
      </div>
    </div>
  );
}
