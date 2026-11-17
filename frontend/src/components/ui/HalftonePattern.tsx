/**
 * HalftonePattern — SVG-based halftone dot overlay that sits on top
 * of dark sections to provide the classic Persona comic-panel texture.
 * Pure CSS with no runtime cost.
 */
interface HalftonePatternProps {
  opacity?: number;
  dotSize?: number;
  spacing?: number;
  className?: string;
}

export default function HalftonePattern({
  opacity = 0.06,
  dotSize = 1,
  spacing = 16,
  className = '',
}: HalftonePatternProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none z-[1] ${className}`}
      style={{
        opacity,
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) ${dotSize}px, transparent ${dotSize}px)`,
        backgroundSize: `${spacing}px ${spacing}px`,
      }}
      aria-hidden="true"
    />
  );
}
