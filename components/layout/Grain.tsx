/**
 * Full-screen film grain. Inline SVG turbulence as a data URI — no network,
 * ~0 bytes over the wire, GPU-composited. Hidden for reduced-motion users via CSS.
 */
const GRAIN_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>`,
)}`;

export function Grain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[90] opacity-[0.035] motion-safe:animate-grain-shift"
      style={{
        backgroundImage: `url("${GRAIN_SVG}")`,
        backgroundSize: '140px 140px',
        mixBlendMode: 'overlay',
      }}
    />
  );
}
