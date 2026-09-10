'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { experiments, type Experiment } from '@/content/experiments';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GeneratedArt } from '@/components/ui/GeneratedArt';
import { MediaPlayer } from '@/components/ui/MediaPlayer';
import { cursorHover } from '@/components/cursor/cursor-store';
import { formatIndex } from '@/lib/utils';
import { viewport } from '@/lib/motion';

export function Experiments() {
  const [open, setOpen] = useState<Experiment | null>(null);

  return (
    <section id="lab" className="shell scroll-mt-24 py-section">
      <SectionHeader
        index={5}
        label="Lab"
        title={['Experiments', '& studies']}
      />

      <p className="mt-8 max-w-prose text-sm text-dim">
        Not everything is a client project. The Lab is where motion, generative systems and
        interface ideas get tested — some feed the commercial work, some just exist.
      </p>

      <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {experiments.map((exp, i) => (
          <motion.button
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ delay: (i % 3) * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setOpen(exp)}
            className="group relative flex flex-col bg-bg p-6 text-left transition-colors duration-400 hover:bg-raised"
            {...cursorHover('view', 'Open')}
          >
            <div className="relative mb-5 aspect-[4/3] overflow-hidden">
              <GeneratedArt seed={exp.seed} accent={exp.accent} variant={(['a', 'b', 'c'] as const)[i % 3]} />
              {exp.clipId && (
                <span className="absolute bottom-2 left-2 rounded-pill bg-bg/80 px-2 py-0.5 font-mono text-2xs uppercase tracking-[0.12em] text-dim">
                  Motion
                </span>
              )}
            </div>
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-display text-lg font-medium tracking-tight">{exp.title}</h3>
              <span className="font-mono text-2xs text-dim">{formatIndex(i + 1)}</span>
            </div>
            <p className="mt-1 font-mono text-2xs uppercase tracking-[0.12em] text-dim">{exp.kind}</p>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[95] flex items-center justify-center bg-bg/90 p-4 backdrop-blur-sm md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            role="dialog"
            aria-modal="true"
            aria-label={open.title}
          >
            <motion.div
              className="w-full max-w-4xl"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="font-display text-2xl font-medium tracking-tighter">{open.title}</h3>
                  <p className="font-mono text-2xs uppercase tracking-[0.12em] text-dim">{open.kind}</p>
                </div>
                <button
                  onClick={() => setOpen(null)}
                  className="font-mono text-xs uppercase tracking-[0.16em] text-dim hover:text-text"
                  {...cursorHover('link')}
                >
                  Close ✕
                </button>
              </div>
              {open.clipId ? (
                <MediaPlayer id={open.clipId} alt={open.title} seed={open.seed} />
              ) : (
                <div className="aspect-video overflow-hidden bg-raised">
                  <GeneratedArt seed={open.seed} accent={open.accent} variant="b" />
                </div>
              )}
              <p className="mt-4 max-w-prose text-sm text-dim">{open.note}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
