import type { Metadata, Viewport } from 'next';
import { fontVars } from './fonts';
import { site } from '@/content/site';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { Grain } from '@/components/layout/Grain';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  keywords: [
    'web design',
    'desenvolvimento web',
    'UI/UX',
    'design de produto',
    'identidade visual',
    'landing page',
    'SaaS',
    'motion design',
    'estúdio digital',
    'experiências digitais',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description: site.description,
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#000000',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  url: site.url,
  jobTitle: site.role,
  description: site.description,
  knowsAbout: [
    'Web Design',
    'Desenvolvimento Web',
    'UI/UX Design',
    'Identidade Visual',
    'Motion Design',
    'Tecnologia Criativa',
  ],
  sameAs: site.socials.filter((s) => !s.href.startsWith('mailto')).map((s) => s.href),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.locale} className={fontVars}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:text-white"
        >
          Pular para o conteúdo
        </a>

        <SmoothScroll />
        <Grain />

        <Navigation />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
