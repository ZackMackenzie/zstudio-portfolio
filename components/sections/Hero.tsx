'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MotionText } from '@/components/ui/MotionText';
import { Marquee } from '@/components/ui/Marquee';
import { HeroField } from './HeroField';
import { disciplines } from '@/content/capabilities';
import { scrollToId } from '@/components/layout/SmoothScroll';
import { cursorHover } from '@/components/cursor/cursor-store';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '9%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <HeroField />

      <motion.div
        style={{ y, opacity }}
        className="shell relative z-10 flex flex-1 flex-col justify-start pb-10 pt-28 md:justify-center md:pt-24"
      >
        <p className="label mb-6 flex items-center gap-3">
          <span className="inline-block h-1.5 w-1.5 rounded-pill bg-accent2" />
          Estúdio de design e tecnologia digital
          <span className="ml-auto hidden text-dim/60 sm:inline">Portfólio — 2026</span>
        </p>

        <h1 className="font-display text-3xl font-medium leading-[0.95] tracking-tightest md:text-4xl">
          <MotionText
            as="span"
            trigger="mount"
            lineClassName="block"
            lines={[
              'Eu construo',
              'experiências',
              <span key="3" className="text-gradient">
                digitais.
              </span>,
            ]}
          />
        </h1>

        <div className="mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md text-base text-dim md:text-lg"
          >
            Sites, produtos, marcas e experiências digitais — desenhados e desenvolvidos com
            tecnologia, design e IA.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            onClick={() => scrollToId('work')}
            className="flex w-fit shrink-0 items-center gap-4 font-mono text-xs uppercase tracking-[0.16em] text-dim hover:text-text"
            {...cursorHover('link')}
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-pill border border-line">
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              >
                ↓
              </motion.span>
            </span>
            Trabalhos
          </motion.button>
        </div>
      </motion.div>

      <div className="relative z-10 border-t border-line py-4">
        <Marquee durationSec={38} className="font-mono text-xs uppercase tracking-[0.16em] text-dim">
          {disciplines.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
