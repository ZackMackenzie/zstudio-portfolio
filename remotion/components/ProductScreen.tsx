import { interpolate, useCurrentFrame } from 'remotion';
import { theme } from '../theme';

interface ProductScreenProps {
  variant?: 'dashboard' | 'landing';
}

/** Abstract product UI — cards, chart, nav rail — built from the same tokens as the live site. */
export function ProductScreen({ variant = 'dashboard' }: ProductScreenProps) {
  const frame = useCurrentFrame();
  const chartProgress = interpolate(frame, [0, 60], [0, 1], { extrapolateRight: 'clamp' });

  if (variant === 'landing') {
    return (
      <div style={{ width: '100%', height: '100%', background: theme.bg, padding: 28 }}>
        <div style={{ width: '40%', height: 14, background: theme.text, opacity: 0.9, marginBottom: 12 }} />
        <div style={{ width: '65%', height: 30, background: theme.text, marginBottom: 18 }} />
        <div style={{ width: '50%', height: 10, background: theme.textDim, marginBottom: 24 }} />
        <div style={{ width: 120, height: 34, borderRadius: 999, background: theme.accent }} />
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '100%', background: theme.bg, display: 'flex' }}>
      <div style={{ width: 64, borderRight: `1px solid ${theme.line}`, padding: '20px 0', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} style={{ width: 20, height: 20, borderRadius: 6, background: i === 0 ? theme.accent : theme.line }} />
        ))}
      </div>
      <div style={{ flex: 1, padding: 24 }}>
        <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ flex: 1, height: 64, borderRadius: 8, border: `1px solid ${theme.line}` }} />
          ))}
        </div>
        <svg width="100%" height="160" viewBox="0 0 400 160" preserveAspectRatio="none">
          <polyline
            points="0,130 40,110 80,120 120,80 160,95 200,50 240,70 280,30 320,45 360,10 400,25"
            fill="none"
            stroke={theme.accent}
            strokeWidth={3}
            strokeDasharray="600"
            strokeDashoffset={600 - chartProgress * 600}
          />
        </svg>
      </div>
    </div>
  );
}
