import Link from 'next/link';
import type { Dictionary, Locale } from '@/lib/i18n/types';
import { Logo } from '@/components/ui/Logo';
import { site } from '@/content/site';

interface FooterProps {
  dict: Dictionary;
  locale: Locale;
}

export function Footer({ dict, locale }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-10 py-14 md:flex-row md:items-end md:justify-between">
        <div>
          <Link href={`/${locale}`} data-cursor-hover className="text-xl">
            <Logo />
          </Link>
          <p className="mt-3 max-w-xs text-sm text-dim">{dict.footer.tagline}</p>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm text-dim">
          <a href={`/${locale}#work`} data-cursor-hover className="hover:text-text">
            {dict.nav.work}
          </a>
          <a href={`/${locale}#services`} data-cursor-hover className="hover:text-text">
            {dict.nav.services}
          </a>
          <a href={`/${locale}#about`} data-cursor-hover className="hover:text-text">
            {dict.nav.about}
          </a>
          <a href={site.social.instagram} target="_blank" rel="noreferrer" data-cursor-hover className="hover:text-text">
            Instagram
          </a>
          <a href={site.social.linkedin} target="_blank" rel="noreferrer" data-cursor-hover className="hover:text-text">
            LinkedIn
          </a>
        </div>

        <a
          href="#top"
          data-cursor-hover
          className="text-sm text-dim underline decoration-line underline-offset-4 hover:text-text"
        >
          {dict.footer.back}
        </a>
      </div>

      <div className="container-page flex flex-col gap-2 border-t border-line py-6 text-2xs text-dim sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {year} {site.legalName}. {dict.footer.rights}
        </span>
        <span className="font-mono uppercase">Built in Next.js — São Paulo</span>
      </div>
    </footer>
  );
}
