import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { theme } from '../theme';
import { Grid } from '../components/Grid';

export type MotionPosterProps = { title?: string };

export function MotionPoster({ title = 'FEITO PARA SER VISTO' }: MotionPosterProps) {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const loop = frame / durationInFrames; // 0..1

  const rot = interpolate(loop, [0, 1], [0, 360]);
  const scale = 1 + Math.sin(loop * Math.PI * 2) * 0.06;
  const auraOpacity = 0.16 + Math.sin(loop * Math.PI * 2) * 0.06;

  return (
    <AbsoluteFill style={{ backgroundColor: theme.bg, overflow: 'hidden' }}>
      <Grid cells={8} opacity={0.6} />

      <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
        <div
          style={{
            position: 'absolute',
            width: 720,
            height: 720,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${theme.accent2} 0%, ${theme.accent} 30%, transparent 66%)`,
            opacity: auraOpacity,
            filter: 'blur(30px)',
          }}
        />
        <div
          style={{
            width: 360,
            height: 360,
            border: `2px solid ${theme.text}`,
            transform: `rotate(${rot}deg) scale(${scale})`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 360,
            height: 360,
            border: `2px solid ${theme.accent}`,
            transform: `rotate(${-rot * 0.5}deg) scale(${scale * 0.7})`,
          }}
        />
      </AbsoluteFill>

      <div
        style={{
          position: 'absolute',
          left: 80,
          bottom: 80,
          fontFamily: theme.fontDisplay,
          fontWeight: 700,
          fontSize: 72,
          letterSpacing: -2,
          color: theme.text,
        }}
      >
        {title}
      </div>
      <div
        style={{
          position: 'absolute',
          right: 80,
          top: 80,
          fontFamily: theme.fontMono,
          fontSize: 18,
          letterSpacing: 3,
          color: theme.dim,
        }}
      >
        ZSTUDIO
      </div>
    </AbsoluteFill>
  );
}
