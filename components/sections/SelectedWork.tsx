'use client';

import { useMemo } from 'react';
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

      <Reveal className="mt-10 flex justify-center">
        <StartProjectButton />
      </Reveal>
    </section>
  );
}
