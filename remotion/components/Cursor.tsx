import { interpolate, useCurrentFrame } from 'remotion';

interface CursorProps {
  from: [number, number];
  to: [number, number];
  startFrame: number;
  duration: number;
}

export function Cursor({ from, to, startFrame, duration }: CursorProps) {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [startFrame, startFrame + duration], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const x = interpolate(progress, [0, 1], [from[0], to[0]]);
  const y = interpolate(progress, [0, 1], [from[1], to[1]]);
  const opacity = interpolate(frame, [startFrame, startFrame + 6], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <div style={{ position: 'absolute', left: x, top: y, opacity, zIndex: 10 }}>
      <svg width="22" height="22" viewBox="0 0 22 22">
        <path d="M2 2 L18 9 L10.5 11 L9 18 Z" fill="#fff" stroke="#000" strokeWidth={1} />
      </svg>
    </div>
  );
}
