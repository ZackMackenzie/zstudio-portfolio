'use client';

import { serviceIds } from '@/content/services';
import { useI18n } from '@/lib/i18n/LanguageProvider';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { formatIndex } from '@/lib/utils';

/**
 * Capabilities matrix — Sui-style bordered technical grid, no paragraph
 * fluff: index/label on the left, a comma-separated capability list on the
 * right.
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
              <div className="grid grid-cols-1 gap-x-8 gap-y-2 border-t border-white/[0.08] py-5 sm:grid-cols-[auto_1fr] sm:items-baseline">
                <span className="font-mono text-2xs uppercase tracking-[0.14em] text-accent2">
                  {formatIndex(i + 1)} / {service.title}
                </span>
                <span className="text-sm text-dim sm:text-right">{service.items.join(' · ')}</span>
              </div>
            </RevealItem>
          );
        })}
        <div className="border-t border-white/[0.08]" />
      </RevealGroup>

      <Reveal>
        <p className="mt-10 max-w-prose text-sm text-dim">{dict.cta.pricingNote}</p>
      </Reveal>
    </section>
  );
}
