/**
 * Fixed, non-interactive radial glow behind all content. Static (no animation)
 * so it costs nothing at scroll time. Tinted with the primary + mauve accents.
 */
export function GlowBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background:
          "radial-gradient(55% 45% at 50% -8%, color-mix(in srgb, var(--blue) 16%, transparent), transparent 70%)," +
          "radial-gradient(40% 40% at 100% 0%, color-mix(in srgb, var(--mauve) 12%, transparent), transparent 70%)," +
          "radial-gradient(45% 45% at 0% 100%, color-mix(in srgb, var(--teal) 9%, transparent), transparent 70%)",
      }}
    />
  );
}
