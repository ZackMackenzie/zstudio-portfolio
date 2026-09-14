import type { ReactNode } from 'react';
import { theme } from '../theme';

interface DeviceFrameProps {
  kind: 'browser' | 'phone';
  children: ReactNode;
  width: number;
  height: number;
}

export function DeviceFrame({ kind, children, width, height }: DeviceFrameProps) {
  if (kind === 'phone') {
    return (
      <div
        style={{
          width,
          height,
          borderRadius: 44,
          border: `10px solid #191a1d`,
          background: theme.bg,
          overflow: 'hidden',
          boxShadow: '0 40px 120px rgba(0,0,0,0.6)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 90,
            height: 22,
            background: '#191a1d',
            borderRadius: '0 0 16px 16px',
            zIndex: 2,
          }}
        />
        {children}
      </div>
    );
  }

  return (
    <div
      style={{
        width,
        height,
        borderRadius: 14,
        border: `1px solid ${theme.line}`,
        background: theme.bgRaised,
        overflow: 'hidden',
        boxShadow: '0 40px 120px rgba(0,0,0,0.55)',
      }}
    >
      <div
        style={{
          height: 34,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '0 16px',
          borderBottom: `1px solid ${theme.line}`,
        }}
      >
        {['#5c5c5f', '#5c5c5f', '#5c5c5f'].map((c, i) => (
          <div key={i} style={{ width: 8, height: 8, borderRadius: 999, background: c }} />
        ))}
      </div>
      <div style={{ width: '100%', height: height - 34 }}>{children}</div>
    </div>
  );
}
