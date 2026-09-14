import { cn } from '@/lib/utils';

interface ProjectVisualProps {
  visual: number;
  title: string;
  className?: string;
  /** 'primary' = the full card/hero shot. 'detail' / 'mobile' = secondary shots for the case-study gallery. */
  variant?: 'primary' | 'detail' | 'mobile';
}

/**
 * Bespoke, code-generated compositions standing in for project screenshots —
 * these are the real deliverable (a demonstration of the studio's visual
 * language), not photographs of a product that doesn't exist.
 */
export function ProjectVisual({ visual, title, className, variant = 'primary' }: ProjectVisualProps) {
  if (variant === 'mobile') {
    return (
      <div
        className={cn(
          'relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-md border border-line bg-raised',
          className
        )}
      >
        <VisualBackdrop />
        <div className="relative h-[92%] w-[46%] overflow-hidden rounded-[22px] border-[3px] border-white/15 bg-bg shadow-2xl">
          <svg viewBox="0 0 180 390" className="h-full w-full" role="img" aria-label={`${title} — mobile`}>
            <VisualContent variant={visual} frame="mobile" />
          </svg>
        </div>
      </div>
    );
  }

  const viewBox = variant === 'detail' ? '60 40 220 180' : '0 0 400 300';

  return (
    <div
      className={cn(
        'relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-md border border-line bg-raised',
        className
      )}
    >
      <VisualBackdrop />
      <svg viewBox={viewBox} className="relative h-full w-full" role="img" aria-label={title}>
        <VisualContent variant={visual} frame="full" />
      </svg>
    </div>
  );
}

function VisualBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-70"
      style={{
        background:
          'radial-gradient(120% 90% at 15% 0%, var(--accent-tint), transparent 60%), radial-gradient(100% 80% at 100% 100%, rgba(255,255,255,0.06), transparent 55%)',
      }}
    />
  );
}

const stroke = 'rgba(255,255,255,0.16)';
const strokeStrong = 'rgba(255,255,255,0.4)';
const photoFill = 'url(#photoGrad)';

function Defs() {
  return (
    <defs>
      <linearGradient id="photoGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="rgba(255,255,255,0.09)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
      </linearGradient>
    </defs>
  );
}

function VisualContent({ variant, frame }: { variant: number; frame: 'full' | 'mobile' }) {
  if (frame === 'mobile') return <MobileContent variant={variant} />;

  switch (variant) {
    case 1:
      return <Aurelia />;
    case 2:
      return <Meridian />;
    case 3:
      return <NoirMaison />;
    case 4:
      return <Apex />;
    case 5:
      return <Verve />;
    case 6:
    default:
      return <Ascent />;
  }
}

/* ---------- 1. Aurelia — Websites ---------- */
function Aurelia() {
  return (
    <g>
      <Defs />
      <rect x={0} y={0} width={400} height={240} fill={photoFill} />
      <path d="M120 240 V150 A80 80 0 0 1 280 150 V240" fill="none" stroke={strokeStrong} strokeWidth={1.5} />
      <line x1={0} y1={240} x2={400} y2={240} stroke={stroke} />
      <text x={200} y={40} textAnchor="middle" fontSize={22} fill="#fff" fontFamily="var(--font-display)" letterSpacing={4}>
        AURELIA
      </text>
      <rect x={32} y={260} width={336} height={26} rx={13} fill="none" stroke={stroke} />
      <text x={48} y={277} fontSize={10} fill="rgba(255,255,255,0.6)" fontFamily="var(--font-mono)">
        CHECK-IN — CHECK-OUT
      </text>
      <text x={352} y={277} textAnchor="end" fontSize={10} fill="var(--accent)" fontFamily="var(--font-mono)">
        BOOK →
      </text>
    </g>
  );
}

/* ---------- 2. Meridian — SaaS / Product ---------- */
function Meridian() {
  return (
    <g>
      <Defs />
      <rect x={24} y={24} width={252} height={252} rx={8} fill={photoFill} stroke={stroke} />
      <line x1={24} y1={70} x2={276} y2={70} stroke={stroke} />
      <circle cx={44} cy={48} r={4} fill="var(--accent)" />
      <text x={56} y={52} fontSize={11} fill="rgba(255,255,255,0.8)" fontFamily="var(--font-mono)">
        AI SUMMARY
      </text>
      <text x={44} y={100} fontSize={22} fill="#fff" fontFamily="var(--font-display)" fontWeight={600}>
        Revenue is up 12%
      </text>
      <text x={44} y={122} fontSize={11} fill="rgba(255,255,255,0.5)" fontFamily="var(--font-sans)">
        vs. last week — driven mostly by new SaaS signups.
      </text>
      <polyline
        points="44,220 84,200 124,214 164,168 204,188 244,140"
        fill="none"
        stroke="var(--accent)"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[44, 84, 124, 164, 204, 244].map((x, i) => (
        <circle key={x} cx={x} cy={[220, 200, 214, 168, 188, 140][i]} r={2.5} fill="var(--accent)" />
      ))}
      <rect x={296} y={24} width={80} height={252} rx={8} fill="none" stroke={stroke} />
      {Array.from({ length: 4 }).map((_, i) => (
        <rect key={i} x={310} y={44 + i * 40} width={20} height={20} rx={5} fill={i === 0 ? 'var(--accent)' : stroke} />
      ))}
    </g>
  );
}

/* ---------- 3. Noir Maison — Brand Identity ---------- */
function NoirMaison() {
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
      <text
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={34}
        fill="#fff"
        fontFamily="var(--font-display)"
        fontWeight={600}
        letterSpacing={1}
      >
        NM
      </text>
      <path d="M0 -50 A50 50 0 0 1 43 25" fill="none" stroke="var(--accent)" strokeWidth={2.5} />
    </g>
  );
}

/* ---------- 4. Apex — Motion / Film ---------- */
function Apex() {
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
}

/* ---------- 5. Verve — Creative & Ads ---------- */
function Verve() {
  return (
    <g>
      <Defs />
      <rect x={24} y={24} width={170} height={252} rx={6} fill={photoFill} stroke={strokeStrong} />
      <path d="M24 130 L194 60" stroke="var(--accent)" strokeWidth={1.5} opacity={0.6} />
      <path d="M24 190 L194 120" stroke="var(--accent)" strokeWidth={1.5} opacity={0.35} />
      <text x={40} y={250} fontSize={12} fill="#fff" fontFamily="var(--font-display)" fontWeight={600}>
        VERVE
      </text>
      <rect x={206} y={24} width={78} height={78} rx={6} fill={photoFill} stroke={stroke} />
      <text x={216} y={92} fontSize={9} fill="rgba(255,255,255,0.6)" fontFamily="var(--font-mono)">
        1:1
      </text>
      <rect x={296} y={24} width={80} height={120} rx={6} fill={photoFill} stroke={stroke} />
      <text x={306} y={136} fontSize={9} fill="rgba(255,255,255,0.6)" fontFamily="var(--font-mono)">
        9:16
      </text>
      <rect x={206} y={114} width={170} height={80} rx={6} fill="none" stroke={stroke} />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={214 + i * 55} y={122} width={48} height={64} rx={4} fill={photoFill} stroke={stroke} />
      ))}
      <rect x={206} y={206} width={170} height={70} rx={6} fill="rgba(58,91,255,0.1)" stroke="var(--accent)" strokeWidth={1.2} />
      <circle cx={228} cy={241} r={12} fill="none" stroke="var(--accent)" strokeWidth={1.5} />
      <path d="M224 236 L234 241 L224 246 Z" fill="var(--accent)" />
      <text x={248} y={245} fontSize={9} fill="rgba(255,255,255,0.7)" fontFamily="var(--font-mono)">
        MOTION CUT
      </text>
    </g>
  );
}

/* ---------- 6. Ascent — Funnels ---------- */
function Ascent() {
  const steps = [
    { y: 24, w: 200, label: 'AD' },
    { y: 82, w: 250, label: 'LANDING' },
    { y: 140, w: 300, label: 'OFFER' },
    { y: 198, w: 350, label: 'CTA' },
  ];
  return (
    <g>
      {steps.map((step, i) => (
        <g key={step.label}>
          <rect
            x={200 - step.w / 2}
            y={step.y}
            width={step.w}
            height={40}
            rx={6}
            fill="none"
            stroke={i === steps.length - 1 ? 'var(--accent)' : stroke}
            strokeWidth={i === steps.length - 1 ? 1.5 : 1}
          />
          <text
            x={200}
            y={step.y + 25}
            textAnchor="middle"
            fontSize={11}
            fill={i === steps.length - 1 ? 'var(--accent)' : 'rgba(255,255,255,0.6)'}
            fontFamily="var(--font-mono)"
            letterSpacing={1}
          >
            {step.label}
          </text>
          {i < steps.length - 1 ? (
            <path
              d={`M200 ${step.y + 40} L200 ${steps[i + 1].y}`}
              stroke={stroke}
              strokeWidth={1}
              markerEnd="url(#ascentArrow)"
            />
          ) : null}
        </g>
      ))}
      <rect x={140} y={256} width={120} height={30} rx={15} fill="var(--accent)" />
      <text x={200} y={276} textAnchor="middle" fontSize={10} fill="#08090a" fontFamily="var(--font-mono)" fontWeight={600}>
        CONVERTED
      </text>
      <defs>
        <marker id="ascentArrow" markerWidth={6} markerHeight={6} refX={3} refY={3} orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={stroke} />
        </marker>
      </defs>
    </g>
  );
}

/* ---------- Simplified mobile-frame renderings ---------- */
function MobileContent({ variant }: { variant: number }) {
  const accentIdx = variant % 3;
  return (
    <g>
      <Defs />
      <rect x={0} y={0} width={180} height={60} fill="none" stroke={stroke} />
      <circle cx={20} cy={30} r={6} fill="var(--accent)" />
      <rect x={40} y={24} width={90} height={10} rx={2} fill="rgba(255,255,255,0.4)" />
      {Array.from({ length: 4 }).map((_, i) => (
        <rect
          key={i}
          x={14}
          y={80 + i * 72}
          width={152}
          height={58}
          rx={8}
          fill={i === accentIdx ? 'rgba(58,91,255,0.12)' : photoFill}
          stroke={i === accentIdx ? 'var(--accent)' : stroke}
        />
      ))}
    </g>
  );
}
