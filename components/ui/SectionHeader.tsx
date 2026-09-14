import { Reveal } from './Reveal';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  kicker: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({ kicker, title, intro, align = 'left', className }: SectionHeaderProps) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      <Reveal>
        <span className="number-label mb-4 block uppercase text-dim">{kicker}</span>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="font-display text-2xl font-medium tracking-tightest text-balance">{title}</h2>
      </Reveal>
      {intro ? (
        <Reveal delay={0.12}>
          <p className="mt-5 text-lg text-dim text-balance">{intro}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
