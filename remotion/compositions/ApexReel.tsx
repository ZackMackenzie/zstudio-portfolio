import { AbsoluteFill, Sequence, interpolate, useCurrentFrame } from 'remotion';
import { ProjectPreview } from '../components/ProjectPreview';
import { KineticText } from '../components/KineticText';
import { BrowserMockup } from '../components/BrowserMockup';
import { Cursor } from '../components/Cursor';
import { theme, fonts } from '../theme';

function TitleScene() {
  return (
    <ProjectPreview>
      <div style={{ textAlign: 'center' }}>
        <KineticText text="Apex" fontSize={140} delay={4} />
        <div style={{ marginTop: 18 }}>
          <KineticText
            text="A product film, built in code."
            fontSize={34}
            weight={400}
            color={theme.textDim}
            delay={18}
          />
        </div>
      </div>
    </ProjectPreview>
  );
}

function ProductScene() {
  const frame = useCurrentFrame();
  const rise = interpolate(frame, [0, 24], [60, 0], { extrapolateRight: 'clamp' });
  const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <ProjectPreview>
      <div style={{ position: 'relative', transform: `translateY(${rise}px)`, opacity }}>
        <BrowserMockup width={980} height={600} variant="dashboard" />
        <Cursor from={[520, 420]} to={[760, 240]} startFrame={30} duration={40} />
      </div>
    </ProjectPreview>
  );
}

function ClosingScene() {
  return (
    <ProjectPreview>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontFamily: fonts.display, fontSize: 96, fontWeight: 600, color: theme.text, letterSpacing: '-0.03em' }}>
          Z<span style={{ color: theme.accent }}>.</span>studio
        </div>
        <div style={{ marginTop: 14, fontFamily: fonts.mono, fontSize: 20, letterSpacing: '0.08em', color: theme.textDim, textTransform: 'uppercase' }}>
          Digital design &amp; technology studio
        </div>
      </div>
    </ProjectPreview>
  );
}

export function ApexReel() {
  return (
    <AbsoluteFill>
      <Sequence durationInFrames={90}>
        <TitleScene />
      </Sequence>
      <Sequence from={80} durationInFrames={160}>
        <ProductScene />
      </Sequence>
      <Sequence from={230} durationInFrames={100}>
        <ClosingScene />
      </Sequence>
    </AbsoluteFill>
  );
}
