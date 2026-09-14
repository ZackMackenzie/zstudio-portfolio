import Link from 'next/link';
import type { Service, ServiceCopy } from '@/content/services';
import type { Dictionary, Locale } from '@/lib/i18n/types';
import { ProjectVisual } from './ProjectVisual';
import { Reveal } from '@/components/ui/Reveal';

interface ProjectCardProps {
  service: Service;
  copy: ServiceCopy;
  dict: Dictionary;
  locale: Locale;
  index: number;
}

export function ProjectCard({ service, copy, dict, locale, index }: ProjectCardProps) {
  return (
    <Reveal delay={0.05 * index}>
      <Link href={`/${locale}/work/${service.slug}`} data-cursor-hover className="group block">
        <ProjectVisual visual={service.visual} title={copy.title} />

        <div className="mt-4">
          <div className="flex items-center gap-3">
            <span className="number-label text-dim">{service.index}</span>
            <span className="number-label rounded-pill border border-line px-2 py-0.5 text-dim">
              {dict.work.concept}
            </span>
          </div>
          <h3 className="mt-3 font-display text-xl font-medium tracking-tighter">{copy.title}</h3>
          <p className="mt-2 text-sm text-dim">{copy.tagline}</p>
          <span className="number-label mt-4 inline-flex items-center gap-2 text-dim transition-colors duration-400 group-hover:text-accent-soft">
            {dict.work.viewCase}
            <span className="transition-transform duration-400 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
