'use client';

import { motion } from 'framer-motion';
import type { Dictionary, Locale } from '@/lib/i18n/types';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { staggerChildren } from '@/lib/motion';

interface HeroProps {
  dict: Dictionary;
  locale: Locale;
}

const EASE = [0.16, 1, 0.3, 1] as const;

const lineVariants = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 0.9, ease: EASE } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function Hero({ dict, locale }: HeroProps) {
  return (
    <section id="top" className="relative flex min-h-[78dvh] items-center pt-32 pb-16">
      <div className="container-page w-full">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="number-label mb-6 block uppercase text-dim"
        >
          {dict.hero.kicker}
        </motion.span>

        <h1 className="font-display font-semibold tracking-tightest text-5xl">
          <span className="block overflow-hidden pb-1">
            <motion.span initial="hidden" animate="show" variants={lineVariants} className="block">
              {dict.hero.line1}
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-1 text-dim">
            <motion.span
              initial="hidden"
              animate="show"
              variants={lineVariants}
              transition={{ ...lineVariants.show.transition, delay: 0.08 }}
              className="block"
            >
              {dict.hero.line2}
            </motion.span>
          </span>
        </h1>

        <motion.div initial="hidden" animate="show" variants={staggerChildren(0.08, 0.5)} className="mt-8">
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: EASE }}
            className="max-w-xl text-lg text-dim text-balance"
          >
            {dict.hero.subhead}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: EASE }}
            className="mt-8 flex flex-wrap items-center gap-5"
          >
            <MagneticButton>
              <a
                href={`/${locale}#contact`}
                data-cursor-hover
                className="inline-flex items-center rounded-pill bg-text px-6 py-3.5 text-sm font-medium text-ink transition-colors duration-400 hover:bg-accent hover:text-white"
              >
                {dict.hero.ctaPrimary}
              </a>
            </MagneticButton>
            <a
              href={`/${locale}#work`}
              data-cursor-hover
              className="inline-flex items-center gap-2 text-sm text-dim transition-colors duration-400 hover:text-text"
            >
              {dict.hero.ctaSecondary}
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="number-label uppercase text-dim">{dict.hero.scroll}</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="h-8 w-px bg-line"
        />
      </motion.div>
    </section>
  );
}
