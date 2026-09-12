'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MotionText } from '@/components/ui/MotionText';
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
        className="shell relative z-10 flex flex-1 flex-col justify-center pb-16 pt-28"
      >
        <p className="label mb-6 flex items-center gap-3">
          <span className="inline-block h-1.5 w-1.5 rounded-pill bg-accent2" />
          {dict.hero.eyebrow}
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

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-md text-base text-dim md:text-lg"
        >
          {dict.hero.subcopy}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <StartProjectButton />
          <button
            onClick={() => scrollToId('work')}
            className="link-underline font-mono text-xs uppercase tracking-[0.16em] text-dim hover:text-text"
            {...cursorHover('link')}
          >
            {dict.hero.scrollCue}
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
