'use client';

import { serviceIds } from '@/content/services';
import { useI18n } from '@/lib/i18n/LanguageProvider';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { formatIndex } from '@/lib/utils';

/**
 * Deliberately flat — no accordion, no capability-chip walls. Zstudio isn't a
 * fixed catalog; these are the tools, and `combineNote` says so once. Each
 * row is index + name + one line, nothing hidden behind an interaction.
 */
export function Services() {
  const { dict } = useI18n();

  return (
    <section id="services" className="shell scroll-mt-24 py-section">
      <SectionHeader index={2} label={dict.services.label} title={dict.services.title} />

      <RevealGroup className="mt-14 md:mt-20">
        {serviceIds.map((id, i) => {
          const service = dict.services.items[id];
          return (
            <RevealItem key={id}>
              <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-1 border-t border-line py-5 sm:grid-cols-[auto_auto_1fr] sm:gap-x-8">
                <span className="label">{formatIndex(i + 1)}</span>
                <span className="font-display text-xl font-medium tracking-tighter md:text-2xl">
                  {service.title}
                </span>
                <span className="col-span-2 text-sm text-dim sm:col-span-1 sm:text-right">
                  {service.summary}
                </span>
              </div>
            </RevealItem>
          );
        })}
        <div className="border-t border-line" />
      </RevealGroup>

      <Reveal className="mt-10">
        <p className="max-w-prose text-sm text-dim">{dict.services.combineNote}</p>
      </Reveal>

      <Reveal className="mt-10 border-t border-line pt-8">
        <p className="max-w-prose text-sm text-dim">{dict.cta.pricingNote}</p>
      </Reveal>
    </section>
  );
}
