import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { display, sans, mono } from '../fonts';
import '../globals.css';
import { LOCALES, isLocale, type Locale } from '@/lib/i18n/types';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Grain } from '@/components/layout/Grain';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { site } from '@/content/site';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : 'en';
  const dict = getDictionary(locale);

  const languages = Object.fromEntries(LOCALES.map((l) => [l, `${site.url}/${l}`]));

  return {
    metadataBase: new URL(site.url),
    title: {
      default: dict.meta.title,
      template: `%s — ${site.name}`,
    },
    description: dict.meta.description,
    alternates: {
      canonical: `${site.url}/${locale}`,
      languages,
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${site.url}/${locale}`,
      siteName: site.name,
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
    },
    icons: {
      icon: [
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
        { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      ],
      apple: '/apple-touch-icon.png',
    },
    manifest: '/manifest.webmanifest',
  };
}

export const viewport: Viewport = {
  themeColor: '#060607',
  colorScheme: 'dark',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Grain />
        <CustomCursor />
        <Navigation dict={dict} locale={locale} />
        <main id="main">{children}</main>
        <Footer dict={dict} locale={locale} />
      </body>
    </html>
  );
}
