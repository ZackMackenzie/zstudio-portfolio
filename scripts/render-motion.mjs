// Renders every Remotion composition in remotion/Root.tsx to public/media/.
// Run with `npm run motion:render`. Requires Chrome Headless Shell (auto-downloaded
// by @remotion/renderer on first run).
import { bundle } from '@remotion/bundler';
import { getCompositions, renderMedia, renderStill } from '@remotion/renderer';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const entry = path.join(__dirname, '..', 'remotion', 'index.ts');
const outDir = path.join(__dirname, '..', 'public', 'media');

const RENDER = [{ id: 'ApexReel', outName: 'apex-reel', posterFrame: 95 }];

async function main() {
  console.log('Bundling Remotion project…');
  const bundleLocation = await bundle({ entryPoint: entry });

  const compositions = await getCompositions(bundleLocation);

  for (const { id, outName, posterFrame } of RENDER) {
    const composition = compositions.find((c) => c.id === id);
    if (!composition) {
      console.warn(`Composition "${id}" not found — skipping.`);
      continue;
    }

    console.log(`Rendering ${id} → ${outName}.mp4`);
    await renderMedia({
      composition,
      serveUrl: bundleLocation,
      codec: 'h264',
      outputLocation: path.join(outDir, `${outName}.mp4`),
    });

    console.log(`Rendering ${id} → ${outName}.webm`);
    await renderMedia({
      composition,
      serveUrl: bundleLocation,
      codec: 'vp8',
      outputLocation: path.join(outDir, `${outName}.webm`),
    });

    console.log(`Rendering ${id} poster → ${outName}-poster.jpg`);
    await renderStill({
      composition,
      serveUrl: bundleLocation,
      output: path.join(outDir, `${outName}-poster.jpg`),
      frame: posterFrame,
      imageFormat: 'jpeg',
    });
  }

  console.log('Done.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
