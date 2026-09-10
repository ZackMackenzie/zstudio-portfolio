/**
 * Renders every Remotion composition registered in remotion/Root.tsx to
 * public/media/<id>.webm + <id>.mp4 + <id>-poster.jpg
 *
 *   npm run motion:render            # all compositions
 *   npm run motion:render typography-reel motion-poster   # a subset
 */
import { bundle } from '@remotion/bundler';
import { getCompositions, renderMedia, renderStill } from '@remotion/renderer';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'media');
mkdirSync(outDir, { recursive: true });

const only = process.argv.slice(2);

console.log('• Bundling Remotion project…');
const serveUrl = await bundle({
  entryPoint: join(root, 'remotion', 'index.ts'),
  onProgress: (p) => process.stdout.write(`\r  bundling ${p}%   `),
});
process.stdout.write('\n');

const compositions = await getCompositions(serveUrl);
const targets = only.length ? compositions.filter((c) => only.includes(c.id)) : compositions;

if (!targets.length) {
  console.error('No matching compositions.');
  process.exit(1);
}

for (const composition of targets) {
  const { id } = composition;
  console.log(`\n• ${id}  (${composition.width}×${composition.height}, ${composition.durationInFrames}f)`);

  await renderMedia({
    composition,
    serveUrl,
    codec: 'vp9',
    outputLocation: join(outDir, `${id}.webm`),
    muted: true,
    onProgress: ({ progress }) =>
      process.stdout.write(`\r  webm  ${Math.round(progress * 100)}%   `),
  });
  process.stdout.write('\n');

  await renderMedia({
    composition,
    serveUrl,
    codec: 'h264',
    outputLocation: join(outDir, `${id}.mp4`),
    muted: true,
    onProgress: ({ progress }) =>
      process.stdout.write(`\r  mp4   ${Math.round(progress * 100)}%   `),
  });
  process.stdout.write('\n');

  await renderStill({
    composition,
    serveUrl,
    frame: Math.floor(composition.durationInFrames * 0.5),
    output: join(outDir, `${id}-poster.jpg`),
    jpegQuality: 82,
    imageFormat: 'jpeg',
  });
  console.log('  poster ✓');
}

console.log('\n✓ Done — files in public/media/');
process.exit(0);
