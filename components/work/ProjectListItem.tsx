'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Project } from '@/content/projects';
import { Media } from '@/components/ui/Media';
import { formatIndex } from '@/lib/utils';
import { cursorHover } from '@/components/cursor/cursor-store';

export function ProjectListItem({
  project,
  index,
  concept,
}: {
  project: Project;
  index: number;
  concept: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const mediaY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block border-t border-line py-6 md:py-10"
      onMouseEnter={() => {
        setHover(true);
        cursorHover('view', 'Ver').onMouseEnter();
      }}
      onMouseLeave={() => {
        setHover(false);
        cursorHover('view').onMouseLeave();
      }}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
    >
      <div ref={ref} className="grid items-center gap-6 md:grid-cols-[auto_1fr_auto]">
        <span className="label hidden md:block">{formatIndex(index)}</span>

        <div className="min-w-0">
          <h3 className="font-display text-2xl font-medium leading-[1.05] tracking-tighter transition-transform duration-500 ease-expo group-hover:translate-x-2 md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-3 font-mono text-2xs uppercase tracking-[0.14em] text-dim">
            {project.discipline}
          </p>
        </div>

        <div className="flex items-center gap-4">
          {project.status === 'concept' && (
            <span className="hidden rounded-pill border border-line px-3 py-1 font-mono text-2xs uppercase tracking-[0.14em] text-dim sm:inline">
              {concept}
            </span>
          )}
          <span className="font-mono text-2xs text-dim">{project.year}</span>
        </div>
      </div>

      {/* media: desktop reveals on hover; mobile always shown */}
      <div className="mt-6 overflow-hidden md:mt-0">
        {/* mobile */}
        <div className="md:hidden">
          <Media {...project.cover} className="w-full" />
        </div>
        {/* desktop reveal */}
        <motion.div
          className="hidden md:block"
          initial={false}
          animate={{ height: hover ? 'auto' : 0, opacity: hover ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="pt-8">
            <motion.div style={{ y: mediaY }} className="mx-auto max-w-4xl">
              <Media {...project.cover} className="w-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Link>
  );
}
