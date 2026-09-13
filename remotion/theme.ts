import { fontFamilyDisplay, fontFamilyMono } from './fonts';

/** Raw token values shared with the site (see app/globals.css). */
export const theme = {
  bg: '#09090b',
  raised: '#0f1012',
  line: '#1e1f22',
  text: '#fafafa',
  dim: '#9aa0a8',
  accent: '#2f6bff',
  accent2: '#34e1ff',
  fontDisplay: `${fontFamilyDisplay}, "Segoe UI", Roboto, sans-serif`,
  fontMono: `${fontFamilyMono}, ui-monospace, Menlo, monospace`,
};

export const FPS = 30;
