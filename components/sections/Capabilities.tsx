'use client';

import { useI18n } from '@/lib/i18n/LanguageProvider';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Marquee } from '@/components/ui/Marquee';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';

export function Capabilities() {
  const { dict } = useI18n();

  return (
    <section id="capabilities" className="scroll-mt-24 py-section">
      <div className="shell">
        <SectionHeader index={4} label={dict.capabilities.label} title={dict.capabilities.title} />
      </div>

      <div className="my-14 border-y border-line py-6 md:my-20">
        <Marquee
          durationSec={44}
          reverse
          className="font-display text-2xl font-medium tracking-tighter text-dim md:text-3xl"
        >
          {dict.hero.disciplines.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </Marquee>
      </div>

      <div className="shell">
        <RevealGroup className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {dict.capabilities.groups.map((group) => (
            <RevealItem key={group.label}>
              <p className="label border-t border-line pt-4">{group.label}</p>
              <ul className="mt-4 flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item} className="text-lg tracking-tight text-text">
                    {item}
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-14">
          <p className="max-w-prose text-sm text-dim">{dict.capabilities.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
