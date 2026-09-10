'use client';

import { motion } from 'framer-motion';
import { MotionText } from '@/components/ui/MotionText';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { formatIndex } from '@/lib/utils';
import { viewport } from '@/lib/motion';

const pillars = [
  { label: 'Design', body: 'Composition, type and art direction — the part people feel before they can name it.' },
  { label: 'Technology', body: 'Production React and TypeScript. I ship the thing, not a handoff.' },
  { label: 'AI', body: 'Modern AI workflows to move faster through research, exploration and production.' },
  { label: 'Direction', body: 'One point of view holding strategy, interface, motion and launch together.' },
];

const pipeline = ['Idea', 'Strategy', 'Design', 'Interface', 'Build', 'Motion', 'Launch'];

export function About() {
  return (
    <section id="about" className="paper scroll-mt-24 py-section">
      <div className="shell">
        <Reveal>
          <span className="label">
            <span className="text-accent">{formatIndex(3)}</span>
            <span className="mx-2 opacity-40">/</span>About
          </span>
        </Reveal>

        <div className="mt-10 max-w-4xl">
          <MotionText
            as="p"
            lines={['I don’t just design', 'interfaces. I build', 'the thing.']}
            className="font-display text-2xl font-medium leading-[1.05] tracking-tighter md:text-3xl"
          />
          <p className="mt-8 font-serif text-xl italic text-dim md:text-2xl">
            Strategy, design, interface, development and motion — held by one point of view.
          </p>
        </div>

        <RevealGroup className="mt-16 grid gap-x-10 gap-y-10 border-t border-line pt-10 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <RevealItem key={p.label}>
              <p className="font-mono text-xs uppercase tracking-[0.14em]">{p.label}</p>
              <p className="mt-3 text-sm text-dim">{p.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-16 grid gap-10 border-t border-line pt-10 md:grid-cols-[1fr_1fr]">
          <Reveal>
            <p className="max-w-prose text-base leading-relaxed">
              Self-taught, and relentless about it. I learn by building — taking a project end to
              end until it works, then doing it again with a higher bar. The result is autonomy:
              hand me an idea and I can carry it from a sentence to a shipped experience.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="label mb-5">How the work moves</p>
            <ol className="flex flex-col">
              {pipeline.map((step, i) => (
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
                  {i < pipeline.length - 1 && <span className="ml-auto text-dim">→</span>}
                </motion.li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
