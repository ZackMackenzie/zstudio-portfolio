import { loadFont as loadDisplay } from '@remotion/google-fonts/HankenGrotesk';
import { loadFont as loadMono } from '@remotion/google-fonts/IBMPlexMono';

const display = loadDisplay('normal', { weights: ['400', '500', '600'], subsets: ['latin'] });
const mono = loadMono('normal', { weights: ['400', '500'], subsets: ['latin'] });

export const fontFamilyDisplay = display.fontFamily;
export const fontFamilyMono = mono.fontFamily;

export const waitForFonts = () =>
  Promise.all([display.waitUntilDone(), mono.waitUntilDone()]);
