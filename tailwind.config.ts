import type { Config } from 'tailwindcss';

/**
 * Design tokens.
 * The canonical values live as CSS custom properties in app/globals.css.
 * This file mirrors them for Tailwind utilities. remotion/theme.ts mirrors the
 * raw values again for the video pipeline. Keep the three in sync.
 */
const config: Config = {
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
      accent2: 'var(--accent-2)',
      'accent-tint': 'var(--accent-tint)',
      white: '#ffffff',
      black: '#000000',
    },
    fontFamily: {
      display: ['var(--font-display)', 'Hanken Grotesk', 'system-ui', 'sans-serif'],
      sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      mono: ['var(--font-mono)', 'IBM Plex Mono', 'ui-monospace', 'monospace'],
      serif: ['var(--font-serif)', 'Newsreader', 'Georgia', 'serif'],
    },
    fontSize: {
      // fluid scale — min / preferred (vw) / max baked into clamp()
      '2xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.06em' }],
      xs: ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.04em' }],
      sm: ['0.875rem', { lineHeight: '1.6' }],
      base: ['1rem', { lineHeight: '1.65' }],
      lg: ['clamp(1.125rem, 0.9rem + 1vw, 1.5rem)', { lineHeight: '1.5' }],
      xl: ['clamp(1.5rem, 1rem + 2vw, 2.25rem)', { lineHeight: '1.3' }],
      '2xl': ['clamp(2rem, 1rem + 4vw, 3.5rem)', { lineHeight: '1.15' }],
      '3xl': ['clamp(2.5rem, 1rem + 5.5vw, 4.5rem)', { lineHeight: '1.04' }],
      '4xl': ['clamp(2.75rem, 1rem + 7vw, 6.5rem)', { lineHeight: '0.98' }],
      '5xl': ['clamp(3rem, 1rem + 9vw, 8.5rem)', { lineHeight: '0.92' }],
    },
    extend: {
      spacing: {
        gutter: 'var(--gutter)',
        section: 'var(--section-y)',
      },
      maxWidth: {
        page: '1600px',
        prose: '58ch',
      },
      borderRadius: {
        none: '0',
        xs: '2px',
        sm: '4px',
        pill: '999px',
      },
      boxShadow: {
        glow: '0 0 80px -20px var(--accent)',
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
      },
      letterSpacing: {
        tightest: '-0.045em',
        tighter: '-0.03em',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'grain-shift': {
          '0%,100%': { transform: 'translate(0,0)' },
          '10%': { transform: 'translate(-5%,-10%)' },
          '30%': { transform: 'translate(3%,-15%)' },
          '50%': { transform: 'translate(9%,-5%)' },
          '70%': { transform: 'translate(-3%,10%)' },
          '90%': { transform: 'translate(-8%,3%)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'grain-shift': 'grain-shift 8s steps(6) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
