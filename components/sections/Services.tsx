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

        <div className="mt-16 border-t border-line">
          {dict.services.items.map((item, index) => (
            <Reveal key={item.index} delay={0.03 * (index % 5)}>
              <div className="group grid grid-cols-1 gap-3 border-b border-line py-7 transition-colors duration-400 md:grid-cols-12 md:items-center md:gap-6 md:py-8">
                <span className="number-label md:col-span-1">{item.index}</span>
                <h3 className="font-display text-xl font-medium tracking-tighter md:col-span-3">
                  {item.title}
                </h3>
                <p className="text-dim md:col-span-5">{item.description}</p>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-2xs uppercase text-dim md:col-span-3 md:justify-end">
                  {item.tags.map((tag) => (
                    <span key={tag} className="font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-dim">{dict.services.cta}</p>
            <MagneticButton>
              <a
                href={`/${locale}#contact`}
                data-cursor-hover
                className="inline-flex items-center rounded-pill border border-line px-5 py-2.5 text-sm transition-colors duration-400 hover:border-accent hover:text-accent"
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
