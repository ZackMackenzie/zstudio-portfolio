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
      return <Meridian />;
    case 2:
      return <Northbank />;
    case 3:
      return <Aurelia />;
    case 4:
      return <Apex />;
    case 5:
      return <Halcyon />;
    case 6:
      return <NoirMaison />;
    case 7:
      return <Lumiere />;
    case 8:
    default:
      return <Fluxpoint />;
  }
}

/* ---------- 1. Meridian — AI SaaS ---------- */
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

/* ---------- 2. Northbank — Fintech SaaS ---------- */
function Northbank() {
  return (
    <g>
      <Defs />
      <rect x={28} y={30} width={168} height={104} rx={14} fill={photoFill} stroke={strokeStrong} />
      <circle cx={50} cy={54} r={9} fill="var(--accent)" opacity={0.85} />
      <circle cx={62} cy={54} r={9} fill="rgba(255,255,255,0.5)" />
      <text x={44} y={110} fontSize={17} fill="#fff" fontFamily="var(--font-mono)" letterSpacing={2}>
        4291 •••• 8830
      </text>
      <text x={44} y={126} fontSize={9} fill="rgba(255,255,255,0.55)" fontFamily="var(--font-mono)">
        NORTHBANK BUSINESS
      </text>
      <text x={220} y={54} fontSize={11} fill="rgba(255,255,255,0.5)" fontFamily="var(--font-sans)">
        Available balance
      </text>
      <text x={220} y={82} fontSize={28} fill="#fff" fontFamily="var(--font-display)" fontWeight={600}>
        $48,204
      </text>
      <line x1={24} y1={168} x2={376} y2={168} stroke={stroke} />
      {['Stripe payout', 'Studio rent', 'Client invoice'].map((label, i) => (
        <g key={label}>
          <text x={24} y={198 + i * 30} fontSize={12} fill="rgba(255,255,255,0.75)" fontFamily="var(--font-sans)">
            {label}
          </text>
          <text
            x={376}
            y={198 + i * 30}
            fontSize={12}
            textAnchor="end"
            fill={i === 1 ? 'rgba(255,255,255,0.5)' : 'var(--accent)'}
            fontFamily="var(--font-mono)"
          >
            {i === 1 ? '-$2,400' : '+$6,120'}
          </text>
        </g>
      ))}
    </g>
  );
}

/* ---------- 3. Aurelia — Luxury Hotel ---------- */
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

/* ---------- 4. Apex — Product film ---------- */
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

/* ---------- 5. Halcyon — Real Estate ---------- */
function Halcyon() {
  return (
    <g>
      <Defs />
      <rect x={0} y={0} width={230} height={300} fill="none" stroke={stroke} />
      {Array.from({ length: 5 }).map((_, i) => (
        <line key={`h${i}`} x1={0} y1={i * 60} x2={230} y2={i * 60} stroke={stroke} strokeDasharray="1 5" />
      ))}
      {Array.from({ length: 4 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 58} y1={0} x2={i * 58} y2={300} stroke={stroke} strokeDasharray="1 5" />
      ))}
      {[
        [40, 60],
        [130, 130],
        [70, 210],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={7} fill="var(--accent)" opacity={0.9} />
          <circle cx={x} cy={y} r={14} fill="none" stroke="var(--accent)" opacity={0.4} />
        </g>
      ))}
      <rect x={250} y={24} width={126} height={252} rx={8} fill={photoFill} stroke={strokeStrong} />
      <rect x={264} y={190} width={98} height={12} rx={2} fill="rgba(255,255,255,0.7)" />
      <rect x={264} y={210} width={70} height={9} rx={2} fill="rgba(255,255,255,0.4)" />
      <text x={264} y={250} fontSize={14} fill="var(--accent)" fontFamily="var(--font-mono)">
        $2,450,000
      </text>
    </g>
  );
}

/* ---------- 6. Noir Maison — Luxury Fashion / Brand ---------- */
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

/* ---------- 7. Lumière — Premium E-commerce ---------- */
function Lumiere() {
  return (
    <g>
      <Defs />
      <rect x={24} y={24} width={168} height={252} rx={6} fill={photoFill} stroke={strokeStrong} />
      <text x={40} y={260} fontSize={12} fill="#fff" fontFamily="var(--font-display)">
        Object No. 04
      </text>
      <text x={40} y={276} fontSize={11} fill="var(--accent)" fontFamily="var(--font-mono)">
        $1,280
      </text>
      {[0, 1].map((row) =>
        [0, 1].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={206 + col * 90}
            y={24 + row * 128}
            width={78}
            height={110}
            rx={5}
            fill={photoFill}
            stroke={stroke}
          />
        ))
      )}
    </g>
  );
}

/* ---------- 8. Fluxpoint — B2B SaaS ---------- */
function Fluxpoint() {
  const cols = [
    { x: 24, label: 'Backlog', n: 4 },
    { x: 152, label: 'In progress', n: 3 },
    { x: 280, label: 'Done', n: 5 },
  ];
  return (
    <g>
      <rect x={24} y={24} width={352} height={30} rx={6} fill="none" stroke={strokeStrong} />
      <text x={40} y={44} fontSize={11} fill="rgba(255,255,255,0.6)" fontFamily="var(--font-mono)">
        ⌘K — JUMP TO...
      </text>
      {cols.map((col) => (
        <g key={col.label}>
          <text x={col.x} y={78} fontSize={10} fill="rgba(255,255,255,0.5)" fontFamily="var(--font-mono)">
            {col.label.toUpperCase()}
          </text>
          {Array.from({ length: col.n }).map((_, i) => (
            <rect
              key={i}
              x={col.x}
              y={90 + i * 34}
              width={92}
              height={24}
              rx={5}
              fill="none"
              stroke={i === 0 && col.label === 'In progress' ? 'var(--accent)' : stroke}
            />
          ))}
        </g>
      ))}
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
