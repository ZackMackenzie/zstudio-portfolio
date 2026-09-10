import { AbsoluteFill } from 'remotion';
import { theme } from '../theme';

export function Grid({ cells = 8, opacity = 1 }: { cells?: number; opacity?: number }) {
  return (
    <AbsoluteFill style={{ opacity }}>
      <svg width="100%" height="100%" style={{ position: 'absolute' }}>
        {Array.from({ length: cells + 1 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1="0"
            y1={`${(i / cells) * 100}%`}
            x2="100%"
            y2={`${(i / cells) * 100}%`}
            stroke={theme.line}
            strokeWidth={1}
          />
        ))}
        {Array.from({ length: cells + 1 }).map((_, i) => (
          <line
            key={`v${i}`}
            x1={`${(i / cells) * 100}%`}
            y1="0"
            x2={`${(i / cells) * 100}%`}
            y2="100%"
            stroke={theme.line}
            strokeWidth={1}
          />
        ))}
      </svg>
    </AbsoluteFill>
  );
}
