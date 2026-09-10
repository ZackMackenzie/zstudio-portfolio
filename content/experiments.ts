/**
 * LAB — experiments, studies and concepts.
 * `clipId` refers to a rendered file in /public/media (see remotion/). Entries
 * without a clip fall back to generated art. Add freely; order = display order.
 */
export type Experiment = {
  id: string;
  title: string;
  kind: string; // e.g. "Motion", "Typography", "Generative"
  note: string;
  clipId?: string;
  seed: string;
  accent?: boolean;
};

export const experiments: Experiment[] = [
  {
    id: 'kinetic-type',
    title: 'Kinetic Type',
    kind: 'Typography / Motion',
    note: 'A typographic reel exploring weight, tracking and rhythm in motion — rendered with Remotion.',
    clipId: 'typography-reel',
    seed: 'kinetic-type',
    accent: true,
  },
  {
    id: 'motion-poster',
    title: 'Motion Poster',
    kind: 'Motion / Composition',
    note: 'A looping poster study: grid, one shape, one accent. A test of how little movement still reads as alive.',
    clipId: 'motion-poster',
    seed: 'motion-poster',
  },
  {
    id: 'generative-grids',
    title: 'Generative Grids',
    kind: 'Generative / Code',
    note: 'Deterministic abstract compositions seeded from a string — the system behind every placeholder visual on this site.',
    seed: 'generative-grids',
  },
  {
    id: 'case-teaser',
    title: 'Case Teaser',
    kind: 'Motion / Editorial',
    note: 'A short format for opening a case study with motion instead of a static hero.',
    clipId: 'case-teaser',
    seed: 'case-teaser',
    accent: true,
  },
  {
    id: 'cursor-states',
    title: 'Cursor States',
    kind: 'Interaction',
    note: 'The custom cursor system used across this site — contextual labels, magnetic targets, reduced-motion aware.',
    seed: 'cursor-states',
  },
  {
    id: 'social-render-pipeline',
    title: 'Render Pipeline',
    kind: 'Tooling / Motion',
    note: 'Batch-rendering social motion from a manifest — change the data, re-render the set.',
    clipId: 'social-creative',
    seed: 'social-render-pipeline',
  },
];
