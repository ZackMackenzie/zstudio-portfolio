'use client';

import { useRef, useState } from 'react';
import { useReducedMotionSafe } from '@/lib/hooks/useReducedMotionSafe';
import { cn } from '@/lib/utils';

interface MediaPlayerProps {
  src: string;
  webmSrc?: string;
  poster: string;
  label: string;
  className?: string;
}

export function MediaPlayer({ src, webmSrc, poster, label, className }: MediaPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotionSafe();
  const [playing, setPlaying] = useState(!reduced);
  const [failed, setFailed] = useState(false);

  function toggle() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  if (failed) {
    return (
      <div className={cn('relative aspect-video w-full overflow-hidden rounded-md border border-line bg-raised', className)}>
        <img src={poster} alt={label} className="h-full w-full object-cover" />
      </div>
    );
  }

  return (
    <div className={cn('group relative aspect-video w-full overflow-hidden rounded-md border border-line bg-raised', className)}>
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        poster={poster}
        autoPlay={!reduced}
        muted
        loop
        playsInline
        aria-label={label}
        onError={() => setFailed(true)}
      >
        <source src={webmSrc ?? src} type="video/webm" />
        <source src={src} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={toggle}
        data-cursor-hover
        aria-label={playing ? 'Pause video' : 'Play video'}
        className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white opacity-0 backdrop-blur-sm transition-opacity duration-400 group-hover:opacity-100 focus-visible:opacity-100"
      >
        {playing ? (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <rect x="1" width="3.5" height="12" />
            <rect x="7" width="3.5" height="12" />
          </svg>
        ) : (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M0 0 L12 6 L0 12 Z" />
          </svg>
        )}
      </button>
    </div>
  );
}
