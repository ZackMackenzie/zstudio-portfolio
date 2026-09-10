import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Sequence } from 'remotion';
import { theme } from '../theme';
import { Grid } from '../components/Grid';

export type CaseTeaserProps = { index?: string; name?: string; tags?: string };

export function CaseTeaser({
  index = '01',
  name = 'PLATAFORMA DE PRODUTO',
  tags = 'SAAS / DESIGN DE PRODUTO / DESENVOLVIMENTO',
}: CaseTeaserProps) {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const wipe = spring({ frame, fps, config: { damping: 200 } });
  const panelH = interpolate(wipe, [0, 1], [0, 100]);

  return (
    <AbsoluteFill style={{ backgroundColor: theme.bg }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(80% 80% at 0% 100%, ${theme.accent2} 0%, ${theme.accent} 24%, transparent 58%)`,
          opacity: 0.45,
        }}
      />
      <Grid cells={12} opacity={0.4} />

      <AbsoluteFill style={{ padding: 90, justifyContent: 'space-between' }}>
        <Sequence from={4}>
          <FadeUp fps={fps}>
            <div
              style={{
                fontFamily: theme.fontMono,
                fontSize: 22,
                letterSpacing: 4,
                color: theme.dim,
              }}
            >
              <span style={{ color: theme.accent }}>{index}</span> &nbsp;/&nbsp; TRABALHOS
            </div>
          </FadeUp>
        </Sequence>

        <div style={{ overflow: 'hidden' }}>
          <Sequence from={10}>
            <FadeUp fps={fps}>
              <div
                style={{
                  fontFamily: theme.fontDisplay,
                  fontWeight: 700,
                  fontSize: 150,
                  letterSpacing: -6,
                  lineHeight: 0.95,
                  color: theme.text,
                }}
              >
                {name}
              </div>
            </FadeUp>
          </Sequence>
        </div>

        <Sequence from={18}>
          <FadeUp fps={fps}>
            <div
              style={{
                fontFamily: theme.fontMono,
                fontSize: 22,
                letterSpacing: 3,
                color: theme.dim,
              }}
            >
              {tags}
            </div>
          </FadeUp>
        </Sequence>
      </AbsoluteFill>

      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: 8,
          backgroundColor: theme.accent2,
          height: `${panelH}%`,
        }}
      />
    </AbsoluteFill>
  );
}

function FadeUp({ children, fps }: { children: React.ReactNode; fps: number }) {
  const frame = useCurrentFrame();
  const s = spring({ frame, fps, config: { damping: 200, mass: 0.5 } });
  return (
    <div style={{ transform: `translateY(${interpolate(s, [0, 1], [40, 0])}px)`, opacity: s }}>
      {children}
    </div>
  );
}
