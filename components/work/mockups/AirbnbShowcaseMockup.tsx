import { cn } from '@/lib/utils';

/**
 * Luxury direct-booking property card + Apple-style video teaser — replaces
 * the abstract GeneratedArt wireframe for the "Aura Stays" case.
 */

function Listing() {
  return (
    <div className="flex h-full w-full flex-col bg-[#0c0d10]">
      <div className="relative flex-1 bg-gradient-to-br from-accent/40 via-[#141518] to-black">
        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-accent2 backdrop-blur-sm">
          Book direct — save 18%
        </span>
        <div className="absolute bottom-3 left-3 flex gap-1">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className={cn('h-1 w-4 rounded-full', i === 0 ? 'bg-white' : 'bg-white/30')} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-white/10 p-3">
        <div className="min-w-0">
          <span className="block truncate font-display text-sm font-medium text-white">Aura Villa — Ubatuba</span>
          <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-white/40">$420 / night</span>
        </div>
        <span className="shrink-0 rounded-full border border-white/15 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.1em] text-white/70">
          Check dates
        </span>
      </div>
    </div>
  );
}

function Video() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-black">
      <div
        className="absolute inset-0 opacity-70"
        style={{ background: 'radial-gradient(80% 80% at 50% 40%, rgba(47,107,255,0.35), transparent 70%)' }}
      />
      <div className="relative flex flex-col items-center gap-4 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-lg text-white/90 backdrop-blur-sm">
          ▶
        </span>
        <span className="font-display text-xl font-medium tracking-tight text-white sm:text-2xl">Escape the Ordinary.</span>
        <span className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-white/60">0:30 Teaser</span>
      </div>
    </div>
  );
}

export function AirbnbShowcaseMockup({ variant, className }: { variant: string; className?: string }) {
  return <div className={cn('h-full w-full overflow-hidden', className)}>{variant === 'video' ? <Video /> : <Listing />}</div>;
}
