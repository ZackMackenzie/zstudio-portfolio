'use client';

import { motion } from 'framer-motion';
import { MotionText } from '@/components/ui/MotionText';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { useI18n } from '@/lib/i18n/LanguageProvider';
import { formatIndex } from '@/lib/utils';
import { viewport } from '@/lib/motion';

export function About() {
  const { dict } = useI18n();

  return (
    <section id="about" className="paper scroll-mt-24 py-section">
      <div className="shell">
        <Reveal>
          <span className="label">
            <span className="text-accent">{formatIndex(3)}</span>
            <span className="mx-2 opacity-40">/</span>
            {dict.about.label}
          </span>
        </Reveal>

        <div className="mt-10 max-w-4xl">
          <MotionText
            as="p"
            lines={dict.about.quoteLines}
            className="font-display text-2xl font-medium leading-[1.05] tracking-tighter md:text-3xl"
          />
          <p className="mt-8 font-serif text-xl italic text-dim md:text-2xl">{dict.about.serifLine}</p>
        </div>

        <RevealGroup className="mt-16 grid gap-x-10 gap-y-10 border-t border-line pt-10 md:grid-cols-2 lg:grid-cols-4">
          {dict.about.pillars.map((p) => (
            <RevealItem key={p.label}>
              <p className="font-mono text-xs uppercase tracking-[0.14em]">{p.label}</p>
              <p className="mt-3 text-sm text-dim">{p.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-16 grid gap-10 border-t border-line pt-10 md:grid-cols-[1fr_1fr]">
          <Reveal>
            <p className="max-w-prose text-base leading-relaxed">{dict.about.selfTaught}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="label mb-5">{dict.about.pipelineLabel}</p>
            <ol className="flex flex-col">
              {dict.about.pipeline.map((step, i) => (
                <motion.li
                  key={step}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-4 border-b border-line py-2.5"
                >
                  <span className="font-mono text-2xs text-dim">{formatIndex(i + 1)}</span>
                  <span className="font-display text-lg tracking-tight">{step}</span>
                  {i < dict.about.pipeline.length - 1 && <span className="ml-auto text-dim">→</span>}
                </motion.li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
