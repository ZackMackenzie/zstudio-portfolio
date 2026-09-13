import { cn } from '@/lib/utils';

/**
 * A modern browser-window frame around a real landing-page layout —
 * replaces the abstract GeneratedArt wireframe for the "Launch Page" case.
 */

function BrowserChrome() {
  return (
    <div className="flex items-center gap-3 border-b border-white/10 bg-[#0c0d10] px-3 py-2">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
      </div>
      <div className="flex h-5 flex-1 items-center rounded-full border border-white/10 bg-black/40 px-3 font-mono text-[9px] text-white/40">
        seuproduto.com
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 py-8 text-center">
      <span className="rounded-full border border-accent2/30 bg-accent2/10 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.14em] text-accent2">
        New
      </span>
      <p className="max-w-xs font-display text-lg font-medium leading-tight text-white sm:text-xl">
        Launch your product{' '}
        <span className="bg-gradient-to-r from-accent2 to-accent bg-clip-text text-transparent">with impact.</span>
      </p>
      <div className="mt-2 flex gap-2">
        <span className="rounded-full bg-accent px-4 py-1.5 font-mono text-[9px] font-medium uppercase tracking-[0.1em] text-white shadow-[0_0_20px_rgba(47,107,255,0.5)]">
          Get started
        </span>
        <span className="rounded-full border border-white/15 px-4 py-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-white/60">
          View demo
        </span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {['+40%', '<1s', '99.9%'].map((v) => (
          <div key={v} className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2">
            <span className="block font-display text-sm font-medium text-white">{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Proof() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 py-8">
      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/35">Trusted by product teams</span>
      <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 opacity-50">
        {['Acme', 'Northwind', 'Globex', 'Initech'].map((n) => (
          <span key={n} className="font-display text-sm font-medium tracking-tight text-white">
            {n}
          </span>
        ))}
      </div>
      <div className="mt-2 max-w-sm rounded-md border border-white/10 bg-white/[0.03] p-4 text-center">
        <p className="font-serif text-sm italic text-white/70">&ldquo;From first draft to live in two weeks.&rdquo;</p>
      </div>
    </div>
  );
}

function Pricing() {
  const plans = [
    { name: 'Start', price: '—', featured: false },
    { name: 'Studio', price: 'Popular', featured: true },
    { name: 'Scale', price: '—', featured: false },
  ];
  return (
    <div className="flex flex-1 items-center justify-center gap-3 px-6 py-8">
      {plans.map((p) => (
        <div
          key={p.name}
          className={cn(
            'flex w-24 flex-col items-center gap-2 rounded-md border px-3 py-4',
            p.featured ? 'border-accent2/50 bg-accent2/10' : 'border-white/10 bg-white/[0.03]',
          )}
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-white/60">{p.name}</span>
          <span className={cn('font-display text-xs font-medium', p.featured ? 'text-accent2' : 'text-white/50')}>{p.price}</span>
          <span className="h-1 w-8 rounded-full bg-white/15" />
        </div>
      ))}
    </div>
  );
}

function Funnel() {
  const rows = [
    { label: 'Setup time', basic: '—', pro: '2 min' },
    { label: 'Priority support', basic: '—', pro: '✓' },
    { label: 'Bonus kit', basic: '—', pro: '✓' },
  ];
  return (
    <div className="flex flex-1 flex-col gap-3 px-5 py-5">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 rounded-full bg-accent2/15 px-3 py-1.5 text-accent2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent2" />
          <span className="font-mono text-[9px] uppercase tracking-[0.1em]">Offer ends in 12:59</span>
        </div>
        <div className="flex items-center gap-1 rounded-full border border-white/10 px-2.5 py-1.5">
          <span className="font-mono text-[9px] font-medium text-accent2">99</span>
          <span className="font-mono text-[7px] uppercase tracking-[0.08em] text-white/40">Lighthouse</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1 text-accent2">
        {'★★★★★'.split('').map((s, i) => (
          <span key={i} className="text-[10px]">
            {s}
          </span>
        ))}
        <span className="ml-1 font-mono text-[9px] text-white/40">2,400+ users</span>
      </div>
      <div className="overflow-hidden rounded-md border border-white/10">
        <div className="grid grid-cols-3 gap-2 border-b border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.1em] text-white/40">
          <span />
          <span className="text-center">Basic</span>
          <span className="text-center text-accent2">Pro</span>
        </div>
        {rows.map((r) => (
          <div key={r.label} className="grid grid-cols-3 gap-2 border-b border-white/[0.06] px-3 py-2 text-[9px] text-white/70 last:border-0">
            <span className="truncate">{r.label}</span>
            <span className="text-center text-white/30">{r.basic}</span>
            <span className="text-center text-accent2">{r.pro}</span>
          </div>
        ))}
      </div>
      <span className="mt-auto self-center rounded-full bg-accent2 px-6 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-black shadow-[0_0_24px_rgba(52,225,255,0.5)]">
        Claim your spot →
      </span>
    </div>
  );
}

export function BrowserLandingMockup({ variant, className }: { variant: string; className?: string }) {
  return (
    <div className={cn('flex h-full w-full flex-col bg-[#08090b]', className)}>
      <BrowserChrome />
      {variant === 'funnel' ? <Funnel /> : variant === 'pricing' ? <Pricing /> : variant === 'proof' ? <Proof /> : <Hero />}
    </div>
  );
}
