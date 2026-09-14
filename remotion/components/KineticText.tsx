import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { theme, fonts } from '../theme';

interface KineticTextProps {
  text: string;
  delay?: number;
  fontSize?: number;
  color?: string;
  weight?: number;
}

/** A single line that rises into place with a soft spring, clipped like a reveal mask. */
export function KineticText({ text, delay = 0, fontSize = 96, color = theme.text, weight = 600 }: KineticTextProps) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const local = Math.max(0, frame - delay);

  const progress = spring({ frame: local, fps, config: { damping: 200, mass: 0.6 } });
  const y = interpolate(progress, [0, 1], [fontSize * 0.6, 0]);
  const opacity = interpolate(local, [0, fps * 0.4], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <div style={{ overflow: 'hidden', lineHeight: 1 }}>
      <div
        style={{
          transform: `translateY(${y}px)`,
          opacity,
          fontFamily: fonts.display,
          fontWeight: weight,
          fontSize,
          color,
          letterSpacing: '-0.03em',
          whiteSpace: 'nowrap',
        }}
      >
        {text}
      </div>
    </div>
  );
}
