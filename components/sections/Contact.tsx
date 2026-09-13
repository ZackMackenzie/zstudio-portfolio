'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { MotionText } from '@/components/ui/MotionText';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/content/site';
import { serviceIds } from '@/content/services';
import { useI18n } from '@/lib/i18n/LanguageProvider';
import { formatIndex } from '@/lib/utils';
import { cursorHover } from '@/components/cursor/cursor-store';

function useLocalTime(timeZone: string, locale: string) {
  const [time, setTime] = useState('');
  useEffect(() => {
    const update = () => {
      try {
        setTime(new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit', timeZone }).format(new Date()));
      } catch {
        setTime('');
      }
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, [timeZone, locale]);
  return time;
}

const inputCls =
  'w-full border-b border-line bg-transparent py-3 text-sm text-text placeholder:text-dim/80 transition-colors duration-300 focus:border-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2';

export function Contact() {
  const { locale, dict } = useI18n();
  const time = useLocalTime(site.contact.timezone, locale);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error' | 'success'>('idle');
  const f = dict.contact.form;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    // honeypot — invisible to real visitors; bots that fill it get silently dropped
    if (String(data.get('website') ?? '').trim()) return;

    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const description = String(data.get('description') ?? '').trim();

    if (!name || !email || !description) {
      setStatus('error');
      return;
    }

    const company = String(data.get('company') ?? '').trim();
    const service = String(data.get('service') ?? '').trim();
    const budget = String(data.get('budget') ?? '').trim();

    const subject = `${dict.cta.startProject} — ${name}`;
    const body = [
      `${f.name}: ${name}`,
      `${f.email}: ${email}`,
      company && `${f.company}: ${company}`,
      service && `${f.service}: ${service}`,
      budget && `${f.budget}: ${budget}`,
      '',
      description,
    ]
      .filter(Boolean)
      .join('\n');

    setStatus('submitting');
    window.setTimeout(() => {
      window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus('success');
    }, 550);
  }

  return (
    <section id="contact" className="shell scroll-mt-24 py-section">
      <Reveal>
        <span className="label">
          <span className="text-accent">{formatIndex(4)}</span>
          <span className="mx-2 opacity-40">/</span>
          {dict.contact.label}
        </span>
      </Reveal>

      <div className="mt-10">
        <p className="font-serif text-xl italic text-dim md:text-2xl">{dict.contact.kicker}</p>
        <MotionText
          as="h2"
          lines={dict.contact.titleLines}
          className="mt-3 font-display text-3xl font-medium leading-[0.95] tracking-tightest md:text-4xl"
        />
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-4">
        <MagneticButton href={`mailto:${site.contact.email}`} cursorLabel={f.email} className="text-text">
          {site.contact.email}
          <span aria-hidden>↗</span>
        </MagneticButton>
        <MagneticButton href={site.socials[0].href} cursorLabel={dict.contact.chatCursor} className="text-dim">
          {dict.contact.whatsapp}
        </MagneticButton>
      </div>

      <Reveal className="mt-16 max-w-2xl">
        <div className="flex flex-col gap-4 rounded-md border border-line p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-lg font-medium tracking-tight">{dict.contact.calBanner.title}</p>
            <p className="mt-1 text-sm text-dim">{dict.contact.calBanner.body}</p>
          </div>
          <MagneticButton href={site.contact.calLink} cursorLabel={dict.contact.calBanner.button} className="w-fit shrink-0">
            {dict.contact.calBanner.button}
            <span aria-hidden>↗</span>
          </MagneticButton>
        </div>
      </Reveal>

      <Reveal className="mt-10 max-w-2xl border-t border-line pt-10">
        {status === 'success' ? (
          <div className="flex flex-col gap-3">
            <p className="text-lg">
              <span className="text-text">{f.successTitle}</span>{' '}
              <span className="text-dim">
                {f.successBody}{' '}
                <a href={`mailto:${site.contact.email}`} className="link-underline text-text">
                  {site.contact.email}
                </a>
                .
              </span>
            </p>
            <p className="text-sm text-dim">{f.successFollowup}</p>
            <p className="mt-2 text-sm text-dim">
              {f.urgentLabel}{' '}
              <a href={site.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="link-underline text-text">
                {f.urgentLink}
              </a>
            </p>
          </div>
        ) : (
        <>
        <p className="label mb-6">{f.intro}</p>
        <form onSubmit={handleSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
          />
          <label className="flex flex-col gap-2 text-xs">
            <span className="label !p-0">{f.name}</span>
            <input name="name" type="text" required placeholder={f.namePlaceholder} className={inputCls} />
          </label>
          <label className="flex flex-col gap-2 text-xs">
            <span className="label !p-0">{f.email}</span>
            <input name="email" type="email" required placeholder={f.emailPlaceholder} className={inputCls} />
          </label>
          <label className="flex flex-col gap-2 text-xs">
            <span className="label !p-0">{f.company}</span>
            <input name="company" type="text" placeholder={f.companyPlaceholder} className={inputCls} />
          </label>
          <label className="flex flex-col gap-2 text-xs">
            <span className="label !p-0">{f.service}</span>
            <select name="service" defaultValue="" className={`${inputCls} appearance-none`}>
              <option value="" disabled>
                {f.serviceOptional}
              </option>
              {serviceIds.map((id) => (
                <option key={id} value={dict.services.items[id].title}>
                  {dict.services.items[id].title}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2 text-xs sm:col-span-2">
            <span className="label !p-0">{f.description}</span>
            <textarea
              name="description"
              required
              rows={4}
              placeholder={f.descriptionPlaceholder}
              className={`${inputCls} resize-none`}
            />
          </label>
          <label className="flex flex-col gap-2 text-xs sm:col-span-2">
            <span className="label !p-0">
              {f.budget} <span className="normal-case text-dim">— {f.budgetOptional}</span>
            </span>
            <input name="budget" type="text" placeholder={f.budgetPlaceholder} className={inputCls} />
          </label>

          <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
            <MagneticButton type="submit" cursorLabel={f.submit} className="w-fit" disabled={status === 'submitting'}>
              {status === 'submitting' && (
                <span aria-hidden className="h-3 w-3 animate-spin rounded-full border-2 border-current border-t-transparent" />
              )}
              {status === 'submitting' ? f.submitting : f.submit}
            </MagneticButton>

            {status === 'error' && (
              <p className="text-xs text-accent2">
                {f.requiredError} {f.errorHelp}{' '}
                <a href={`mailto:${site.contact.email}`} className="link-underline text-text">
                  {site.contact.email}
                </a>
                .
              </p>
            )}
          </div>
        </form>
        </>
        )}
      </Reveal>

      <div className="mt-16 grid gap-6 border-t border-line pt-8 font-mono text-2xs uppercase tracking-[0.14em] text-dim sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="text-text/75">{dict.contact.statusLabel}</p>
          <p className="mt-1">{dict.contact.availability}</p>
        </div>
        <div>
          <p className="text-text/75">{dict.contact.baseLabel}</p>
          <p className="mt-1">{dict.contact.baseLocation}</p>
        </div>
        <div>
          <p className="text-text/75">{dict.contact.localTimeLabel}</p>
          <p className="mt-1">{time || '—'}</p>
        </div>
        <div>
          <p className="text-text/75">{dict.contact.socialLabel}</p>
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
