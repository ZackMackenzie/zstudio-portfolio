import Link from 'next/link';
import type { Project, ProjectCopy } from '@/content/projects';
import type { Dictionary, Locale } from '@/lib/i18n/types';
import { ProjectVisual } from './ProjectVisual';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  copy: ProjectCopy;
  dict: Dictionary;
  locale: Locale;
  index: number;
}

export function ProjectCard({ project, copy, dict, locale, index }: ProjectCardProps) {
  const isFeature = project.size === 'xl';

  return (
    <Reveal className={cn(isFeature ? 'md:col-span-12' : 'md:col-span-6')} delay={0.04 * (index % 3)}>
      <Link href={`/${locale}/work/${project.slug}`} data-cursor-hover className="group block">
        <div className={cn(isFeature && 'md:grid md:grid-cols-12 md:items-center md:gap-10')}>
          <ProjectVisual
            visual={project.visual}
            title={copy.title}
            className={cn(isFeature && 'md:col-span-7 md:aspect-[16/10]')}
          />

          <div className={cn('mt-5', isFeature && 'md:col-span-5 md:mt-0')}>
            <div className="flex items-center gap-3">
              <span className="number-label text-dim">{String(index + 1).padStart(2, '0')}</span>
              <span className="number-label rounded-pill border border-line px-2 py-0.5 text-dim">
                {dict.work.concept}
              </span>
            </div>
            <h3
              className={cn(
                'mt-3 font-display font-medium tracking-tighter',
                isFeature ? 'text-2xl' : 'text-xl'
              )}
            >
              {copy.title}
            </h3>
            <p className={cn('mt-3 text-dim', isFeature ? 'max-w-md text-lg' : 'text-sm')}>{copy.tagline}</p>
            <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
              {project.tech.slice(0, isFeature ? 4 : 3).map((tech) => (
                <span key={tech} className="font-mono text-2xs uppercase text-dim">
                  {tech}
                </span>
              ))}
            </div>
            <span className="number-label mt-5 inline-flex items-center gap-2 text-dim transition-colors duration-400 group-hover:text-accent-soft">
              {dict.work.viewCase}
              <span className="transition-transform duration-400 group-hover:translate-x-1">→</span>
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
