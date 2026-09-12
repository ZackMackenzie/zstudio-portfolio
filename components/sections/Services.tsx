'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { serviceIds } from '@/content/services';
import { applicationIds } from '@/content/applications';
import { useI18n } from '@/lib/i18n/LanguageProvider';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StartProjectButton } from '@/components/ui/StartProjectButton';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { formatIndex } from '@/lib/utils';
import { cursorHover } from '@/components/cursor/cursor-store';

export function Services() {
  const { dict } = useI18n();
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="services" className="shell scroll-mt-24 py-section">
      <SectionHeader index={2} label={dict.services.label} title={dict.services.title} />

      <div className="mt-14 md:mt-20">
        {serviceIds.map((id, i) => {
          const service = dict.services.items[id];
          const open = active === id;
          return (
            <div
              key={id}
              className="border-t border-line"
              onMouseEnter={() => setActive(id)}
              onMouseLeave={() => setActive(null)}
            >
              <button
                className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-6 text-left md:py-8"
                aria-expanded={open}
                onClick={() => setActive(open ? null : id)}
                {...cursorHover('link')}
              >
                <span className="label">{formatIndex(i + 1)}</span>
                <span>
                  <span className="block font-display text-2xl font-medium tracking-tighter transition-transform duration-400 ease-expo group-hover:translate-x-2 md:text-3xl">
                    {service.title}
                  </span>
                  <span className="mt-1 block text-sm text-dim">{service.summary}</span>
                </span>
                <motion.span animate={{ rotate: open ? 45 : 0 }} className="font-mono text-lg text-dim">
                  +
                </motion.span>
              </button>

              <motion.div
                initial={false}
                animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="grid gap-6 pb-8 md:grid-cols-[1fr_1fr] md:pl-16">
                  <p className="max-w-prose text-sm text-dim md:text-base">{service.detail}</p>
                  <ul className="flex flex-wrap content-start gap-2">
                    {service.capabilities.map((d) => (
                      <li
                        key={d}
                        className="rounded-pill border border-line px-3 py-1 font-mono text-2xs uppercase tracking-[0.12em] text-dim"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          );
        })}
        <div className="border-t border-line" />
      </div>

      {/* Applications — segments the same services get adapted to. Never a
          real client claim; language stays "For…" / "Ideal for…". */}
      <div className="mt-20 md:mt-28">
        <Reveal>
          <span className="label">{dict.services.applicationsLabel}</span>
          <h3 className="mt-4 font-display text-xl font-medium tracking-tighter md:text-2xl">
            {dict.services.applicationsTitle.join(' ')}
          </h3>
          <p className="mt-4 max-w-prose text-sm text-dim">{dict.services.applicationsIntro}</p>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-x-10 gap-y-10 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-3">
          {applicationIds.map((id) => {
            const app = dict.services.applications[id];
            return (
              <RevealItem key={id}>
                <p className="font-display text-lg tracking-tight">{app.title}</p>
                <p className="mt-2 text-sm text-dim">{app.description}</p>
                {app.highlights && (
                  <ul className="mt-3 flex flex-col gap-1">
                    {app.highlights.map((h) => (
                      <li key={h} className="text-2xs text-dim before:mr-2 before:content-['—']">
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>

      <Reveal className="mt-16 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-prose text-sm text-dim">{dict.cta.pricingNote}</p>
        <StartProjectButton className="w-fit shrink-0" />
      </Reveal>
    </section>
  );
}
