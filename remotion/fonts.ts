import { loadFont as loadSpaceGrotesk } from '@remotion/google-fonts/SpaceGrotesk';
import { loadFont as loadInter } from '@remotion/google-fonts/Inter';
import { loadFont as loadPlexMono } from '@remotion/google-fonts/IBMPlexMono';

export function loadFonts() {
  const { fontFamily: display } = loadSpaceGrotesk('normal', { weights: ['500', '600', '700'] });
  const { fontFamily: sans } = loadInter('normal', { weights: ['400', '500', '600'] });
  const { fontFamily: mono } = loadPlexMono('normal', { weights: ['400', '500'] });
  return { display, sans, mono };
}
