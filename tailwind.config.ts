import type { Config } from 'tailwindcss';

/**
 * Design tokens.
 * Canonical values live as CSS custom properties in app/globals.css.
 * This file mirrors them for Tailwind utilities; remotion/theme.ts mirrors the
 * raw values again for the video pipeline. Keep all three in sync.
 */
const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1600px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      bg: 'var(--bg)',
      raised: 'var(--bg-raised)',
      line: 'var(--line)',
      paper: 'var(--paper)',
      ink: 'var(--ink)',
      text: 'var(--text)',
      dim: 'var(--text-dim)',
      accent: 'var(--accent)',
      'accent-soft': 'var(--accent-soft)',
      'accent-tint': 'var(--accent-tint)',
      white: '#ffffff',
      black: '#000000',
    },
    fontFamily: {
      display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
    },
    fontSize: {
      // Legibility first: no token under 12px, no line-height under 1, tracking
      // eased off across the board — see PRIORIDADE 1 of the commercial-pass brief.
      '2xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.05em' }],
      xs: ['0.8125rem', { lineHeight: '1.6', letterSpacing: '0.02em' }],
      sm: ['0.9375rem', { lineHeight: '1.6' }],
      base: ['1.0625rem', { lineHeight: '1.7' }],
      lg: ['clamp(1.125rem, 0.95rem + 0.8vw, 1.4375rem)', { lineHeight: '1.55' }],
      xl: ['clamp(1.375rem, 1rem + 1.6vw, 2.125rem)', { lineHeight: '1.35' }],
      '2xl': ['clamp(1.75rem, 1rem + 3vw, 3.125rem)', { lineHeight: '1.2' }],
      '3xl': ['clamp(2.25rem, 1rem + 4.6vw, 4.375rem)', { lineHeight: '1.08' }],
      '4xl': ['clamp(2.75rem, 0.8rem + 7vw, 6.75rem)', { lineHeight: '1.02' }],
      '5xl': ['clamp(2.75rem, 0.5rem + 7.8vw, 7.5rem)', { lineHeight: '1.02' }],
    },
    extend: {
      spacing: {
        gutter: 'var(--gutter)',
        section: 'var(--section-y)',
      },
      maxWidth: {
        page: '1680px',
        prose: '58ch',
      },
      borderRadius: {
        none: '0',
        xs: '2px',
        sm: '4px',
        md: '8px',
        pill: '999px',
      },
      boxShadow: {
        glow: '0 0 120px -30px var(--accent)',
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
        quart: 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
        1200: '1200ms',
      },
      letterSpacing: {
        tightest: '-0.025em',
        tighter: '-0.015em',
        tight: '-0.008em',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '10%': { transform: 'translate(-5%,-10%)' },
          '30%': { transform: 'translate(3%,-15%)' },
          '50%': { transform: 'translate(9%,-5%)' },
          '70%': { transform: 'translate(-3%,10%)' },
          '90%': { transform: 'translate(-8%,3%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
      },
      animation: {
        marquee: 'marquee 36s linear infinite',
        grain: 'grain 8s steps(8) infinite',
        blink: 'blink 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
