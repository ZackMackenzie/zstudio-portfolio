import type { Dictionary } from '@/lib/i18n/types';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';

interface AboutProps {
  dict: Dictionary;
}

export function About({ dict }: AboutProps) {
  return (
    <section id="about" className="border-t border-line py-section">
      <div className="container-page grid grid-cols-1 gap-16 md:grid-cols-12">
        <div className="md:col-span-6">
          <SectionHeader kicker={dict.about.kicker} title={dict.about.title} />
          <div className="mt-8 space-y-5">
            {dict.about.paragraphs.map((paragraph, index) => (
              <Reveal key={index} delay={0.08 * index}>
                <p className="max-w-xl text-lg text-dim text-balance">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="md:col-span-5 md:col-start-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
            {dict.about.stack.map((group, index) => (
              <Reveal key={group.label} delay={0.06 * index}>
                <div className="border-t border-line pt-4">
                  <dt className="number-label uppercase text-dim">{group.label}</dt>
                  <dd className="mt-3 space-y-1.5">
                    {group.items.map((item) => (
                      <div key={item} className="text-sm">
                        {item}
                      </div>
                    ))}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
