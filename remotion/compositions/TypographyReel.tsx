import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Sequence } from 'remotion';
import { theme } from '../theme';
import { Grid } from '../components/Grid';

const WORDS = ['DESIGN', 'MEETS', 'TECHNOLOGY', 'AND', 'AI'];
const HOLD = 24;

export type TypographyReelProps = { words?: string[] };

export function TypographyReel({ words = WORDS }: TypographyReelProps) {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: theme.bg }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(75% 75% at 0% 100%, ${theme.accent2} 0%, ${theme.accent} 22%, transparent 55%)`,
          opacity: 0.4,
        }}
      />
      <Grid cells={10} opacity={0.5} />
      {words.map((word, i) => {
        const start = i * HOLD;
        return (
          <Sequence key={word} from={start} durationInFrames={HOLD + 2}>
            <Word word={word} fps={fps} accent={i === words.length - 1} />
          </Sequence>
        );
      })}
      <Progress frame={frame} total={words.length * HOLD} />
    </AbsoluteFill>
  );
}

function Word({ word, fps, accent }: { word: string; fps: number; accent: boolean }) {
  const frame = useCurrentFrame();
  const enter = spring({ frame, fps, config: { damping: 200, mass: 0.6 } });
  const y = interpolate(enter, [0, 1], [110, 0]);
  const clip = interpolate(enter, [0, 1], [100, 0]);

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ overflow: 'hidden', padding: '0 40px' }}>
        <div
          style={{
            fontFamily: theme.fontDisplay,
            fontWeight: 700,
            fontSize: 180,
            letterSpacing: -6,
            color: accent ? theme.accent : theme.text,
            transform: `translateY(${y}px)`,
            clipPath: `inset(${clip}% 0 0 0)`,
          }}
        >
          {word}
        </div>
      </div>
    </AbsoluteFill>
  );
}

function Progress({ frame, total }: { frame: number; total: number }) {
  const w = interpolate(frame, [0, total], [0, 100], { extrapolateRight: 'clamp' });
  return (
    <div
      style={{
        position: 'absolute',
        left: 80,
        right: 80,
        bottom: 80,
        height: 2,
        backgroundColor: theme.line,
      }}
    >
      <div style={{ width: `${w}%`, height: '100%', backgroundColor: theme.accent }} />
      <div
        style={{
          fontFamily: theme.fontMono,
          fontSize: 18,
          letterSpacing: 3,
          color: theme.dim,
          marginTop: 16,
        }}
      >
        ZSTUDIO — TYPOGRAPHY STUDY
      </div>
    </div>
  );
}
