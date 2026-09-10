'use client';

import { useSyncExternalStore } from 'react';

export type CursorState = 'default' | 'view' | 'link' | 'drag' | 'hidden';

type Snapshot = { state: CursorState; label: string };

let snapshot: Snapshot = { state: 'default', label: '' };
const listeners = new Set<() => void>();

function emit() {
  for (const l of listeners) l();
}

export const cursor = {
  set(state: CursorState, label = '') {
    if (snapshot.state === state && snapshot.label === label) return;
    snapshot = { state, label };
    emit();
  },
  reset() {
    cursor.set('default', '');
  },
};

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

export function useCursorSnapshot() {
  return useSyncExternalStore(
    subscribe,
    () => snapshot,
    () => snapshot,
  );
}

/** Handlers to spread on any element that should change the cursor on hover. */
export function cursorHover(state: CursorState, label = '') {
  return {
    onMouseEnter: () => cursor.set(state, label),
    onMouseLeave: () => cursor.reset(),
    onFocus: () => cursor.set(state, label),
    onBlur: () => cursor.reset(),
  };
}
