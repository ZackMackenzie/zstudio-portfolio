import type { CaseBlock, MediaRef, Project, ProjectStructure } from '@/content/projects';
import type { Dictionary } from './locales/en';

type SeedList =
  | { width: number; height: number; seed: string; accent?: boolean; mockup?: MediaRef['mockup'] }[]
  | undefined;
type AltList = { alt: string }[] | undefined;

function mergeMedia(seeds: SeedList, texts: AltList): MediaRef[] {
  if (!seeds) return [];
  return seeds.map((s, i) => ({
    width: s.width,
    height: s.height,
    seed: s.seed,
    accent: s.accent,
    mockup: s.mockup,
    alt: texts?.[i]?.alt ?? '',
  }));
}

/** Joins the structural shape of a project (content/projects.ts) with its
 * localized copy (dict.work.projects[slug]) into the fully-resolved `Project`
 * shape the existing render components (`CaseIntro`, `CaseBlock`, …) expect. */
export function mergeProject(dict: Dictionary, structure: ProjectStructure): Project {
  const text = dict.work.projects[structure.slug];
  if (!text) {
    throw new Error(`Missing dictionary entry for project "${structure.slug}".`);
  }

  const blocks: CaseBlock[] = structure.blocks.map((b): CaseBlock => {
    switch (b.type) {
      case 'overview':
        return { type: 'overview', body: text.overview.body, meta: text.overview.meta };
      case 'design':
        return {
          type: 'design',
          body: text.design?.body ?? '',
          media: mergeMedia(b.media, text.design?.media),
        };
      case 'result':
        return { type: 'result', body: text.result.body };
      case 'technologies':
        return { type: 'technologies', groups: text.technologies.groups };
      default:
        // exhaustiveness guard
        return b satisfies never;
    }
  });

  return {
    slug: structure.slug,
    title: text.title,
    category: text.category,
    tags: text.tags,
    year: structure.year,
    status: structure.status,
    summary: text.summary,
    cover: { ...structure.cover, alt: text.title },
    blocks,
  };
}
