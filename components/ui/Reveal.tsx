'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { revealUp } from '@/lib/motion';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'span';
}

export function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      variants={revealUp}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </Component>
  );
}
