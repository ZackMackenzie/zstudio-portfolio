import { cn } from '@/lib/utils';

/**
 * Style-guide visuals for the "Identity System" case — color palette with
 * legible hex codes, a type specimen, and brand applications (business
 * card + mobile screen). Replaces the abstract GeneratedArt wireframe.
 */

const swatches = [
  { name: 'Ink', hex: '#0A0A0B', fg: '#F5F6F7' },
  { name: 'Accent', hex: '#2F6BFF', fg: '#FFFFFF' },
  { name: 'Accent 2', hex: '#34E1FF', fg: '#0A0A0B' },
  { name: 'Paper', hex: '#F3F4F6', fg: '#0A0A0B' },
  { name: 'Line', hex: '#1B1C1F', fg: '#9AA0A8' },
];

function Palette() {
  return (
    <div className="grid h-full grid-cols-5">
      {swatches.map((s) => (
        <div key={s.hex} className="flex flex-col justify-end p-3" style={{ backgroundColor: s.hex }}>
          <span className="font-mono text-[9px] uppercase tracking-[0.1em]" style={{ color: s.fg, opacity: 0.75 }}>
            {s.name}
          </span>
          <span className="font-mono text-[10px] font-medium" style={{ color: s.fg }}>
            {s.hex}
          </span>
        </div>
      ))}
    </div>
  );
}

function TypeScale() {
  const sizes = [
    { label: 'Display', size: 'text-3xl', sample: 'Aa' },
    { label: 'Heading', size: 'text-xl', sample: 'Aa' },
    { label: 'Body', size: 'text-sm', sample: 'Aa' },
    { label: 'Mono', size: 'text-xs font-mono', sample: '01/04' },
  ];
  return (
    <div className="flex h-full flex-col justify-center gap-4 bg-[#08090b] p-6">
      {sizes.map((s) => (
        <div key={s.label} className="flex items-baseline gap-4 border-b border-white/10 pb-3 last:border-0">
          <span className={cn('font-display font-medium text-white', s.size)}>{s.sample}</span>
          <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/40">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

function Apply() {
  return (
    <div className="flex h-full items-center justify-center gap-6 bg-[#08090b] p-6">
      <div className="flex h-24 w-40 flex-col justify-between rounded-md border border-white/15 bg-gradient-to-br from-[#0c0d10] to-black p-3 shadow-lg">
        <span className="font-display text-sm font-medium text-white">Zstudio</span>
        <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-white/40">Digital Design Studio</span>
      </div>
      <div className="flex h-32 w-16 flex-col overflow-hidden rounded-lg border border-white/15 bg-black shadow-lg">
        <div className="flex-1 bg-gradient-to-b from-accent2/30 to-transparent" />
        <div className="space-y-1 p-1.5">
          <div className="h-1 w-full rounded-full bg-white/20" />
          <div className="h-1 w-2/3 rounded-full bg-white/10" />
        </div>
      </div>
    </div>
  );
}

export function BrandSystemMockup({ variant, className }: { variant: string; className?: string }) {
  return (
    <div className={cn('h-full w-full overflow-hidden', className)}>
      {variant === 'type' ? <TypeScale /> : variant === 'apply' ? <Apply /> : <Palette />}
    </div>
  );
}
