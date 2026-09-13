'use client';

import { projectStructures } from '@/content/projects';
import { ProjectCard } from '@/components/work/ProjectCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { useI18n } from '@/lib/i18n/LanguageProvider';

/**
 * Every case is a complete, self-contained card right here — no click-through
 * subpages. Each card renders its own mockup, pitch and tags in full.
 */
export function SelectedWork() {
  const { dict } = useI18n();

  return (
    <section id="work" className="shell scroll-mt-24 py-section">
      <SectionHeader index={1} label={dict.work.label} title={dict.work.title} />

      <RevealGroup className="mt-14 grid gap-6 md:mt-20 md:grid-cols-2">
        {projectStructures.map((structure, i) => (
          <RevealItem key={structure.slug}>
            <ProjectCard
              structure={structure}
              text={dict.work.projects[structure.slug]}
              index={i + 1}
              concept={dict.work.concept}
            />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
