'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';
import { cursorHover } from '@/components/cursor/cursor-store';
import { usePointerFine } from '@/lib/hooks/usePointerFine';
import { cn } from '@/lib/utils';

function useMagnetic(strength: number) {
  const ref = useRef<HTMLElement>(null);
  const pointerFine = usePointerFine();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });

  const onMouseMove = (e: React.MouseEvent) => {
    if (!pointerFine || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, sx, sy, onMouseMove, reset };
}

const CLS =
  'group relative inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-pill border border-line px-7 py-4 font-mono text-xs uppercase tracking-[0.16em] transition-colors duration-400 hover:border-text';

type Props = {
  children: ReactNode;
  className?: string;
  strength?: number;
  cursorLabel?: string;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  /** Only applies to the button form (no `href`) — defaults to "button". */
  type?: 'button' | 'submit';
  /** Only applies to the button form (no `href`). */
  disabled?: boolean;
  'aria-label'?: string;
};

export function MagneticButton({
  children,
  className,
  strength = 0.35,
  cursorLabel,
  href,
  external,
  onClick,
  type = 'button',
  disabled,
  ...rest
}: Props) {
  const { ref, sx, sy, onMouseMove, reset } = useMagnetic(strength);
  const hover = cursorHover('link', cursorLabel ?? '');

  const handlers = {
    onMouseMove,
    onMouseEnter: hover.onMouseEnter,
    onMouseLeave: () => {
      reset();
      hover.onMouseLeave();
    },
    onFocus: hover.onFocus,
    onBlur: hover.onBlur,
  };

  const inner = (
    <motion.span style={{ x: sx, y: sy }} className="flex items-center gap-3">
      {children}
    </motion.span>
  );

  if (href) {
    const isExternal = external ?? /^(https?:|mailto:|tel:)/.test(href);
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={cn(CLS, className)}
        {...handlers}
        {...rest}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(CLS, 'disabled:cursor-not-allowed disabled:opacity-60', className)}
      {...handlers}
      {...rest}
    >
      {inner}
    </button>
  );
}
