'use client';

import { useI18n } from '@/lib/i18n/LanguageProvider';
import { scrollToId } from '@/components/layout/SmoothScroll';
import { MagneticButton } from './MagneticButton';

/**
 * The site's one recurring primary CTA — always scrolls to the Contact
 * section (the real contact form + direct links), never to an intermediary
 * page. Used in the header, hero, after Services, after Selected Work and
 * in the footer.
 */
export function StartProjectButton({
  className = '',
  variant = 'default',
  compact = false,
  onBeforeNavigate,
}: {
  className?: string;
  variant?: 'default' | 'solid';
  compact?: boolean;
  /** Runs before scrolling to #contact — e.g. to close a menu overlay first. */
  onBeforeNavigate?: () => void;
}) {
  const { dict } = useI18n();

  const variantCls = variant === 'solid' ? 'border-accent2 bg-accent2/10 text-text hover:bg-accent2/20' : '';
  const sizeCls = compact ? 'px-4 py-2.5' : '';

  return (
    <MagneticButton
      onClick={() => {
        onBeforeNavigate?.();
        scrollToId('contact');
      }}
      cursorLabel={dict.cta.startProject}
      className={`${variantCls} ${sizeCls} ${className}`}
    >
      {dict.cta.startProject}
      <span aria-hidden>→</span>
    </MagneticButton>
  );
}
