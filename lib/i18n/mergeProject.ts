import type { CaseBlock, MediaRef, Project, ProjectStructure } from '@/content/projects';
import type { Dictionary } from './locales/pt-BR';

type SeedList = { width: number; height: number; seed: string; accent?: boolean }[] | undefined;
type AltList = { alt: string }[] | undefined;

function mergeMedia(seeds: SeedList, texts: AltList): MediaRef[] {
  if (!seeds) return [];
  return seeds.map((s, i) => ({
    width: s.width,
    height: s.height,
    seed: s.seed,
    accent: s.accent,
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
      case 'challenge':
        return { type: 'challenge', body: text.challenge.body };
      case 'approach':
        return { type: 'approach', body: text.approach.body, steps: text.approach.steps };
      case 'design':
        return {
          type: 'design',
          body: text.design?.body ?? '',
          media: mergeMedia(b.media, text.design?.media),
        };
      case 'development':
        return {
          type: 'development',
          body: text.development?.body ?? '',
          media: mergeMedia(b.media, text.development?.media),
        };
      case 'motion':
        return { type: 'motion', body: text.motion.body, clipId: b.clipId };
      case 'result':
        return { type: 'result', body: text.result.body };
      case 'gallery':
        return { type: 'gallery', media: mergeMedia(b.media, text.gallery?.media) };
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
    discipline: text.discipline,
    disciplines: text.tags,
    year: structure.year,
    status: structure.status,
    summary: text.summary,
    cover: { ...structure.cover, alt: text.title },
    blocks,
  };
}
