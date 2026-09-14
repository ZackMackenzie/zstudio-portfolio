import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

/**
 * Z.studio wordmark — the identity's primary mark. Set in the display face,
 * the period rendered in the accent color as the system's single recurring detail.
 */
export function Logo({ className }: LogoProps) {
  return (
    <span className={cn('font-display font-semibold tracking-tightest', className)}>
      Z<span className="text-accent">.</span>studio
    </span>
  );
}
