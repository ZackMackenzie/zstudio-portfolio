import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px',
          background: '#060607',
          color: '#f6f6f4',
        }}
      >
        <div style={{ display: 'flex', fontSize: 28, letterSpacing: 4, color: '#97979d', textTransform: 'uppercase' }}>
          Digital Design &amp; Technology Studio
        </div>
        <div style={{ display: 'flex', fontSize: 140, fontWeight: 600, marginTop: 24, letterSpacing: -4 }}>
          Z<span style={{ color: '#3a5bff' }}>.</span>studio
        </div>
      </div>
    ),
    { ...size }
  );
}
