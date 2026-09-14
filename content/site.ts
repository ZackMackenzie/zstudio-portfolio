// Prefer an explicit custom domain (NEXT_PUBLIC_SITE_URL) once one is attached;
// otherwise fall back to Vercel's own stable production URL, which Vercel sets
// automatically at build time — no env var to configure for this to be correct.
const fallbackUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'https://zstudio-portfolio.vercel.app';

export const site = {
  name: 'Z.studio',
  legalName: 'Z.studio',
  url: process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl,
  email: 'hello@zstudio.design',
  social: {
    instagram: 'https://instagram.com/z.studio',
    linkedin: 'https://linkedin.com/company/zstudio',
  },
  founded: 2023,
} as const;

export function mailtoHref(subject?: string) {
  const params = subject ? `?subject=${encodeURIComponent(subject)}` : '';
  return `mailto:${site.email}${params}`;
}
