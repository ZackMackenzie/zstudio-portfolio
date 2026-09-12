import type { Metadata, Viewport } from 'next';
import { fontVars } from './fonts';
import { site } from '@/content/site';
import { ptBR } from '@/lib/i18n/locales/pt-BR';
import { INLINE_DETECT_SCRIPT } from '@/lib/i18n/detect';
import { LanguageProvider } from '@/lib/i18n/LanguageProvider';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { Grain } from '@/components/layout/Grain';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

// Metadata is statically generated at build time (static export — no
// per-request rendering), so it is baked in the base locale (pt-BR). The
// page itself re-localizes client-side; see lib/i18n/.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${ptBR.meta.role}`,
    template: `%s — ${site.name}`,
  },
  description: ptBR.meta.description,
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
    title: `${site.name} — ${ptBR.meta.role}`,
    description: ptBR.meta.description,
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${ptBR.meta.role}`,
    description: ptBR.meta.description,
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
  jobTitle: ptBR.meta.role,
  description: ptBR.meta.description,
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
    <html lang="pt-BR" className={fontVars}>
      <body>
        {/* Resolves the real locale (saved choice, else browser language) and
            sets <html lang> + window.__Z_LANG__ before hydration, so the
            client's first render already uses it — see lib/i18n/detect.ts. */}
        <script dangerouslySetInnerHTML={{ __html: INLINE_DETECT_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:text-white"
        >
          Pular para o conteúdo / Skip to content / Saltar al contenido
        </a>

        <LanguageProvider>
          <SmoothScroll />
          <Grain />

          <Navigation />
          <main id="main">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
