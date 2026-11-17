import { type ReactNode } from 'react';
import { motion } from 'motion/react';

/**
 * SkewCard — A reusable skewed container that gives the Persona-style
 * angular panel look. Inner content is counter-skewed to stay readable.
 *
 * Props:
 * - variant: 'heavy' (-12deg) | 'medium' (-8deg) | 'light' (-4deg)
 * - accent: color class for the left border accent stripe
 * - className: additional classes on the outer wrapper
 */
interface SkewCardProps {
  children: ReactNode;
  variant?: 'heavy' | 'medium' | 'light';
  accent?: string;
  className?: string;
  hoverEffect?: boolean;
}

const skewAngles = {
  heavy: { skew: -12, counterSkew: 12 },
  medium: { skew: -8, counterSkew: 8 },
  light: { skew: -4, counterSkew: 4 },
};

export default function SkewCard({
  children,
  variant = 'heavy',
  accent,
  className = '',
  hoverEffect = true,
}: SkewCardProps) {
  const { skew, counterSkew } = skewAngles[variant];

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      style={{
        transform: `skewX(${skew}deg)`,
        boxShadow: 'var(--shadow-comic)',
      }}
      whileHover={
        hoverEffect
          ? { scale: 1.02, y: -4, boxShadow: 'var(--shadow-glow-red)' }
          : undefined
      }
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Accent stripe */}
      {accent && (
        <div
          className="absolute left-0 top-0 bottom-0 w-1.5"
          style={{ backgroundColor: accent }}
        />
      )}

      {/* Counter-skewed inner content */}
      <div style={{ transform: `skewX(${counterSkew}deg)` }}>{children}</div>
    </motion.div>
  );
}
