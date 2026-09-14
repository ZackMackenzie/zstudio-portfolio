'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MotionText } from '@/components/ui/MotionText';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { HeroField } from './HeroField';
import { useI18n } from '@/lib/i18n/LanguageProvider';
import { whatsappHref } from '@/content/site';
import { scrollToId } from '@/components/layout/SmoothScroll';

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
        className="shell relative z-10 flex flex-1 flex-col justify-center pb-24 pt-28"
      >
        <p className="label mb-6 flex items-center gap-3">
          <span className="inline-block h-1.5 w-1.5 rounded-pill bg-accent2" />
          {dict.hero.eyebrow}
        </p>

        <h1 className="font-display text-4xl font-extrabold leading-[0.92] tracking-tightest md:text-5xl">
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
          className="mt-8 max-w-lg text-base text-dim md:text-lg"
        >
          {dict.hero.subcopy}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton onClick={() => scrollToId('work')} cursorLabel={dict.hero.ctaPrimary} className="text-text">
            {dict.hero.ctaPrimary}
            <span aria-hidden>↓</span>
          </MagneticButton>
          <MagneticButton href={whatsappHref(dict.whatsappMessage)} cursorLabel={dict.hero.ctaSecondary} className="text-dim">
            {dict.hero.ctaSecondary}
            <span aria-hidden>↗</span>
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/[0.08] pt-6"
        >
          {dict.hero.metrics.map((m, i) => (
            <span key={m} className="font-mono text-2xs uppercase tracking-[0.14em] text-dim">
              <span className="text-accent2">{String(i + 1).padStart(2, '0')}.</span> {m}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
