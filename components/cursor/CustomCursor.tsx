'use client';

import { useEffect, useRef } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { usePointerFine } from '@/lib/hooks/usePointerFine';
import { useReducedMotionSafe } from '@/lib/hooks/useReducedMotionSafe';
import { useCursorSnapshot } from './cursor-store';

/**
 * Desktop-only custom cursor. Renders nothing on touch / coarse pointers and
 * when the user prefers reduced motion. Purely decorative — never traps focus,
 * never blocks pointer events.
 */
export function CustomCursor() {
  const pointerFine = usePointerFine();
  const reduced = useReducedMotionSafe();
  const { state, label } = useCursorSnapshot();

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 600, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 600, damping: 40, mass: 0.4 });
  const visible = useRef(false);

  const active = pointerFine && !reduced;

  useEffect(() => {
    if (!active) {
      document.documentElement.removeAttribute('data-custom-cursor');
      return;
    }
    document.documentElement.setAttribute('data-custom-cursor', 'on');

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible.current) {
        visible.current = true;
        document.documentElement.setAttribute('data-cursor-visible', 'on');
      }
    };
    const leave = () => {
      visible.current = false;
      document.documentElement.removeAttribute('data-cursor-visible');
    };

    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', leave);
    return () => {
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', leave);
      document.documentElement.removeAttribute('data-custom-cursor');
      document.documentElement.removeAttribute('data-cursor-visible');
    };
  }, [active, x, y]);

  if (!active || state === 'hidden') return null;

  const isText = state === 'view' || (state === 'drag' && label);
  const size = state === 'view' ? 84 : state === 'link' ? 44 : state === 'drag' ? 64 : 10;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        className="flex items-center justify-center rounded-pill bg-white text-black"
        animate={{
          width: size,
          height: size,
          marginLeft: -size / 2,
          marginTop: -size / 2,
        }}
        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
      >
        <AnimatePresence mode="wait">
          {isText && (
            <motion.span
              key={label || state}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.15 }}
              className="font-mono text-[10px] font-medium uppercase tracking-[0.16em]"
            >
              {label || 'View'}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
