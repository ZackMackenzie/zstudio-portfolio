import { Hanken_Grotesk, Inter, IBM_Plex_Mono, Newsreader } from 'next/font/google';

export const display = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

export const sans = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-sans',
  display: 'swap',
});

export const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const serif = Newsreader({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['italic', 'normal'],
  variable: '--font-serif',
  display: 'swap',
});

export const fontVars = `${display.variable} ${sans.variable} ${mono.variable} ${serif.variable}`;
