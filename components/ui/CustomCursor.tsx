'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { usePointerFine } from '@/lib/hooks/usePointerFine';
import { useReducedMotionSafe } from '@/lib/hooks/useReducedMotionSafe';

/**
 * Additive accent ring that trails the system cursor — it never hides the real
 * cursor, so text fields, links, and touch devices behave exactly as expected.
 * Expands over anything with [data-cursor-hover].
 */
export function CustomCursor() {
  const isPointerFine = usePointerFine();
  const reduced = useReducedMotionSafe();
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 400, damping: 35, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 400, damping: 35, mass: 0.4 });

  useEffect(() => {
    if (!isPointerFine || reduced) return;

    function handleMove(event: PointerEvent) {
      x.set(event.clientX);
      y.set(event.clientY);
      if (!visible) setVisible(true);
    }

    function handleOver(event: PointerEvent) {
      const target = event.target as HTMLElement | null;
      setHovering(Boolean(target?.closest('[data-cursor-hover]')));
    }

    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerover', handleOver);
    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerover', handleOver);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPointerFine, reduced]);

  if (!isPointerFine || reduced) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] mix-blend-difference"
      style={{ x: springX, y: springY, opacity: visible ? 1 : 0 }}
    >
      <motion.div
        className="rounded-full border border-white"
        animate={{
          width: hovering ? 56 : 20,
          height: hovering ? 56 : 20,
          x: hovering ? -28 : -10,
          y: hovering ? -28 : -10,
          borderWidth: hovering ? 1 : 1.5,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
      />
    </motion.div>
  );
}
