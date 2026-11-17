import { motion, AnimatePresence } from 'motion/react';

/**
 * CutInOverlay — The "All-Out Attack" style cut-in animation.
 * Slides in from the right with a skewed diagonal slash effect.
 * Used for project card hovers and page transitions.
 */
interface CutInOverlayProps {
  isVisible: boolean;
  color?: string;
  children?: React.ReactNode;
}

export default function CutInOverlay({
  isVisible,
  color = 'var(--color-thief-red)',
  children,
}: CutInOverlayProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="absolute inset-0 z-50 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {/* Diagonal slash background */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${color} 0%, ${color}ee 40%, transparent 41%, transparent 59%, ${color}ee 60%, ${color} 100%)`,
            }}
            initial={{ scaleX: 0, transformOrigin: 'left' }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0, transformOrigin: 'right' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Cut-in content */}
          {children && (
            <motion.div
              className="relative z-10"
              initial={{ x: 100, opacity: 0, skewX: -20 }}
              animate={{ x: 0, opacity: 1, skewX: 0 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.68, -0.55, 0.27, 1.55] }}
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
