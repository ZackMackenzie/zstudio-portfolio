import { Composition } from 'remotion';
import { ApexReel } from './compositions/ApexReel';
import { loadFonts } from './fonts';

loadFonts();

export function RemotionRoot() {
  return (
    <>
      <Composition
        id="ApexReel"
        component={ApexReel}
        durationInFrames={330}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
}
