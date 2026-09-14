import Link from 'next/link';
import { cookies, headers } from 'next/headers';
import { DEFAULT_LOCALE, isLocale, type Locale } from '@/lib/i18n/types';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { detectLocaleFromAcceptLanguage } from '@/lib/i18n/detect';

export default async function NotFound() {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const cookieLocale = cookieStore.get('z_locale')?.value;
  const locale: Locale = isLocale(cookieLocale || '')
    ? (cookieLocale as Locale)
    : detectLocaleFromAcceptLanguage(headerStore.get('accept-language')) || DEFAULT_LOCALE;
  const dict = getDictionary(locale);

  return (
    <section className="flex min-h-[80dvh] flex-col items-start justify-center">
      <div className="container-page">
        <span className="number-label mb-6 block uppercase text-dim">{dict.notFound.kicker}</span>
        <h1 className="font-display text-3xl font-medium tracking-tightest text-balance">
          {dict.notFound.title}
        </h1>
        <p className="mt-4 max-w-md text-dim">{dict.notFound.body}</p>
        <Link
          href={`/${locale}`}
          data-cursor-hover
          className="mt-8 inline-flex items-center rounded-pill bg-text px-6 py-3.5 text-sm font-medium text-ink transition-colors duration-400 hover:bg-accent hover:text-white"
        >
          {dict.notFound.cta}
        </Link>
      </div>
    </section>
  );
}
