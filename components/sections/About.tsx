'use client';

import { MotionText } from '@/components/ui/MotionText';
import { Reveal } from '@/components/ui/Reveal';
import { useI18n } from '@/lib/i18n/LanguageProvider';
import { formatIndex } from '@/lib/utils';

export function About() {
  const { dict } = useI18n();

  return (
    <section id="about" className="paper scroll-mt-24 py-section">
      <div className="shell">
        <Reveal>
          <span className="label">
            <span className="text-accent">{formatIndex(3)}</span>
            <span className="mx-2 opacity-40">/</span>
            {dict.about.label}
          </span>
        </Reveal>

        <div className="mt-10 max-w-3xl">
          <MotionText
            as="p"
            lines={dict.about.quoteLines}
            className="font-display text-2xl font-medium leading-[1.05] tracking-tighter md:text-3xl"
          />
          <p className="mt-6 max-w-xl text-lg font-medium text-ink/80 md:text-xl">{dict.about.serifLine}</p>
        </div>

        <Reveal className="mt-14 grid gap-8 border-t border-line pt-10 sm:grid-cols-3">
          {dict.about.pillars.map((p) => (
            <div key={p.title}>
              <h3 className="font-display text-lg font-medium tracking-tight md:text-xl">{p.title}</h3>
              <p className="mt-2 text-sm text-dim">{p.body}</p>
            </div>
          ))}
        </Reveal>

        {dict.about.timezoneNote && (
          <Reveal delay={0.05} className="mt-8">
            <p className="max-w-prose text-sm text-dim">{dict.about.timezoneNote}</p>
          </Reveal>
        )}

        <Reveal delay={0.05} className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-line pt-8">
          {dict.about.capabilities.map((c, i) => (
            <span key={c} className="flex items-center gap-3">
              {i > 0 && <span className="text-dim">/</span>}
              <span className="font-display text-lg tracking-tight md:text-xl">{c}</span>
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="mt-6">
          <p className="max-w-prose text-sm text-dim">{dict.about.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
