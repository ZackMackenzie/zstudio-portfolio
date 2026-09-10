import { fontFamilyDisplay, fontFamilyMono } from './fonts';

/** Raw token values shared with the site (see app/globals.css). */
export const theme = {
  bg: '#000000',
  raised: '#0c0d0f',
  line: '#1b1c1f',
  text: '#f5f6f7',
  dim: '#7a7e85',
  accent: '#2f6bff',
  accent2: '#34e1ff',
  fontDisplay: `${fontFamilyDisplay}, "Segoe UI", Roboto, sans-serif`,
  fontMono: `${fontFamilyMono}, ui-monospace, Menlo, monospace`,
};

export const FPS = 30;
