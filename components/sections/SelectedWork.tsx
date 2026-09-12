'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { projectStructures } from '@/content/projects';
import { ProjectListItem } from '@/components/work/ProjectListItem';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StartProjectButton } from '@/components/ui/StartProjectButton';
import { Reveal } from '@/components/ui/Reveal';
import { useI18n } from '@/lib/i18n/LanguageProvider';
import { mergeProject } from '@/lib/i18n/mergeProject';

export function SelectedWork() {
  const { dict } = useI18n();
  const projects = useMemo(
    () => projectStructures.map((s) => mergeProject(dict, s)),
    [dict],
  );

  return (
    <section id="work" className="shell scroll-mt-24 py-section">
      <SectionHeader index={1} label={dict.work.label} title={dict.work.title} />

      <div className="mt-14 md:mt-20">
        {projects.map((project, i) => (
          <ProjectListItem key={project.slug} project={project} index={i + 1} concept={dict.work.concept} />
        ))}
        <div className="border-t border-line" />
      </div>

      <Reveal className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="max-w-prose text-sm text-dim">{dict.work.intro}</p>
          <Link
            href={`/work/${projects[0]?.slug}`}
            className="link-underline mt-4 inline-block font-mono text-xs uppercase tracking-[0.16em]"
          >
            {dict.work.openCase}
          </Link>
        </div>
        <StartProjectButton className="w-fit shrink-0" />
      </Reveal>
    </section>
  );
}
