'use client';

import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import { Marquee } from '@/components/ui/Marquee';
import { useI18n } from '@/lib/i18n/LanguageProvider';

/**
 * The site's one editorial "breather" — inverts to the light `.paper` token
 * scope (see app/globals.css) so the dark, technical rhythm of the rest of
 * the page has a single confident pause instead of running together.
 */
export function About() {
  const { dict } = useI18n();

  return (
    <section id="about" className="paper scroll-mt-24 py-section">
      <div className="shell">
        <SectionHeader index={3} label={dict.about.label} title={dict.about.title} />

        <Reveal className="mt-14 md:mt-20">
          <p className="max-w-3xl font-serif text-xl italic leading-snug tracking-tight text-ink md:text-3xl">
            {dict.about.body}
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-16 border-y border-line px-gutter py-5 md:mt-20">
        <Marquee durationSec={32}>
          {dict.about.disciplines.map((d) => (
            <span key={d} className="font-mono text-2xs uppercase tracking-[0.14em] text-dim">
              {d}
            </span>
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}
