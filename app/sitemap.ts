import type { MetadataRoute } from 'next';
import { site } from '@/content/site';
import { LOCALES } from '@/lib/i18n/types';
import { projects } from '@/content/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    entries.push({
      url: `${site.url}/${locale}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    });
    for (const project of projects) {
      entries.push({
        url: `${site.url}/${locale}/work/${project.slug}`,
        lastModified: now,
        changeFrequency: 'yearly',
        priority: 0.7,
      });
    }
  }

  return entries;
}
