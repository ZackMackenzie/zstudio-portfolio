import { Composition } from 'remotion';
import { FPS } from './theme';
import { TypographyReel } from './compositions/TypographyReel';
import { MotionPoster } from './compositions/MotionPoster';
import { CaseTeaser } from './compositions/CaseTeaser';
import { SocialCreative } from './compositions/SocialCreative';

/**
 * Every composition registered here is picked up automatically by
 * `npm run motion:render` and written to /public/media as webm + mp4 + poster.
 * The `id` must match the `clipId` referenced in content/*.ts.
 */
export function RemotionRoot() {
  return (
    <>
      <Composition
        id="typography-reel"
        component={TypographyReel}
        durationInFrames={5 * 24 + 12}
        fps={FPS}
        width={1600}
        height={900}
        defaultProps={{}}
      />
      <Composition
        id="motion-poster"
        component={MotionPoster}
        durationInFrames={FPS * 6}
        fps={FPS}
        width={1400}
        height={900}
        defaultProps={{ title: 'FEITO PARA SER VISTO' }}
      />
      <Composition
        id="case-teaser"
        component={CaseTeaser}
        durationInFrames={FPS * 3}
        fps={FPS}
        width={1600}
        height={900}
        defaultProps={{
          index: '01',
          name: 'PLATAFORMA DE PRODUTO',
          tags: 'SAAS / DESIGN DE PRODUTO / DESENVOLVIMENTO',
        }}
      />
      <Composition
        id="social-creative"
        component={SocialCreative}
        durationInFrames={FPS * 5}
        fps={FPS}
        width={1080}
        height={1080}
        defaultProps={{ headline: 'DA IDEIA\nÀ INTERFACE', kicker: 'ZSTUDIO' }}
      />
    </>
  );
}
