import { formatIndex } from '@/lib/utils';
import { MotionText } from './MotionText';
import { Reveal } from './Reveal';

/**
 * Editorial section header: mono index + label on one line, oversized title
 * below. Used by every top-level section for a consistent rhythm.
 */
export function SectionHeader({
  index,
  label,
  title,
  align = 'left',
  className,
}: {
  index: number;
  label: string;
  title: string[];
  align?: 'left' | 'right';
  className?: string;
}) {
  return (
    <header className={className}>
      <Reveal>
        <div className="flex items-baseline justify-between gap-6 border-t border-line pt-4">
          <span className="label">
            <span className="text-accent">{formatIndex(index)}</span>
            <span className="mx-2 opacity-40">/</span>
            {label}
          </span>
        </div>
      </Reveal>
      <MotionText
        as="h2"
        lines={title}
        className={`mt-6 font-display text-2xl font-medium leading-[1.02] tracking-tighter md:text-3xl ${
          align === 'right' ? 'text-right' : ''
        }`}
      />
    </header>
  );
}
