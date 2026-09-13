'use client';

import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * CSS-only infinite marquee. Content is duplicated once; the track translates
 * -50% on loop so the seam is invisible. Pauses on hover; frozen for
 * reduced-motion users (animation disabled globally in globals.css).
 */
export function Marquee({
  children,
  className,
  reverse,
  durationSec = 40,
  separator = '—',
}: {
  children: ReactNode[];
  className?: string;
  reverse?: boolean;
  durationSec?: number;
  separator?: ReactNode;
}) {
  const row = (
    <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={false}>
      {children.map((child, i) => (
        <span key={i} className="flex items-center gap-10">
          {child}
          <span className="text-dim">{separator}</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn('group relative flex w-full overflow-hidden', className)}>
      <div
        className="flex w-max animate-marquee group-hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${durationSec}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {row}
        <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden>
          {children.map((child, i) => (
            <span key={i} className="flex items-center gap-10">
              {child}
              <span className="text-dim">{separator}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
