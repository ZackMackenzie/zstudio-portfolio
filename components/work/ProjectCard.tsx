'use client';

import { Media } from '@/components/ui/Media';
import { formatIndex } from '@/lib/utils';
import type { ProjectStructure } from '@/content/projects';
import type { ProjectText } from '@/lib/i18n/locales/en';

export function ProjectCard({
  structure,
  text,
  index,
  concept,
}: {
  structure: ProjectStructure;
  text: ProjectText;
  index: number;
  concept: string;
}) {
  return (
    <article className="overflow-hidden rounded-md border border-white/[0.08] bg-raised backdrop-blur-sm">
      <Media alt={text.title} width={1200} height={800} mockup={structure.mockup} className="w-full" />

      <div className="flex flex-col gap-4 p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="label text-accent2">{formatIndex(index)}</span>
            <h3 className="mt-2 font-display text-xl font-medium tracking-tighter md:text-2xl">{text.title}</h3>
            <p className="mt-1 font-mono text-2xs uppercase tracking-[0.12em] text-dim">{text.discipline}</p>
          </div>
          {structure.status === 'concept' && (
            <span className="shrink-0 rounded-pill border border-white/[0.08] px-2.5 py-1 font-mono text-2xs uppercase tracking-[0.1em] text-dim">
              {concept}
            </span>
          )}
        </div>

        <p className="text-sm leading-relaxed text-dim">{text.pitch}</p>

        <div className="flex flex-wrap gap-2 border-t border-white/[0.08] pt-4">
          {text.tags.map((t) => (
            <span
              key={t}
              className="rounded-pill border border-white/[0.08] px-2.5 py-1 font-mono text-2xs uppercase tracking-[0.1em] text-accent2"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
