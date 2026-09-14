'use client';

import { useState } from 'react';
import { site, whatsappHref } from '@/content/site';
import { useI18n } from '@/lib/i18n/LanguageProvider';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';
import { MagneticButton } from '@/components/ui/MagneticButton';

/**
 * The dedicated contact hub — promoted out of the footer so it reads as a
 * full section (not a closing afterthought). Footer keeps the ambient
 * status/clock strip and copyright line only.
 */
export function Contact() {
  const { dict } = useI18n();
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — the email stays visible/selectable text
    }
  }

  return (
    <section id="contact" className="shell scroll-mt-24 py-section">
      <SectionHeader index={5} label={dict.contact.label} title={dict.contact.title} />

      <Reveal className="mt-14 md:mt-20">
        <p className="max-w-lg text-base text-dim md:text-lg">{dict.contact.subcopy}</p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <MagneticButton href={whatsappHref(dict.whatsappMessage)} cursorLabel="WhatsApp" className="text-text">
            {dict.contact.whatsapp}
            <span aria-hidden>↗</span>
          </MagneticButton>

          <div className="relative">
            <MagneticButton onClick={copyEmail} cursorLabel={dict.contact.copyEmail} className="text-dim">
              {site.contact.email}
            </MagneticButton>
            <span
              className={`pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-pill bg-accent2 px-3 py-1 font-mono text-2xs text-black transition-opacity duration-300 ${
                copied ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {dict.contact.copied}
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
