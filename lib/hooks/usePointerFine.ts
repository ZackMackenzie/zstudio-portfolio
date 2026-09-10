'use client';

import { useSyncExternalStore } from 'react';

const QUERY = '(pointer: fine) and (hover: hover)';

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  const mql = window.matchMedia(QUERY);
  mql.addEventListener('change', callback);
  return () => mql.removeEventListener('change', callback);
}

/** True only on devices with a precise pointer (desktop). Drives the custom cursor. */
export function usePointerFine() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  );
}
