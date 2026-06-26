/**
 * Fixed full-screen film-grain layer. Uses an inline SVG feTurbulence data URI
 * (GPU-friendly, no per-frame canvas work) with a slow CSS drift. Animation is
 * disabled under prefers-reduced-motion via the globals.css media query.
 */
const GRAIN_SVG = encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'>
    <filter id='n'>
      <feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/>
      <feColorMatrix type='saturate' values='0'/>
    </filter>
    <rect width='100%' height='100%' filter='url(#n)'/>
  </svg>`,
);

export function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] opacity-[0.035] mix-blend-screen"
      style={{
        backgroundImage: `url("data:image/svg+xml,${GRAIN_SVG}")`,
        backgroundRepeat: "repeat",
        width: "180%",
        height: "180%",
        top: "-40%",
        left: "-40%",
        animation: "grain-shift 8s steps(6) infinite",
      }}
    />
  );
}
