'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MotionText } from '@/components/ui/MotionText';
import { Marquee } from '@/components/ui/Marquee';
import { StartProjectButton } from '@/components/ui/StartProjectButton';
import { HeroField } from './HeroField';
import { useI18n } from '@/lib/i18n/LanguageProvider';
import { scrollToId } from '@/components/layout/SmoothScroll';
import { cursorHover } from '@/components/cursor/cursor-store';

export function Hero() {
  const { dict } = useI18n();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '9%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const [line1, line2, line3] = dict.hero.lines;

  return (
    <section ref={ref} id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <HeroField />

      <motion.div
        style={{ y, opacity }}
        className="shell relative z-10 flex flex-1 flex-col justify-start pb-10 pt-28 md:justify-center md:pt-24"
      >
        <p className="label mb-6 flex items-center gap-3">
          <span className="inline-block h-1.5 w-1.5 rounded-pill bg-accent2" />
          {dict.hero.eyebrow}
          <span className="ml-auto hidden text-dim/60 sm:inline">{dict.nav.portfolioBadge}</span>
        </p>

        <h1 className="font-display text-3xl font-medium leading-[0.95] tracking-tightest md:text-4xl">
          <MotionText
            as="span"
            trigger="mount"
            lineClassName="block"
            lines={[
              line1,
              line2,
              <span key="3" className="text-gradient">
                {line3}
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
            {dict.hero.subcopy}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex shrink-0 flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollToId('work')}
              className="flex w-fit items-center gap-4 font-mono text-xs uppercase tracking-[0.16em] text-dim hover:text-text"
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
              {dict.hero.scrollCue}
            </button>
            <StartProjectButton compact />
          </motion.div>
        </div>
      </motion.div>

      <div className="relative z-10 border-t border-line py-4">
        <Marquee durationSec={38} className="font-mono text-xs uppercase tracking-[0.16em] text-dim">
          {dict.hero.disciplines.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
