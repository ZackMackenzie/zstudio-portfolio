import { cn } from '@/lib/utils';

/**
 * Brand-system specimen — wordmark, type pairing and core palette swatches.
 * Represents identity/branding work, as opposed to a product-UI mockup.
 */

function Swatch({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex flex-1 flex-col overflow-hidden rounded-sm border border-white/10">
      <div className="h-10 w-full sm:h-14" style={{ background: color }} />
      <span className="border-t border-white/10 bg-black/40 px-2 py-1.5 font-mono text-[8px] uppercase tracking-[0.1em] text-white/50">
        {label}
      </span>
    </div>
  );
}

function System() {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-[#08090b] p-5 sm:p-7">
      <div className="flex items-center justify-between">
        <span className="font-display text-lg font-extrabold tracking-tight text-white sm:text-xl">ZSTUDIO®</span>
        <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/40">Brand System</span>
      </div>

      <div className="flex items-end justify-between border-y border-white/10 py-5">
        <span className="font-display text-5xl font-extrabold leading-none text-white sm:text-6xl">Aa</span>
        <div className="text-right font-mono text-[8px] uppercase leading-relaxed tracking-[0.1em] text-white/40">
          <p>Hanken Grotesk</p>
          <p>IBM Plex Mono</p>
        </div>
      </div>

      <div className="flex gap-2">
        <Swatch color="var(--accent-2)" label="Accent 2" />
        <Swatch color="var(--accent)" label="Accent" />
        <Swatch color="var(--paper)" label="Paper" />
        <Swatch color="var(--ink)" label="Ink" />
      </div>
    </div>
  );
}

export function BrandIdentityMockup({ className }: { variant: string; className?: string }) {
  return (
    <div className={cn('h-full w-full overflow-hidden', className)}>
      <System />
    </div>
  );
}
