import { cn } from '@/lib/utils';
import { GeneratedArt } from './GeneratedArt';

export type MediaSource = {
  /** Path under /public, e.g. "/media/case-hero". Provide without extension when
   *  multiple formats exist; otherwise pass a full path in `src`. */
  src?: string;
  /** Explicit formats, most-preferred first. */
  sources?: { srcSet: string; type: string }[];
  alt: string;
  width: number;
  height: number;
  /** Fallback abstract art seed when no real asset exists yet. */
  seed?: string;
  accent?: boolean;
};

/**
 * Static image with AVIF/WebP fallbacks, reserved aspect box (CLS-safe) and
 * lazy loading. When no `src`/`sources` are supplied it renders deterministic
 * generated art so placeholders never look broken.
 */
export function Media({
  src,
  sources,
  alt,
  width,
  height,
  seed,
  accent,
  className,
  priority,
}: MediaSource & { className?: string; priority?: boolean }) {
  const ratio = `${width} / ${height}`;

  if (!src && !sources) {
    return (
      <div className={cn('relative overflow-hidden bg-raised', className)} style={{ aspectRatio: ratio }}>
        <GeneratedArt seed={seed ?? alt} accent={accent} />
      </div>
    );
  }

  return (
    <div className={cn('relative overflow-hidden bg-raised', className)} style={{ aspectRatio: ratio }}>
      <picture>
        {sources?.map((s) => (
          <source key={s.type} srcSet={s.srcSet} type={s.type} />
        ))}
        {src && !sources && <source srcSet={`${src}.avif`} type="image/avif" />}
        {src && !sources && <source srcSet={`${src}.webp`} type="image/webp" />}
        <img
          src={src ? `${src}.jpg` : sources?.[sources.length - 1]?.srcSet}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className="h-full w-full object-cover"
        />
      </picture>
    </div>
  );
}
