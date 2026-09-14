// Mirrors app/globals.css design tokens for the video pipeline — keep in sync.
export const theme = {
  bg: '#060607',
  bgRaised: '#101013',
  line: 'rgba(255,255,255,0.1)',
  text: '#f6f6f4',
  textDim: '#97979d',
  accent: '#3a5bff',
  accentSoft: '#8ea1ff',
} as const;

export const fonts = {
  display: '"Space Grotesk", system-ui, sans-serif',
  sans: '"Inter", system-ui, sans-serif',
  mono: '"IBM Plex Mono", ui-monospace, monospace',
} as const;

export const EASE_EXPO = [0.16, 1, 0.3, 1] as const;
