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
  const categoryNames = project.categoryIndices
    .map((i) => dict.services.categories[i]?.label)
    .filter(Boolean);

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const nextCopy = nextProject.copy[locale];

  const stages: { label: string; body: string }[] = [
    { label: dict.caseStudy.concept, body: copy.concept },
    { label: dict.caseStudy.direction, body: copy.direction },
    ...(copy.interfaceNote ? [{ label: dict.caseStudy.interface, body: copy.interfaceNote }] : []),
    ...(copy.motionNote ? [{ label: dict.caseStudy.motion, body: copy.motionNote }] : []),
    { label: dict.caseStudy.development, body: copy.development },
  ];

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

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-pill border border-[#3a5bff66] px-3 py-1 font-mono text-xs tracking-wide text-accent">
              {dict.work.concept}
            </span>
          </div>

          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold tracking-tightest text-balance">
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
              <dd className="mt-2 text-sm">{categoryNames[0]}</dd>
            </div>
            <div>
              <dt className="number-label text-dim">{dict.caseStudy.servicesLabel}</dt>
              <dd className="mt-2 text-sm">{categoryNames.join(', ')}</dd>
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
        <div className="container-page space-y-14">
          {stages.map((stage, index) => (
            <Reveal key={stage.label} delay={0.04 * (index % 4)}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-10">
                <span className="number-label uppercase text-dim md:col-span-3">{stage.label}</span>
                <p className="text-lg text-balance md:col-span-7">{stage.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line py-section">
        <div className="container-page">
          <Reveal>
            <div className="rounded-md border border-line bg-raised p-8 sm:p-10">
              <span className="number-label uppercase text-dim">{dict.caseStudy.result}</span>
              <p className="mt-4 max-w-2xl text-lg text-balance">
                {copy.result ?? dict.caseStudy.noResult}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-section">
        <div className="container-page grid grid-cols-1 gap-10 md:grid-cols-2">
          <ProjectVisual visual={project.visual} title={copy.title} variant="detail" />
          <ProjectVisual visual={project.visual} title={copy.title} variant="mobile" />
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
