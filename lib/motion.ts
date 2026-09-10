import type { Variants, Transition } from 'framer-motion';

/** Named easings — mirror of the CSS custom properties. */
export const ease = {
  expo: [0.16, 1, 0.3, 1] as [number, number, number, number],
  quart: [0.76, 0, 0.24, 1] as [number, number, number, number],
};

export const duration = {
  fast: 0.35,
  mid: 0.6,
  slow: 1,
};

/** Standard reveal — fade + rise. */
export const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.mid, ease: ease.expo },
  },
};

/** Container that staggers its children into view. */
export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

/** Line-by-line clip reveal for headlines (used by MotionText). */
export const lineReveal: Variants = {
  hidden: { y: '110%' },
  visible: {
    y: '0%',
    transition: { duration: 0.9, ease: ease.expo },
  },
};

/** Image / media mask wipe. */
export const maskReveal: Variants = {
  hidden: { clipPath: 'inset(0 0 100% 0)' },
  visible: {
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 1, ease: ease.expo },
  },
};

export const viewport = { once: true, margin: '0px 0px -12% 0px' } as const;

export const springSoft: Transition = { type: 'spring', stiffness: 120, damping: 18, mass: 0.6 };
