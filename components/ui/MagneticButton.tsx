'use client';

import { useRef, type ReactNode, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { usePointerFine } from '@/lib/hooks/usePointerFine';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: 'div' | 'span';
}

/** Wraps interactive content with a subtle cursor-follow pull — disabled on touch. */
export function MagneticButton({ children, className, strength = 0.35, as = 'div' }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isPointerFine = usePointerFine();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (!isPointerFine || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = event.clientX - (rect.left + rect.width / 2);
    const relY = event.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const Component = motion[as];

  return (
    <Component
      ref={ref as never}
      className={cn('inline-block', className)}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </Component>
  );
}
