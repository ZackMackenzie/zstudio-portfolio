import { cn } from '@/lib/utils';
import { GeneratedArt } from './GeneratedArt';
import { DashboardMockup } from '@/components/work/mockups/DashboardMockup';
import { AirbnbShowcaseMockup } from '@/components/work/mockups/AirbnbShowcaseMockup';
import { BrowserLandingMockup } from '@/components/work/mockups/BrowserLandingMockup';
import { SocialGridMockup } from '@/components/work/mockups/SocialGridMockup';
import type { MockupRef } from '@/content/projects';

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
  /** Code-rendered UI mockup — takes priority over the abstract GeneratedArt fallback. */
  mockup?: MockupRef;
};

const mockupComponents = {
  dashboard: DashboardMockup,
  airbnb: AirbnbShowcaseMockup,
  browser: BrowserLandingMockup,
  social: SocialGridMockup,
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
  mockup,
  className,
  priority,
}: MediaSource & { className?: string; priority?: boolean }) {
  const ratio = `${width} / ${height}`;

  if (!src && !sources && mockup) {
    const MockupComponent = mockupComponents[mockup.kind];
    return (
      <div className={cn('relative overflow-hidden bg-raised', className)} style={{ aspectRatio: ratio }} role="img" aria-label={alt}>
        <MockupComponent variant={mockup.variant} />
      </div>
    );
  }

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
