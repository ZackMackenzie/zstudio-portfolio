import { ImageResponse } from 'next/og';
import { site } from '@/content/site';

export const dynamic = 'force-static';
export const alt = `${site.name} — ${site.role}`;
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
          justifyContent: 'space-between',
          background: '#000000',
          color: '#f5f6f7',
          padding: 80,
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: -160,
            bottom: -220,
            width: 720,
            height: 720,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, #34e1ff 0%, #2f6bff 34%, rgba(47,107,255,0) 70%)',
            filter: 'blur(20px)',
          }}
        />
        <div style={{ display: 'flex', fontSize: 26, letterSpacing: 4, color: '#7a7e85' }}>
          {site.role.toUpperCase()}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 150, fontWeight: 500, letterSpacing: -6, lineHeight: 1 }}>
            {site.wordmark}
          </div>
          <div style={{ display: 'flex', fontSize: 40, color: '#7a7e85', marginTop: 20 }}>
            Eu construo experiências digitais.
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 24, letterSpacing: 2, color: '#7a7e85' }}>
          Web · Produto · Marca · Motion · IA
        </div>
      </div>
    ),
    { ...size },
  );
}
