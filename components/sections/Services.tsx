'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { serviceIds } from '@/content/services';
import { applicationIds } from '@/content/applications';
import { useI18n } from '@/lib/i18n/LanguageProvider';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
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
                className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-6 text-left md:py-7"
                aria-expanded={open}
                onClick={() => setActive(open ? null : id)}
                {...cursorHover('link')}
              >
                <span className="label">{formatIndex(i + 1)}</span>
                <span>
                  <span className="block font-display text-xl font-medium tracking-tighter transition-transform duration-400 ease-expo group-hover:translate-x-2 md:text-2xl">
                    {service.title}
                  </span>
                  <span className="mt-1 block max-w-lg text-sm text-dim">{service.summary}</span>
                </span>
                <motion.span animate={{ rotate: open ? 45 : 0 }} className="font-mono text-lg text-dim">
                  +
                </motion.span>
              </button>

              <motion.div
                initial={false}
                animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap gap-2 pb-6 md:pl-16">
                  {service.capabilities.map((d) => (
                    <span
                      key={d}
                      className="rounded-pill border border-line px-3 py-1 font-mono text-2xs uppercase tracking-[0.12em] text-dim"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          );
        })}
        <div className="border-t border-line" />
      </div>

      {/* Applications — the same services, adapted to a few kinds of business.
          Compact by design: a title + one line each, never a real client. */}
      <Reveal className="mt-14 border-t border-line pt-8 md:mt-20">
        <p className="label">{dict.services.applicationsLabel}</p>
        <p className="mt-3 max-w-prose text-sm text-dim">{dict.services.applicationsIntro}</p>
        <div className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {applicationIds.map((id) => {
            const app = dict.services.applications[id];
            return (
              <p key={id} className="text-sm">
                <span className="text-text">{app.title}</span>
                <span className="text-dim"> — {app.description}</span>
              </p>
            );
          })}
        </div>
      </Reveal>

      <Reveal className="mt-10 border-t border-line pt-8">
        <p className="max-w-prose text-sm text-dim">{dict.cta.pricingNote}</p>
      </Reveal>
    </section>
  );
}
