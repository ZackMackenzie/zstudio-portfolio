'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { useReducedMotionSafe } from '@/lib/hooks/useReducedMotionSafe';

let lenisRef: Lenis | null = null;

/** Access the shared Lenis instance (e.g. for anchor navigation). */
export function getLenis() {
  return lenisRef;
}

export function scrollToId(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  if (lenisRef) {
    lenisRef.scrollTo(target, { offset: 0, duration: 1.1 });
  } else {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export function SmoothScroll() {
  const reduced = useReducedMotionSafe();

  useEffect(() => {
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 0.9,
      touchMultiplier: 1.4,
    });
    lenisRef = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef = null;
    };
  }, [reduced]);

  return null;
}
