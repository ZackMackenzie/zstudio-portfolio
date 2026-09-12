'use client';

import { useI18n } from '@/lib/i18n/LanguageProvider';
import { scrollToId } from '@/components/layout/SmoothScroll';
import { MagneticButton } from './MagneticButton';

/**
 * The site's one recurring primary CTA — always scrolls to the Contact
 * section (the real contact form + direct links), never to an intermediary
 * page. Appears in the header, hero, after Selected Work and inside Contact
 * itself — never hidden behind a secondary menu.
 */
export function StartProjectButton({
  className = '',
  variant = 'default',
  compact = false,
  iconOnly = false,
  onBeforeNavigate,
}: {
  className?: string;
  variant?: 'default' | 'solid';
  compact?: boolean;
  /** Renders as a small round "→" button with the label only for screen readers — for the tightest header breakpoint. */
  iconOnly?: boolean;
  /** Runs before scrolling to #contact — e.g. to close a menu overlay first. */
  onBeforeNavigate?: () => void;
}) {
  const { dict } = useI18n();

  const variantCls = variant === 'solid' ? 'border-accent2 bg-accent2/10 text-text hover:bg-accent2/20' : '';
  const sizeCls = iconOnly ? 'h-10 w-10 !gap-0 !px-0 !py-0' : compact ? 'px-4 py-2.5' : '';

  return (
    <MagneticButton
      onClick={() => {
        onBeforeNavigate?.();
        scrollToId('contact');
      }}
      cursorLabel={dict.cta.startProject}
      aria-label={iconOnly ? dict.cta.startProject : undefined}
      className={`${variantCls} ${sizeCls} ${className}`}
    >
      {iconOnly ? (
        <span aria-hidden>→</span>
      ) : (
        <>
          {dict.cta.startProject}
          <span aria-hidden>→</span>
        </>
      )}
    </MagneticButton>
  );
}
