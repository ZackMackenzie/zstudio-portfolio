import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { theme } from '../theme';
import { Grid } from '../components/Grid';

export type SocialCreativeProps = { headline?: string; kicker?: string };

/** Square (1:1) social motion template — data-driven. */
export function SocialCreative({
  headline = 'DA IDEIA\nÀ INTERFACE',
  kicker = 'ZSTUDIO',
}: SocialCreativeProps) {
  const { fps, durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();
  const loop = frame / durationInFrames;

  const lines = headline.split('\n');
  const barX = interpolate(Math.sin(loop * Math.PI * 2), [-1, 1], [-30, 30]);

  return (
    <AbsoluteFill style={{ backgroundColor: theme.bg }}>
      <Grid cells={6} opacity={0.5} />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(90% 90% at 0% 100%, ${theme.accent2} 0%, ${theme.accent} 26%, transparent 62%)`,
          opacity: 0.5,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: `calc(50% + ${barX}px)`,
          top: '10%',
          bottom: '10%',
          width: 2,
          backgroundColor: theme.accent2,
          opacity: 0.4,
        }}
      />

      <AbsoluteFill style={{ padding: 90, justifyContent: 'center' }}>
        {lines.map((line, i) => {
          const s = spring({ frame: frame - i * 6, fps, config: { damping: 200 } });
          return (
            <div key={i} style={{ overflow: 'hidden' }}>
              <div
                style={{
                  fontFamily: theme.fontDisplay,
                  fontWeight: 700,
                  fontSize: 118,
                  letterSpacing: -4,
                  lineHeight: 1.02,
                  color: i === lines.length - 1 ? theme.accent : theme.text,
                  transform: `translateY(${interpolate(s, [0, 1], [120, 0])}%)`,
                }}
              >
                {line}
              </div>
            </div>
          );
        })}
      </AbsoluteFill>

      <div
        style={{
          position: 'absolute',
          left: 90,
          bottom: 70,
          fontFamily: theme.fontMono,
          fontSize: 26,
          letterSpacing: 5,
          color: theme.dim,
        }}
      >
        {kicker}
      </div>
    </AbsoluteFill>
  );
}
