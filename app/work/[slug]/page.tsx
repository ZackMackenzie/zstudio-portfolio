import type { Metadata } from 'next';
import { projectSlugs, getProjectStructure } from '@/content/projects';
import { site } from '@/content/site';
import { en } from '@/lib/i18n/locales/en';
import { mergeProject } from '@/lib/i18n/mergeProject';
import { CaseStudyView } from '@/components/work/CaseStudyView';

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

// Metadata is baked at build time (static export) in the base locale
// (English) — see app/layout.tsx for why. The page itself re-localizes
// client-side once mounted.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const structure = getProjectStructure(slug);
  if (!structure) return {};
  const project = mergeProject(en, structure);
  const title = `${project.title} — ${project.category}`;
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
  return <CaseStudyView slug={slug} />;
}
