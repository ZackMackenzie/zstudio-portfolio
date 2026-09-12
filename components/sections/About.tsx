'use client';

import { MotionText } from '@/components/ui/MotionText';
import { Marquee } from '@/components/ui/Marquee';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
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
          <p className="mt-6 font-serif text-lg italic text-dim md:text-xl">{dict.about.serifLine}</p>
        </div>
      </div>

      <div className="my-12 border-y border-line py-5">
        <Marquee durationSec={40} className="font-display text-xl font-medium tracking-tighter text-dim md:text-2xl">
          {dict.capabilities.disciplines.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </Marquee>
      </div>

      <div className="shell">
        <RevealGroup className="grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.capabilities.groups.map((group) => (
            <RevealItem key={group.label}>
              <p className="label">{group.label}</p>
              <p className="mt-2 text-sm text-dim">{group.items.join(', ')}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-8">
          <p className="max-w-prose text-sm text-dim">{dict.capabilities.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
