'use client';

import { useMemo } from 'react';
import { notFound } from 'next/navigation';
import { getProjectStructure, getAdjacentStructure } from '@/content/projects';
import { site } from '@/content/site';
import { useI18n } from '@/lib/i18n/LanguageProvider';
import { mergeProject } from '@/lib/i18n/mergeProject';
import { CaseIntro } from './CaseIntro';
import { CaseBlock } from './CaseBlock';
import { NextProject } from './NextProject';

export function CaseStudyView({ slug }: { slug: string }) {
  const { dict } = useI18n();

  const structure = getProjectStructure(slug);
  const nextStructure = structure ? getAdjacentStructure(slug) : undefined;

  const project = useMemo(
    () => (structure ? mergeProject(dict, structure) : null),
    [dict, structure],
  );
  const next = useMemo(
    () => (nextStructure ? mergeProject(dict, nextStructure) : null),
    [dict, nextStructure],
  );

  if (!structure || !project) {
    notFound();
    return null;
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    about: project.disciplines.join(', '),
    creator: { '@type': 'Person', name: site.name },
    dateCreated: project.year,
    description: project.summary,
    url: `${site.url}/work/${project.slug}/`,
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseIntro project={project} backLabel={dict.work.back} conceptLabel={dict.work.concept} />

      <div className="mt-14 md:mt-24">
        {project.blocks.map((block, i) => (
          <CaseBlock
            key={`${block.type}-${i}`}
            block={block}
            headings={dict.work.headings}
            motionStudyAlt={dict.work.motionStudyAlt}
          />
        ))}
      </div>

      {next && <NextProject project={next} label={dict.work.nextProject} />}
    </article>
  );
}
