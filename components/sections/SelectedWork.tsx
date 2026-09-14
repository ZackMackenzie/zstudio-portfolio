'use client';

import { projectStructures } from '@/content/projects';
import { ProjectCard } from '@/components/work/ProjectCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import { useI18n } from '@/lib/i18n/LanguageProvider';

/**
 * Editorial spreads, not a card grid — one full-width project per row,
 * alternating image/text sides, separated by hairlines. No click-through
 * subpages: every case is fully readable right here.
 */
export function SelectedWork() {
  const { dict } = useI18n();

  return (
    <section id="work" className="shell scroll-mt-24 py-section">
      <SectionHeader index={1} label={dict.work.label} title={dict.work.title} />

      <div className="mt-16 md:mt-24">
        {projectStructures.map((structure, i) => (
          <Reveal key={structure.slug} as="div" className="border-t border-white/[0.08] py-16 first:border-t-0 first:pt-0 md:py-24">
            <ProjectCard
              structure={structure}
              text={dict.work.projects[structure.slug]}
              index={i + 1}
              concept={dict.work.concept}
              reversed={i % 2 === 1}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
