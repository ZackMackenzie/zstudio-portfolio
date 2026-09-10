'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { services } from '@/content/services';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { formatIndex } from '@/lib/utils';
import { cursorHover } from '@/components/cursor/cursor-store';

export function Services() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="services" className="shell scroll-mt-24 py-section">
      <SectionHeader index={2} label="Serviços" title={['O que', 'eu faço']} />

      <div className="mt-14 md:mt-20">
        {services.map((service, i) => {
          const open = active === service.id;
          return (
            <div
              key={service.id}
              className="border-t border-line"
              onMouseEnter={() => setActive(service.id)}
              onMouseLeave={() => setActive(null)}
            >
              <button
                className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-6 text-left md:py-8"
                aria-expanded={open}
                onClick={() => setActive(open ? null : service.id)}
                {...cursorHover('link')}
              >
                <span className="label">{formatIndex(i + 1)}</span>
                <span className="font-display text-2xl font-medium tracking-tighter transition-transform duration-400 ease-expo group-hover:translate-x-2 md:text-3xl">
                  {service.title}
                </span>
                <motion.span
                  animate={{ rotate: open ? 45 : 0 }}
                  className="font-mono text-lg text-dim"
                >
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
                    {service.deliverables.map((d) => (
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
    </section>
  );
}
