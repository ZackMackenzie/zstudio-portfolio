import type { Dictionary, Locale } from '@/lib/i18n/types';
import { projects } from '@/content/projects';
import { ProjectCard } from '@/components/work/ProjectCard';
import { SectionHeader } from '@/components/ui/SectionHeader';

interface SelectedWorkProps {
  dict: Dictionary;
  locale: Locale;
}

export function SelectedWork({ dict, locale }: SelectedWorkProps) {
  return (
    <section id="work" className="py-section">
      <div className="container-page">
        <SectionHeader kicker={dict.work.kicker} title={dict.work.title} intro={dict.work.intro} />

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              copy={project.copy[locale]}
              dict={dict}
              locale={locale}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
