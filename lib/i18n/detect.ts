import { LOCALES, type Locale } from './types';

export const STORAGE_KEY = 'zstudio-lang';
const FALLBACK: Locale = 'en';

/** Maps a BCP-47 language tag (e.g. "pt-PT", "en-US") to a supported locale, or null. */
export function matchLocale(tag: string): Locale | null {
  const lower = tag.toLowerCase();
  if (lower.startsWith('pt')) return 'pt-BR';
  if (lower.startsWith('en')) return 'en';
  return null;
}

/**
 * Client-side locale resolution: saved choice first, then the browser's
 * preferred languages, then English. Mirrors INLINE_DETECT_SCRIPT below —
 * keep the two in sync.
 */
export function detectLocale(): Locale {
  if (typeof window === 'undefined') return FALLBACK; // matches the statically-rendered HTML
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && (LOCALES as readonly string[]).includes(saved)) return saved as Locale;
  } catch {
    // localStorage unavailable (private mode, blocked) — fall through to detection
  }
  const langs =
    navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
  for (const tag of langs) {
    const match = matchLocale(tag ?? '');
    if (match) return match;
  }
  return FALLBACK;
}

/**
 * Dependency-free copy of the same resolution logic, run as a blocking inline
 * <script> before the app bundle loads (see app/layout.tsx). It only sets
 * `window.__Z_LANG__` — a plain global, never a DOM attribute — so it cannot
 * conflict with React's hydration pass. LanguageProvider always hydrates as
 * English (matching the statically-rendered HTML) and reads this value in a
 * post-mount effect to switch locale right after, which is a normal state
 * update rather than a hydration mismatch. See LanguageProvider.tsx.
 */
export const INLINE_DETECT_SCRIPT = `(function(){try{var k='${STORAGE_KEY}';var s=localStorage.getItem(k);var v=null;if(s==='pt-BR'||s==='en'){v=s;}if(!v){var langs=(navigator.languages&&navigator.languages.length)?navigator.languages:[navigator.language||'en'];for(var i=0;i<langs.length;i++){var l=(langs[i]||'').toLowerCase();if(l.indexOf('pt')===0){v='pt-BR';break;}if(l.indexOf('en')===0){v='en';break;}}}if(!v)v='en';window.__Z_LANG__=v;}catch(e){}})();`;
