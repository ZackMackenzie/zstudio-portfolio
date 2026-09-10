'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { GeneratedArt } from './GeneratedArt';

/**
 * Autoplaying, muted, looping video for Remotion-rendered motion clips.
 * - preload="none" + IntersectionObserver: nothing downloads until it's near the viewport
 * - plays only while visible, pauses when scrolled away (saves CPU/battery)
 * - webm (VP9) with mp4 (H.264) fallback, poster image, reserved aspect box
 */
export function MediaPlayer({
  id,
  alt,
  width = 1600,
  height = 900,
  className,
  seed,
}: {
  /** Base name of the rendered files in /public/media (no extension). */
  id: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  seed?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { rootMargin: '200px 0px', threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const ratio = `${width} / ${height}`;

  if (failed) {
    return (
      <div className={cn('relative overflow-hidden bg-raised', className)} style={{ aspectRatio: ratio }}>
        <GeneratedArt seed={seed ?? id} accent />
      </div>
    );
  }

  return (
    <div className={cn('relative overflow-hidden bg-raised', className)} style={{ aspectRatio: ratio }}>
      <video
        ref={ref}
        className="h-full w-full object-cover"
        muted
        loop
        playsInline
        preload="none"
        poster={`/media/${id}-poster.jpg`}
        aria-label={alt}
        onError={() => setFailed(true)}
      >
        {inView && (
          <>
            <source src={`/media/${id}.webm`} type="video/webm" />
            <source src={`/media/${id}.mp4`} type="video/mp4" />
          </>
        )}
      </video>
    </div>
  );
}
