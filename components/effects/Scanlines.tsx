/**
 * Faint CRT scanlines. Very low opacity, fixed, non-interactive. Static (no
 * animation) to keep scroll perf clean; the one-time boot flicker lives in the
 * boot sequence component, not here.
 */
export function Scanlines() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[99] opacity-[0.04]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to bottom, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 3px)",
      }}
    />
  );
}
