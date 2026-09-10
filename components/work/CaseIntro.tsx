'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Project } from '@/content/projects';
import { Media } from '@/components/ui/Media';
import { MotionText } from '@/components/ui/MotionText';
import { cursorHover } from '@/components/cursor/cursor-store';

export function CaseIntro({ project }: { project: Project }) {
  return (
    <header className="shell pt-32 md:pt-40">
      <Link
        href="/#work"
        className="link-underline font-mono text-xs uppercase tracking-[0.16em] text-dim hover:text-text"
        {...cursorHover('link')}
      >
        ← Trabalhos
      </Link>

      <div className="mt-10 flex flex-wrap items-end justify-between gap-6 border-b border-line pb-8">
        <MotionText
          as="h1"
          trigger="mount"
          lines={[project.title]}
          className="font-display text-3xl font-medium tracking-tightest md:text-4xl"
        />
        <div className="flex flex-col items-start gap-1 font-mono text-2xs uppercase tracking-[0.14em] text-dim md:items-end">
          <span>{project.discipline}</span>
          <span>{project.year}</span>
          {project.status === 'placeholder' && (
            <span className="rounded-pill border border-line px-2 py-0.5">Case em andamento</span>
          )}
        </div>
      </div>

      <motion.div
        initial={{ clipPath: 'inset(0 0 100% 0)' }}
        animate={{ clipPath: 'inset(0 0 0% 0)' }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="mt-8"
      >
        <Media {...project.cover} priority className="w-full" />
      </motion.div>

      <p className="mt-8 max-w-2xl text-lg text-dim">{project.summary}</p>
    </header>
  );
}
