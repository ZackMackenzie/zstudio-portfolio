'use client';

import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { lineReveal, stagger, viewport } from '@/lib/motion';
import { cn } from '@/lib/utils';

const TAGS = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  p: motion.p,
  div: motion.div,
  span: motion.span,
} as const;

type Props = {
  /** Each entry becomes one clip-masked line that reveals from below. */
  lines: ReactNode[];
  as?: keyof typeof TAGS;
  className?: string;
  lineClassName?: string;
  delay?: number;
  staggerChildren?: number;
  /** animate on scroll into view (default) or immediately on mount */
  trigger?: 'inView' | 'mount';
};

export function MotionText({
  lines,
  as = 'h2',
  className,
  lineClassName,
  delay = 0,
  staggerChildren = 0.09,
  trigger = 'inView',
}: Props) {
  const Comp = TAGS[as];
  const animationProps =
    trigger === 'inView'
      ? { whileInView: 'visible' as const, viewport }
      : { animate: 'visible' as const };

  return (
    <Comp
      className={cn('overflow-hidden', className)}
      initial="hidden"
      variants={stagger(staggerChildren, delay)}
      {...animationProps}
    >
      {lines.map((line, i) => (
        <span key={i} className="line-mask">
          <motion.span
            variants={lineReveal}
            className={cn('block will-change-transform', lineClassName)}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Comp>
  );
}
