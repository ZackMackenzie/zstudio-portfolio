import type { Dictionary, Locale } from '@/lib/i18n/types';
import { services, type ServiceSlug } from '@/content/services';
import { ProjectCard } from '@/components/work/ProjectCard';
import { SectionHeader } from '@/components/ui/SectionHeader';

interface SelectedWorkProps {
  dict: Dictionary;
  locale: Locale;
}

// Three disciplines shown on the home page — deliberately not all six, so the
// page stays short. The rest live one click away via the Services list.
const FEATURED: ServiceSlug[] = ['motion', 'saas', 'brand'];

export function SelectedWork({ dict, locale }: SelectedWorkProps) {
  const featured = FEATURED.map((slug) => services.find((s) => s.slug === slug)!).filter(Boolean);

  return (
    <section id="work" className="border-t border-line py-section">
      <div className="container-page">
        <SectionHeader kicker={dict.work.kicker} title={dict.work.title} />

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3">
          {featured.map((service, index) => (
            <ProjectCard
              key={service.slug}
              service={service}
              copy={service.copy[locale]}
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
