import { cn } from '@/lib/utils';

interface ProjectVisualProps {
  visual: number;
  title: string;
  className?: string;
}

/**
 * Bespoke, code-generated compositions standing in for project screenshots —
 * these are the real deliverable (a demonstration of the studio's visual
 * language), not photographs of a product that doesn't exist.
 */
export function ProjectVisual({ visual, title, className }: ProjectVisualProps) {
  return (
    <div
      className={cn(
        'relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-md border border-line bg-raised',
        className
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(120% 90% at 15% 0%, var(--accent-tint), transparent 60%), radial-gradient(100% 80% at 100% 100%, rgba(255,255,255,0.06), transparent 55%)',
        }}
      />
      <svg
        viewBox="0 0 400 300"
        className="relative h-full w-full"
        role="img"
        aria-label={title}
      >
        <VisualContent variant={visual} />
      </svg>
    </div>
  );
}

function VisualContent({ variant }: { variant: number }) {
  const stroke = 'rgba(255,255,255,0.16)';

  switch (variant) {
    case 1:
      // Lumen — dashboard: card outlines + an ascending accent line chart.
      return (
        <g>
          {[0, 1, 2].map((i) => (
            <rect key={i} x={24 + i * 128} y={24} width={104} height={64} rx={6} fill="none" stroke={stroke} />
          ))}
          <line x1={24} y1={130} x2={376} y2={130} stroke={stroke} />
          {Array.from({ length: 11 }).map((_, i) => (
            <line key={i} x1={24 + i * 32} y1={130} x2={24 + i * 32} y2={276} stroke={stroke} strokeDasharray="2 6" />
          ))}
          <polyline
            points="24,240 56,220 88,232 120,190 152,204 184,160 216,178 248,130 280,150 312,96 344,120 376,70"
            fill="none"
            stroke="var(--accent)"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      );
    case 2:
      // Aura Villa — horizon composition with a simple architectural roofline.
      return (
        <g>
          <line x1={0} y1={190} x2={400} y2={190} stroke={stroke} />
          <path
            d="M40 190 L110 120 L180 190"
            fill="none"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth={2}
          />
          <path d="M100 190 V150 H120 V190" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth={2} />
          <path
            d="M220 190 L320 190 L320 140 L270 108 L220 140 Z"
            fill="none"
            stroke="var(--accent)"
            strokeWidth={2}
          />
          {Array.from({ length: 6 }).map((_, i) => (
            <circle key={i} cx={40 + i * 60} cy={40 + (i % 2) * 10} r={1.5} fill="rgba(255,255,255,0.35)" />
          ))}
        </g>
      );
    case 3:
      // Kroma — rotating radial grid, geometric mark exploration.
      return (
        <g transform="translate(200,150)">
          {[110, 80, 50].map((r) => (
            <circle key={r} r={r} fill="none" stroke={stroke} />
          ))}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            return (
              <line
                key={i}
                x1={0}
                y1={0}
                x2={Math.cos(angle) * 110}
                y2={Math.sin(angle) * 110}
                stroke={stroke}
                strokeDasharray="1 5"
              />
            );
          })}
          <circle r={6} fill="var(--accent)" />
          <path d="M0 -50 A50 50 0 0 1 43 25" fill="none" stroke="var(--accent)" strokeWidth={2.5} />
        </g>
      );
    case 4:
      // Apex — cinematic play composition (used mainly as poster/fallback).
      return (
        <g>
          <rect x={20} y={20} width={360} height={260} rx={4} fill="none" stroke={stroke} />
          {Array.from({ length: 5 }).map((_, i) => (
            <line key={i} x1={20} y1={20 + i * 65} x2={380} y2={20 + i * 65} stroke={stroke} strokeDasharray="1 6" />
          ))}
          <circle cx={200} cy={150} r={34} fill="none" stroke="var(--accent)" strokeWidth={2} />
          <path d="M191 134 L216 150 L191 166 Z" fill="var(--accent)" />
        </g>
      );
    case 5:
      // Northbound — single funnel path toward one CTA.
      return (
        <g>
          <rect x={150} y={40} width={100} height={26} rx={4} fill="none" stroke={stroke} />
          <path d="M175 66 L175 100" stroke={stroke} markerEnd="url(#arrow)" />
          <rect x={130} y={100} width={140} height={26} rx={4} fill="none" stroke={stroke} />
          <path d="M200 126 L200 160" stroke={stroke} />
          <rect x={110} y={160} width={180} height={30} rx={6} fill="var(--accent)" opacity={0.9} />
          <text x={200} y={180} textAnchor="middle" fontSize={11} fill="#08090a" fontFamily="var(--font-mono)">
            GET STARTED
          </text>
          <defs>
            <marker id="arrow" markerWidth={6} markerHeight={6} refX={3} refY={3} orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill={stroke} />
            </marker>
          </defs>
        </g>
      );
    case 6:
    default:
      // Studio System — bento grid of ad-format tiles.
      return (
        <g>
          <rect x={24} y={24} width={170} height={252} rx={6} fill="none" stroke={stroke} />
          <rect x={206} y={24} width={170} height={120} rx={6} fill="none" stroke="var(--accent)" strokeWidth={1.5} />
          <rect x={206} y={156} width={80} height={120} rx={6} fill="none" stroke={stroke} />
          <rect x={296} y={156} width={80} height={120} rx={6} fill="none" stroke={stroke} />
          <circle cx={109} cy={150} r={26} fill="none" stroke="var(--accent)" strokeWidth={1.5} />
        </g>
      );
  }
}
