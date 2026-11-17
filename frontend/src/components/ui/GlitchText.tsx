import { type ReactNode } from 'react';

/**
 * GlitchText — Applies a two-layer CSS glitch/flicker effect on text.
 * Uses clip-path animations to create the distortion effect seen
 * in Persona 5 menu transitions.
 *
 * The glitch only activates on hover for subtlety, unless `alwaysActive` is true.
 */
interface GlitchTextProps {
  children: ReactNode;
  className?: string;
  alwaysActive?: boolean;
}

export default function GlitchText({
  children,
  className = '',
  alwaysActive = false,
}: GlitchTextProps) {
  return (
    <span
      className={`relative inline-block ${alwaysActive ? 'group/glitch-active' : 'group/glitch'} ${className}`}
    >
      {/* Base layer */}
      <span className="relative z-10">{children}</span>

      {/* Glitch layer 1 — Red offset */}
      <span
        className={`absolute inset-0 text-thief-red opacity-0 ${
          alwaysActive
            ? 'animate-glitch-1 opacity-70'
            : 'group-hover/glitch:animate-glitch-1 group-hover/glitch:opacity-70'
        }`}
        aria-hidden="true"
      >
        {children}
      </span>

      {/* Glitch layer 2 — Blue offset */}
      <span
        className={`absolute inset-0 text-velvet-bright opacity-0 ${
          alwaysActive
            ? 'animate-glitch-2 opacity-70'
            : 'group-hover/glitch:animate-glitch-2 group-hover/glitch:opacity-70'
        }`}
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  );
}
