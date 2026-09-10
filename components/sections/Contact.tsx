'use client';

import { useEffect, useState } from 'react';
import { MotionText } from '@/components/ui/MotionText';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/content/site';
import { formatIndex } from '@/lib/utils';
import { cursorHover } from '@/components/cursor/cursor-store';

function useLocalTime() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const update = () => {
      try {
        setTime(
          new Intl.DateTimeFormat('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: site.contact.timezone,
          }).format(new Date()),
        );
      } catch {
        setTime('');
      }
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function Contact() {
  const time = useLocalTime();

  return (
    <section id="contact" className="shell scroll-mt-24 py-section">
      <Reveal>
        <span className="label">
          <span className="text-accent">{formatIndex(6)}</span>
          <span className="mx-2 opacity-40">/</span>Contact
        </span>
      </Reveal>

      <div className="mt-10">
        <MotionText
          as="h2"
          lines={["Let’s build", 'something.']}
          className="font-display text-3xl font-medium leading-[0.95] tracking-tightest md:text-4xl"
        />
        <p className="mt-8 max-w-xl text-lg text-dim">
          Have an idea, a product, or a brand that needs to exist properly? Send the rough
          version — I’ll come back with a direction.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-4">
        <MagneticButton href={`mailto:${site.contact.email}`} cursorLabel="Email" className="text-text">
          {site.contact.email}
          <span aria-hidden>↗</span>
        </MagneticButton>
        <MagneticButton href={site.socials[0].href} cursorLabel="Chat" className="text-dim">
          WhatsApp
        </MagneticButton>
      </div>

      <div className="mt-16 grid gap-6 border-t border-line pt-8 font-mono text-2xs uppercase tracking-[0.14em] text-dim sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="text-text/60">Status</p>
          <p className="mt-1">{site.contact.availability}</p>
        </div>
        <div>
          <p className="text-text/60">Based</p>
          <p className="mt-1">{site.contact.baseLocation}</p>
        </div>
        <div>
          <p className="text-text/60">Local time</p>
          <p className="mt-1">{time || '—'}</p>
        </div>
        <div>
          <p className="text-text/60">Social</p>
          <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
            {site.socials.slice(2).map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline hover:text-text"
                {...cursorHover('link')}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
