import { cn } from '@/lib/utils';

/**
 * Modular carousel/story creative grid — replaces the abstract GeneratedArt
 * wireframe for the "Creative System" case.
 */

const tiles = [
  { bg: 'from-accent to-accent2', label: '01' },
  { bg: 'from-[#0c0d10] to-black', label: '02' },
  { bg: 'from-accent2 to-accent', label: '03' },
  { bg: 'from-[#0c0d10] to-black', label: '04' },
];

function Grid() {
  return (
    <div className="grid h-full grid-cols-2 gap-1.5 p-1.5">
      {tiles.map((t) => (
        <div key={t.label} className={cn('relative flex flex-col justify-between overflow-hidden rounded-sm bg-gradient-to-br p-2.5', t.bg)}>
          <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-white/70">{t.label}</span>
          <span className="font-display text-xs font-medium text-white">Zstudio</span>
        </div>
      ))}
    </div>
  );
}

function Square() {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-accent to-accent2 p-6">
      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/80">Campaign — Q1</span>
      <span className="font-display text-2xl font-medium leading-tight text-white">Design that moves.</span>
    </div>
  );
}

function Story() {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-gradient-to-b from-[#0c0d10] to-black p-4">
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <span key={i} className={cn('h-0.5 flex-1 rounded-full', i === 0 ? 'bg-white/70' : 'bg-white/20')} />
        ))}
      </div>
      <span className="font-display text-lg font-medium leading-tight text-white">New template, same brand.</span>
      <span className="self-start rounded-full bg-accent2 px-3 py-1 font-mono text-[8px] font-medium uppercase tracking-[0.1em] text-black">
        See more
      </span>
    </div>
  );
}

function WhatsAppBanner() {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-[#0c0d10] to-black p-5">
      <div className="flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent2 text-[10px] text-black">✓</span>
        <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-white/50">WhatsApp Business</span>
      </div>
      <div>
        <span className="font-display text-lg font-medium leading-tight text-white">We just launched. 🚀</span>
        <p className="mt-1 max-w-[80%] text-[9px] text-white/50">Tap to see the full offer before it&apos;s gone.</p>
      </div>
      <span className="self-start rounded-full bg-accent2 px-4 py-1.5 font-mono text-[8px] font-medium uppercase tracking-[0.1em] text-black">
        Chat now
      </span>
    </div>
  );
}

function Bento() {
  return (
    <div className="grid h-full w-full grid-cols-2 gap-1.5 p-1.5">
      <div className="row-span-2 flex flex-col justify-between overflow-hidden rounded-sm bg-gradient-to-b from-[#0c0d10] to-black p-3">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent2 text-[9px] text-black">✓</span>
        <div>
          <span className="block font-display text-sm font-medium leading-tight text-white">We just launched. 🚀</span>
          <span className="mt-2 inline-block rounded-full bg-accent2 px-2.5 py-1 font-mono text-[7px] font-medium uppercase tracking-[0.1em] text-black">
            Chat now
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between overflow-hidden rounded-sm bg-gradient-to-br from-accent to-accent2 p-2.5">
        <span className="font-mono text-[7px] uppercase tracking-[0.12em] text-white/80">Carousel</span>
        <span className="font-display text-xs font-medium leading-tight text-white">Design that moves.</span>
      </div>
      <div className="flex flex-col justify-between overflow-hidden rounded-sm bg-gradient-to-b from-[#141518] to-black p-2.5">
        <div className="flex gap-0.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className={cn('h-0.5 flex-1 rounded-full', i === 0 ? 'bg-white/70' : 'bg-white/20')} />
          ))}
        </div>
        <span className="font-mono text-[7px] uppercase tracking-[0.1em] text-white/50">Story ad</span>
      </div>
    </div>
  );
}

export function SocialGridMockup({ variant, className }: { variant: string; className?: string }) {
  return (
    <div className={cn('h-full w-full overflow-hidden', className)}>
      {variant === 'bento' ? (
        <Bento />
      ) : variant === 'square' ? (
        <Square />
      ) : variant === 'story' ? (
        <Story />
      ) : variant === 'whatsapp' ? (
        <WhatsAppBanner />
      ) : (
        <Grid />
      )}
    </div>
  );
}
