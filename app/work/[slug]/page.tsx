import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects, getProject, getAdjacent } from '@/content/projects';
import { site } from '@/content/site';
import { CaseIntro } from '@/components/work/CaseIntro';
import { CaseBlock } from '@/components/work/CaseBlock';
import { NextProject } from '@/components/work/NextProject';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = `${project.title} — ${project.discipline}`;
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}/` },
    openGraph: {
      title,
      description: project.summary,
      url: `${site.url}/work/${project.slug}/`,
      type: 'article',
    },
    twitter: { card: 'summary_large_image', title, description: project.summary },
  };
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { next } = getAdjacent(slug);

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
    <article className="pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseIntro project={project} />

      <div className="mt-14 md:mt-24">
        {project.blocks.map((block, i) => (
          <CaseBlock key={`${block.type}-${i}`} block={block} />
        ))}
      </div>

      <NextProject project={next} />
    </article>
  );
}
