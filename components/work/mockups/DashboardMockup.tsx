import { cn } from '@/lib/utils';

/**
 * Rich, code-rendered SaaS dashboard UI — replaces the abstract GeneratedArt
 * wireframe for the "Product Platform" case. Pure HTML/CSS (Tailwind), no
 * images. Three variants share one visual language so cover/design/gallery
 * slots read as different screens of the same product, not repeats.
 */

// Math.sin/cos aren't guaranteed bit-identical across JS engines (Node's SSR
// pass vs. the browser's), which produced real hydration mismatches on these
// SVG points — round to 2 decimals so the tiny cross-platform epsilon can't surface.
const sparkPoints = (seed: number) => {
  const pts = Array.from({ length: 8 }, (_, i) => {
    const n = Math.sin(seed + i * 1.7) * 0.5 + 0.5;
    return `${i * 14},${(28 - n * 24).toFixed(2)}`;
  });
  return pts.join(' ');
};

function Sidebar() {
  return (
    <div className="hidden w-12 shrink-0 flex-col items-center gap-4 border-r border-white/10 bg-black/30 py-4 sm:flex">
      <div className="h-4 w-4 rounded-[3px] bg-accent2" />
      {[0, 1, 2, 3, 4].map((i) => (
        <div key={i} className={cn('h-2.5 w-2.5 rounded-[2px]', i === 1 ? 'bg-accent' : 'bg-white/15')} />
      ))}
    </div>
  );
}

function TopBar() {
  return (
    <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 sm:px-5">
      <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-white/40">
        <span>Workspace</span>
        <span className="text-white/20">/</span>
        <span className="text-white/70">Overview</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden h-5 w-24 rounded-full border border-white/10 bg-white/5 sm:block" />
        <div className="h-5 w-5 rounded-full bg-gradient-to-br from-accent2 to-accent" />
      </div>
    </div>
  );
}

function MetricCard({ label, value, delta, seed, big }: { label: string; value: string; delta: string; seed: number; big?: boolean }) {
  return (
    <div className={cn('flex flex-col justify-between rounded-md border border-white/10 bg-white/[0.03] p-3', big && 'p-5')}>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/45">{label}</span>
        <span className="rounded-full bg-accent2/15 px-1.5 py-0.5 font-mono text-[8px] text-accent2">{delta}</span>
      </div>
      <span className={cn('mt-2 font-display font-medium text-white', big ? 'text-3xl' : 'text-lg')}>{value}</span>
      <svg viewBox="0 0 98 28" className={cn('mt-2 text-accent2', big ? 'h-10' : 'h-6')} fill="none">
        <polyline points={sparkPoints(seed)} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
      </svg>
    </div>
  );
}

function StatusBadge({ status }: { status: 'Active' | 'Pending' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em]',
        status === 'Active' ? 'bg-accent2/15 text-accent2' : 'bg-white/10 text-white/50',
      )}
    >
      <span className={cn('h-1.5 w-1.5 rounded-full', status === 'Active' ? 'bg-accent2' : 'bg-white/40')} />
      {status}
    </span>
  );
}

const rows: { name: string; status: 'Active' | 'Pending'; value: string }[] = [
  { name: 'Acme Corp', status: 'Active', value: '$4,200' },
  { name: 'Northwind', status: 'Pending', value: '$1,050' },
  { name: 'Globex', status: 'Active', value: '$8,760' },
  { name: 'Initech', status: 'Active', value: '$2,340' },
  { name: 'Umbrella', status: 'Pending', value: '$690' },
];

export function DashboardMockup({ variant, className }: { variant: string; className?: string }) {
  return (
    <div className={cn('flex h-full w-full bg-[#08090b] font-sans', className)}>
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar />

        {variant === 'table' ? (
          <div className="flex-1 overflow-hidden p-4 sm:p-6">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-display text-sm font-medium text-white sm:text-base">Customers</span>
              <div className="hidden gap-2 sm:flex">
                <div className="h-5 w-16 rounded border border-white/10 bg-white/5" />
                <div className="h-5 w-5 rounded bg-accent/80" />
              </div>
            </div>
            <div className="overflow-hidden rounded-md border border-white/10">
              <div className="grid grid-cols-[1fr_auto_auto] gap-3 border-b border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.12em] text-white/40 sm:px-4">
                <span>Customer</span>
                <span>Status</span>
                <span className="text-right">Value</span>
              </div>
              {rows.map((r) => (
                <div key={r.name} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b border-white/[0.06] px-3 py-2.5 text-xs text-white/80 last:border-0 sm:px-4">
                  <span className="truncate">{r.name}</span>
                  <StatusBadge status={r.status} />
                  <span className="text-right font-mono text-white/60">{r.value}</span>
                </div>
              ))}
            </div>
          </div>
        ) : variant === 'metric' ? (
          <div className="flex flex-1 items-center justify-center p-6">
            <div className="w-full max-w-xs">
              <MetricCard label="MRR" value="$48.2k" delta="+12.4%" seed={2.1} big />
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-hidden p-4 sm:p-6">
            <div className="grid grid-cols-3 gap-3">
              <MetricCard label="MRR" value="$48.2k" delta="+12.4%" seed={1.3} />
              <MetricCard label="Conversion" value="3.8%" delta="+0.6%" seed={3.7} />
              <MetricCard label="Active users" value="1,204" delta="+81" seed={5.2} />
            </div>
            <div className="mt-3 flex-1 rounded-md border border-white/10 bg-white/[0.03] p-4">
              <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/45">Revenue — 30 days</span>
              <svg viewBox="0 0 280 60" className="mt-3 h-16 w-full text-accent" fill="none">
                <polyline
                  points="0,45 30,38 60,42 90,28 120,32 150,18 180,24 210,12 240,16 280,4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polyline
                  points="0,45 30,38 60,42 90,28 120,32 150,18 180,24 210,12 240,16 280,4 280,60 0,60"
                  fill="url(#dash-grad)"
                  stroke="none"
                  opacity="0.25"
                />
                <defs>
                  <linearGradient id="dash-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="var(--accent)" />
                    <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
