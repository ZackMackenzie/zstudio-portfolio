import type { Dictionary, Locale } from '@/lib/i18n/types';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import { MagneticButton } from '@/components/ui/MagneticButton';

interface ServicesProps {
  dict: Dictionary;
  locale: Locale;
}

export function Services({ dict, locale }: ServicesProps) {
  return (
    <section id="services" className="border-t border-line py-section">
      <div className="container-page">
        <SectionHeader kicker={dict.services.kicker} title={dict.services.title} intro={dict.services.intro} />

        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-12 border-t border-line pt-12 md:grid-cols-2 md:gap-y-16">
          {dict.services.categories.map((category, index) => (
            <Reveal key={category.index} delay={0.05 * index}>
              <div className="flex items-baseline gap-4">
                <span className="number-label shrink-0 text-dim">{category.index}</span>
                <h3 className="font-display text-2xl font-medium tracking-tighter sm:text-3xl">
                  {category.label}
                </h3>
              </div>
              <p className="mt-4 max-w-md text-lg text-dim">{category.description}</p>
              <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-pill border border-line px-3.5 py-1.5 text-sm text-dim"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col items-start gap-5 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-dim">{dict.services.cta}</p>
            <MagneticButton>
              <a
                href={`/${locale}#contact`}
                data-cursor-hover
                className="inline-flex items-center rounded-pill border border-line px-5 py-2.5 text-sm transition-colors duration-400 hover:border-accent hover:text-accent-soft"
              >
                {dict.nav.cta}
              </a>
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
