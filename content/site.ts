export const site = {
  name: 'Z.studio',
  legalName: 'Z.studio',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://zstudio.vercel.app',
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
