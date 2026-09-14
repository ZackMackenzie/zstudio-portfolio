import Link from 'next/link';
import type { Dictionary, Locale } from '@/lib/i18n/types';
import { services } from '@/content/services';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import { ProjectVisual } from '@/components/work/ProjectVisual';

interface ServicesProps {
  dict: Dictionary;
  locale: Locale;
}

export function Services({ dict, locale }: ServicesProps) {
  return (
    <section id="services" className="border-t border-line py-section">
      <div className="container-page">
        <SectionHeader kicker={dict.services.kicker} title={dict.services.title} />

        <div className="mt-12 border-t border-line">
          {services.map((service, index) => {
            const copy = service.copy[locale];
            return (
              <Reveal key={service.slug} delay={0.03 * index}>
                <Link
                  href={`/${locale}/work/${service.slug}`}
                  data-cursor-hover
                  className="group flex items-center gap-5 border-b border-line py-6 transition-colors duration-400 hover:bg-raised sm:gap-8 sm:py-7"
                >
                  <span className="number-label w-6 shrink-0 text-dim">{service.index}</span>

                  <div className="h-14 w-20 shrink-0 overflow-hidden rounded-sm border border-line transition-transform duration-400 group-hover:scale-105 sm:h-16 sm:w-24">
                    <ProjectVisual visual={service.visual} title={copy.serviceLabel} className="aspect-auto h-full rounded-none border-0" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-xl font-medium tracking-tighter sm:text-2xl">
                      {copy.serviceLabel}
                    </h3>
                    <p className="mt-1 truncate text-sm text-dim sm:text-base">{copy.serviceLine}</p>
                  </div>

                  <span className="number-label hidden shrink-0 items-center gap-2 text-dim transition-all duration-400 group-hover:text-accent-soft sm:flex">
                    {dict.work.viewCase}
                    <span className="transition-transform duration-400 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
