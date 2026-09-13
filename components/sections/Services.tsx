'use client';

import { serviceIds } from '@/content/services';
import { useI18n } from '@/lib/i18n/LanguageProvider';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { formatIndex } from '@/lib/utils';

/**
 * 4 scannable capability cards — no accordion, no walls of text. Each is
 * index + title + one short line, matching the "90% visual, 10% copy" brief.
 */
export function Services() {
  const { dict } = useI18n();

  return (
    <section id="services" className="shell scroll-mt-24 py-section">
      <SectionHeader index={2} label={dict.services.label} title={dict.services.title} />

      <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 md:mt-20">
        {serviceIds.map((id, i) => {
          const service = dict.services.items[id];
          return (
            <RevealItem key={id}>
              <div className="flex h-full flex-col gap-4 bg-bg p-6 md:p-8">
                <span className="label text-accent">{formatIndex(i + 1)}</span>
                <span className="font-display text-xl font-medium tracking-tighter md:text-2xl">
                  {service.title}
                </span>
                <span className="text-sm text-dim">{service.summary}</span>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>

      <Reveal className="mt-10">
        <p className="max-w-prose text-sm text-dim">{dict.cta.pricingNote}</p>
      </Reveal>
    </section>
  );
}
