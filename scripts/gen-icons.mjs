// Generates PNG icons + favicon.ico from public/favicon.svg
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const svg = readFileSync(join(root, 'public/favicon.svg'));

const targets = [
  ['icon-192.png', 192],
  ['icon-512.png', 512],
  ['apple-touch-icon.png', 180],
  ['icon-32.png', 32],
];

for (const [name, size] of targets) {
  await sharp(svg, { density: 384 })
    .resize(size, size)
    .png()
    .toFile(join(root, 'public', name));
  console.log('  ✓', name);
}

// favicon.ico (32px png payload — modern browsers accept it)
const ico32 = await sharp(svg, { density: 384 }).resize(32, 32).png().toBuffer();
writeFileSync(join(root, 'public/favicon.ico'), ico32);
console.log('  ✓ favicon.ico');
