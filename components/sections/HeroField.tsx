'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotionSafe } from '@/lib/hooks/useReducedMotionSafe';
import { usePointerFine } from '@/lib/hooks/usePointerFine';
import { lerp } from '@/lib/utils';

/**
 * Hero backdrop — the ZStudio signature: pure black with a blue→cyan aura
 * anchored to the bottom-left, a faint cool grid, and two thin outlined shapes
 * that parallax to the cursor via a single rAF loop (transform-only).
 * Fully static under reduced-motion / touch.
 */
export function HeroField() {
  const reduced = useReducedMotionSafe();
  const pointerFine = usePointerFine();
  const layers = useRef<(HTMLDivElement | null)[]>([]);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  const interactive = pointerFine && !reduced;

  useEffect(() => {
    if (!interactive) return;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const depths = [26, 16, 44];
    const tick = () => {
      current.current.x = lerp(current.current.x, target.current.x, 0.055);
      current.current.y = lerp(current.current.y, target.current.y, 0.055);
      layers.current.forEach((el, i) => {
        if (!el) return;
        const d = depths[i] ?? 20;
        el.style.transform = `translate3d(${current.current.x * d}px, ${current.current.y * d}px, 0)`;
      });
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [interactive]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* signature aura — blue -> cyan bloom from the bottom-left corner */}
      <div
        ref={(el) => {
          layers.current[0] = el;
        }}
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(75% 90% at -6% 114%, var(--accent-2) 0%, var(--accent) 20%, rgba(47,107,255,0.7) 34%, rgba(47,107,255,0.22) 52%, transparent 70%)',
        }}
      />
      {/* cyan hotspot right at the corner */}
      <div
        aria-hidden
        className="absolute -bottom-32 -left-32 h-[52vh] w-[52vh] rounded-full blur-[60px]"
        style={{ background: 'radial-gradient(circle, var(--accent-2) 0%, transparent 66%)', opacity: 0.8 }}
      />

      {/* editorial grid */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
          backgroundSize: 'clamp(60px, 9vw, 120px) clamp(60px, 9vw, 120px)',
          maskImage: 'radial-gradient(ellipse 85% 75% at 60% 35%, #000 15%, transparent 78%)',
        }}
      />

      {/* shape 1 — outlined square, upper right */}
      <div
        ref={(el) => {
          layers.current[1] = el;
        }}
        className="absolute right-[8%] top-[20%] hidden md:block"
      >
        <div className="h-40 w-40 rotate-12 border border-line lg:h-56 lg:w-56" />
      </div>

      {/* shape 2 — thin ring + axis, mid left */}
      <div
        ref={(el) => {
          layers.current[2] = el;
        }}
        className="absolute bottom-[24%] left-[7%] hidden md:block"
      >
        <svg width="190" height="190" viewBox="0 0 190 190" className="opacity-70">
          <circle cx="95" cy="95" r="64" fill="none" stroke="var(--line)" />
          <line x1="0" y1="95" x2="190" y2="95" stroke="var(--line)" />
          <circle cx="95" cy="31" r="3" fill="var(--accent-2)" />
        </svg>
      </div>
    </div>
  );
}
