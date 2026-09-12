'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n/LanguageProvider';

export default function NotFound() {
  const { dict } = useI18n();

  return (
    <section className="shell flex min-h-[80svh] flex-col justify-center py-section">
      <span className="label text-accent">{dict.notFound.badge}</span>
      <h1 className="mt-6 font-display text-4xl font-medium tracking-tightest md:text-5xl">
        {dict.notFound.titleLines[0]}
        <br />
        {dict.notFound.titleLines[1]}
      </h1>
      <p className="mt-6 max-w-md text-dim">{dict.notFound.body}</p>
      <Link
        href="/"
        className="link-underline mt-10 w-fit font-mono text-xs uppercase tracking-[0.16em]"
      >
        {dict.notFound.back}
      </Link>
    </section>
  );
}
