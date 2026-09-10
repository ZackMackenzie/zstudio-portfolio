'use client';

import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { reveal, stagger, viewport } from '@/lib/motion';
import { cn } from '@/lib/utils';

/** Fade + rise on scroll into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'li' | 'span';
}) {
  const Comp = as === 'li' ? motion.li : as === 'span' ? motion.span : motion.div;
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: reveal.hidden,
        visible: {
          ...(reveal.visible as object),
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
        },
      }}
    >
      {children}
    </Comp>
  );
}

/** Staggered container — direct children should use <RevealItem>. */
export function RevealGroup({
  children,
  className,
  amount = 0.1,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={stagger(amount)}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={reveal}>
      {children}
    </motion.div>
  );
}
