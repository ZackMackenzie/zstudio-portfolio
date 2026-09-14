import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LOCALES, isLocale, type Locale } from '@/lib/i18n/types';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { projects, getProject } from '@/content/projects';
import { ProjectVisual } from '@/components/work/ProjectVisual';
import { MediaPlayer } from '@/components/ui/MediaPlayer';
import { Reveal } from '@/components/ui/Reveal';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { site } from '@/content/site';

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => projects.map((project) => ({ locale, slug: project.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : 'en';
  const project = getProject(slug);
  if (!project) return {};
  const copy = project.copy[locale];

  return {
    title: copy.title,
    description: copy.tagline,
    alternates: { canonical: `${site.url}/${locale}/work/${slug}` },
    openGraph: {
      title: `${copy.title} — ${site.name}`,
      description: copy.tagline,
      url: `${site.url}/${locale}/work/${slug}`,
      type: 'article',
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const dict = getDictionary(locale);
  const project = getProject(slug);
  if (!project) notFound();

  const copy = project.copy[locale];
  const serviceNames = project.serviceIndices.map((i) => dict.services.items[i]?.title).filter(Boolean);

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const nextCopy = nextProject.copy[locale];

  return (
    <article>
      <header className="pb-section pt-36">
        <div className="container-page">
          <Link
            href={`/${locale}#work`}
            data-cursor-hover
            className="number-label inline-flex items-center gap-2 text-dim hover:text-text"
          >
            ← {dict.caseStudy.back}
          </Link>

          <h1 className="mt-8 max-w-4xl font-display text-4xl font-semibold tracking-tightest text-balance">
            {copy.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-dim text-balance">{copy.tagline}</p>
        </div>
      </header>

      <div className="container-page">
        {project.audiovisual ? (
          <MediaPlayer
            src="/media/apex-reel.mp4"
            webmSrc="/media/apex-reel.webm"
            poster="/media/apex-reel-poster.jpg"
            label={copy.title}
          />
        ) : (
          <ProjectVisual visual={project.visual} title={copy.title} className="aspect-video" />
        )}
      </div>

      <section className="border-t border-line py-section">
        <div className="container-page grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <span className="number-label uppercase text-dim">{dict.caseStudy.overview}</span>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-9 md:grid-cols-4">
            <div>
              <dt className="number-label text-dim">{dict.caseStudy.category}</dt>
              <dd className="mt-2 text-sm">{serviceNames[0]}</dd>
            </div>
            <div>
              <dt className="number-label text-dim">{dict.caseStudy.servicesLabel}</dt>
              <dd className="mt-2 text-sm">{serviceNames.join(', ')}</dd>
            </div>
            <div>
              <dt className="number-label text-dim">{dict.caseStudy.year}</dt>
              <dd className="mt-2 text-sm">{project.year}</dd>
            </div>
            <div>
              <dt className="number-label text-dim">{dict.work.role}</dt>
              <dd className="mt-2 text-sm">{copy.role}</dd>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-section">
        <div className="container-page grid grid-cols-1 gap-16 md:grid-cols-2">
          <Reveal>
            <span className="number-label uppercase text-dim">{dict.caseStudy.challenge}</span>
            <p className="mt-4 text-lg text-balance">{copy.challenge}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <span className="number-label uppercase text-dim">{dict.caseStudy.solution}</span>
            <p className="mt-4 text-lg text-balance">{copy.solution}</p>
          </Reveal>
        </div>
      </section>

      {copy.process ? (
        <section className="border-t border-line py-section">
          <div className="container-page max-w-2xl">
            <Reveal>
              <span className="number-label uppercase text-dim">{dict.caseStudy.process}</span>
              <p className="mt-4 text-lg text-balance">{copy.process}</p>
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="border-t border-line py-section">
        <div className="container-page max-w-2xl">
          <Reveal>
            <span className="number-label uppercase text-dim">{dict.caseStudy.result}</span>
            <p className="mt-4 text-lg text-dim text-balance">
              {copy.result ?? dict.caseStudy.noResult}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-section">
        <div className="container-page grid grid-cols-1 gap-10 md:grid-cols-2">
          {[1, 2].map((seed) => (
            <ProjectVisual key={seed} visual={((project.visual + seed) % 6) + 1} title={copy.title} />
          ))}
        </div>
      </section>

      <section className="border-t border-line py-16">
        <div className="container-page flex items-center justify-between">
          <span className="number-label uppercase text-dim">{dict.caseStudy.next}</span>
          <MagneticButton>
            <Link
              href={`/${locale}/work/${nextProject.slug}`}
              data-cursor-hover
              className="font-display text-2xl font-medium tracking-tighter hover:text-accent"
            >
              {nextCopy.title} →
            </Link>
          </MagneticButton>
        </div>
      </section>
    </article>
  );
}
