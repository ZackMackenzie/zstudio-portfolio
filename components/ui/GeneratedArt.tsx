import { seededRandom } from '@/lib/utils';
import { cn } from '@/lib/utils';

/**
 * Deterministic abstract artwork derived from a string seed. Used in place of
 * stock imagery for projects/experiments that don't have real visuals yet.
 * Renders as inline SVG (a few hundred bytes), theme-aware, no network.
 */
export function GeneratedArt({
  seed,
  className,
  variant = 'a',
  accent = false,
}: {
  seed: string;
  className?: string;
  variant?: 'a' | 'b' | 'c';
  accent?: boolean;
}) {
  const rand = seededRandom(seed + variant);
  const W = 1200;
  const H = 800;
  const uid = seed.replace(/[^a-z0-9]/gi, '').slice(0, 10) + variant;

  const r = (min: number, max: number) => min + rand() * (max - min);
  const grid = Math.round(r(5, 9));
  const rot = r(-12, 12);
  const cx = r(0.28, 0.72) * W;
  const cy = r(0.28, 0.72) * H;
  const rad = r(0.16, 0.32) * W;

  const lines = Array.from({ length: grid }, (_, i) => {
    const t = i / (grid - 1);
    return { x: t * W, y: t * H, w: r(0.4, 1) };
  });

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
      className={cn('h-full w-full', className)}
    >
      <defs>
        <linearGradient id={`g-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0b0c0e" />
          <stop offset="1" stopColor="#000000" />
        </linearGradient>
        <radialGradient id={`r-${uid}`} cx="0%" cy="100%" r="120%">
          <stop offset="0" stopColor="var(--accent-2)" stopOpacity={accent ? 0.55 : 0.32} />
          <stop offset="0.28" stopColor="var(--accent)" stopOpacity={accent ? 0.4 : 0.22} />
          <stop offset="0.62" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width={W} height={H} fill={`url(#g-${uid})`} />
      <rect width={W} height={H} fill={`url(#r-${uid})`} />

      <g stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1">
        {lines.map((l, i) => (
          <line key={`h${i}`} x1="0" y1={l.y} x2={W} y2={l.y} />
        ))}
        {lines.map((l, i) => (
          <line key={`v${i}`} x1={l.x} y1="0" x2={l.x} y2={H} />
        ))}
      </g>

      <g transform={`rotate(${rot} ${cx} ${cy})`}>
        <rect
          x={cx - rad}
          y={cy - rad}
          width={rad * 2}
          height={rad * 2}
          fill="none"
          stroke={accent ? 'var(--accent)' : '#ffffff'}
          strokeOpacity={accent ? 0.7 : 0.14}
          strokeWidth="1.5"
        />
        <circle
          cx={cx}
          cy={cy}
          r={rad * r(0.7, 1.1)}
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.12"
          strokeWidth="1.5"
        />
        <line
          x1={cx - rad * 1.6}
          y1={cy}
          x2={cx + rad * 1.6}
          y2={cy}
          stroke={accent ? 'var(--accent)' : '#ffffff'}
          strokeOpacity={accent ? 0.5 : 0.1}
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}
