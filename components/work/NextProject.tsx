'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Project } from '@/content/projects';
import { GeneratedArt } from '@/components/ui/GeneratedArt';
import { cursorHover } from '@/components/cursor/cursor-store';

export function NextProject({ project, label }: { project: Project; label: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <Link
      ref={ref}
      href={`/work/${project.slug}`}
      className="group relative block overflow-hidden border-t border-line"
      {...cursorHover('view', label)}
    >
      <motion.div style={{ scale }} className="absolute inset-0 opacity-30">
        <GeneratedArt seed={project.slug} accent />
      </motion.div>
      <div className="shell relative flex flex-col items-center py-24 text-center md:py-40">
        <span className="label">{label}</span>
        <h2 className="mt-5 font-display text-3xl font-medium tracking-tightest transition-transform duration-500 ease-expo group-hover:-translate-y-1 md:text-4xl">
          {project.title}
        </h2>
        <span className="mt-4 font-mono text-2xs uppercase tracking-[0.14em] text-dim">
          {project.category}
        </span>
      </div>
    </Link>
  );
}
