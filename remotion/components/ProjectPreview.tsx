import { AbsoluteFill } from 'remotion';
import type { ReactNode } from 'react';
import { theme } from '../theme';

interface ProjectPreviewProps {
  children: ReactNode;
}

/** Shared scene background — radial accent glow over the studio's near-black. */
export function ProjectPreview({ children }: ProjectPreviewProps) {
  return (
    <AbsoluteFill
      style={{
        background: theme.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <AbsoluteFill
        style={{
          background: `radial-gradient(60% 60% at 50% 40%, ${theme.accent}22, transparent 70%)`,
        }}
      />
      {children}
    </AbsoluteFill>
  );
}
