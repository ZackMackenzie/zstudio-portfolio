'use client';

import { SectionHeader } from '@/components/ui/SectionHeader';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { useI18n } from '@/lib/i18n/LanguageProvider';
import { formatIndex } from '@/lib/utils';

/**
 * 5-step strip — deliberately a bordered grid (not the full-width divider
 * rows Services uses) so two adjacent sections don't read as the same
 * pattern twice.
 */
export function Process() {
  const { dict } = useI18n();

  return (
    <section id="process" className="shell scroll-mt-24 py-section">
      <SectionHeader index={4} label={dict.process.label} title={dict.process.title} />

      <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-md border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 md:mt-20 lg:grid-cols-5">
        {dict.process.steps.map((step, i) => (
          <RevealItem key={step.title} className="flex flex-col gap-4 bg-bg p-6 md:p-7">
            <span className="font-mono text-2xs uppercase tracking-[0.14em] text-accent2">{formatIndex(i + 1)}</span>
            <h3 className="font-display text-lg font-medium tracking-tight md:text-xl">{step.title}</h3>
            <p className="text-sm leading-relaxed text-dim">{step.body}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
