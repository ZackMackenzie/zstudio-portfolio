'use client';

import { useEffect, useState } from 'react';

/** True when the primary input is a precise pointer (mouse/trackpad) — used to gate cursor/hover-only effects off touch devices. */
export function usePointerFine() {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(pointer: fine)');
    setFine(query.matches);
    const onChange = (event: MediaQueryListEvent) => setFine(event.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return fine;
}
