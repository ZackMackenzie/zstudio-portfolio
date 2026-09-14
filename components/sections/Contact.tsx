'use client';

import { useState, type FormEvent } from 'react';
import type { Dictionary } from '@/lib/i18n/types';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/content/site';
import { cn } from '@/lib/utils';

interface ContactProps {
  dict: Dictionary;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function Contact({ dict }: ContactProps) {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Request failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  const inputClass =
    'w-full border-b border-line bg-transparent py-3 text-base placeholder:text-dim/70 focus:border-accent focus:outline-none transition-colors duration-400';

  return (
    <section id="contact" className="border-t border-line py-section">
      <div className="container-page grid grid-cols-1 gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <SectionHeader kicker={dict.contact.kicker} title={dict.contact.title} intro={dict.contact.intro} />
          <Reveal delay={0.15}>
            <p className="mt-10 text-sm text-dim">
              {dict.contact.directLabel}{' '}
              <a href={`mailto:${site.email}`} data-cursor-hover className="text-text underline decoration-line underline-offset-4 hover:text-accent-soft">
                {site.email}
              </a>
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <Reveal>
            <form onSubmit={handleSubmit} className="space-y-8" aria-live="polite">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="number-label mb-2 block text-dim">
                    {dict.contact.formName}
                  </label>
                  <input id="name" name="name" type="text" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className="number-label mb-2 block text-dim">
                    {dict.contact.formEmail}
                  </label>
                  <input id="email" name="email" type="email" required className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <label htmlFor="company" className="number-label mb-2 block text-dim">
                    {dict.contact.formCompany} <span className="normal-case">{dict.contact.formCompanyOptional}</span>
                  </label>
                  <input id="company" name="company" type="text" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="type" className="number-label mb-2 block text-dim">
                    {dict.contact.formType}
                  </label>
                  <select id="type" name="type" required className={cn(inputClass, 'appearance-none')}>
                    {dict.contact.formTypeOptions.map((option) => (
                      <option key={option} value={option} className="bg-bg text-text">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="number-label mb-2 block text-dim">
                  {dict.contact.formMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder={dict.contact.formMessagePlaceholder}
                  className={cn(inputClass, 'resize-none')}
                />
              </div>

              <div className="flex items-center gap-5 pt-2">
                <MagneticButton>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    data-cursor-hover
                    className="inline-flex items-center rounded-pill bg-text px-6 py-3.5 text-sm font-medium text-ink transition-colors duration-400 hover:bg-accent hover:text-white disabled:opacity-60"
                  >
                    {status === 'submitting' ? dict.contact.formSubmitting : dict.contact.formSubmit}
                  </button>
                </MagneticButton>

                {status === 'success' ? (
                  <span className="text-sm text-accent-soft">{dict.contact.formSuccess}</span>
                ) : null}
                {status === 'error' ? (
                  <span className="text-sm text-dim">{dict.contact.formError}</span>
                ) : null}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
