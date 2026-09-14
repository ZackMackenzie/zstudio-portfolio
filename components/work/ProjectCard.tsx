'use client';

import { Media } from '@/components/ui/Media';
import { formatIndex } from '@/lib/utils';
import type { ProjectStructure } from '@/content/projects';
import type { ProjectText } from '@/lib/i18n/locales/en';

/**
 * Full-width editorial spread, not a bordered card — the mockup is left
 * to breathe with no frame/background, and a huge faint index numeral sits
 * behind the copy. Alternates image/text sides per row (see SelectedWork).
 */
export function ProjectCard({
  structure,
  text,
  index,
  concept,
  reversed,
}: {
  structure: ProjectStructure;
  text: ProjectText;
  index: number;
  concept: string;
  reversed?: boolean;
}) {
  return (
    <article className="relative grid gap-10 md:grid-cols-12 md:gap-8 lg:gap-12">
      <span
        aria-hidden
        className="pointer-events-none absolute -top-6 select-none font-display text-[7rem] font-extrabold leading-none text-white/[0.03] md:-top-10 md:text-[11rem]"
        style={{ [reversed ? 'right' : 'left']: 0 } as React.CSSProperties}
      >
        {formatIndex(index)}
      </span>

      <div className={reversed ? 'md:order-2 md:col-span-7' : 'md:col-span-7'}>
        <Media
          alt={text.title}
          width={1400}
          height={933}
          mockup={structure.mockup}
          className="w-full rounded-sm"
        />
      </div>

      <div className={reversed ? 'relative md:order-1 md:col-span-5 md:self-center' : 'relative md:col-span-5 md:self-center'}>
        <div className="flex items-center gap-3">
          <span className="font-mono text-2xs uppercase tracking-[0.14em] text-accent2">{formatIndex(index)}</span>
          {structure.status === 'concept' && (
            <span className="font-mono text-2xs uppercase tracking-[0.14em] text-dim">{concept}</span>
          )}
        </div>

        <h3 className="mt-4 font-display text-4xl font-extrabold leading-[0.98] tracking-tightest md:text-5xl">
          {text.title}
        </h3>
        <p className="mt-3 font-mono text-2xs uppercase tracking-[0.12em] text-dim">{text.discipline}</p>

        <p className="mt-6 max-w-md font-serif text-lg italic leading-snug text-text/90 md:text-xl">{text.pitch}</p>

        <p className="mt-6 text-sm text-dim">{text.tags.join(' · ')}</p>
      </div>
    </article>
  );
}
