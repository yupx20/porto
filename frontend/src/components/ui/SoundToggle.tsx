import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';
import { useAudio } from '../../hooks/useAudio';

/**
 * SoundToggle — Floating button to toggle the Persona SFX audio.
 * Muted by default. Persists preference via localStorage.
 */
export default function SoundToggle() {
  const { isMuted, toggleMute, playSound } = useAudio();

  const handleToggle = () => {
    toggleMute();
    // If we just unmuted (isMuted was true), play a confirmation click
    if (isMuted) {
      // Small delay to ensure state has updated
      setTimeout(() => playSound('click'), 50);
    }
  };

  return (
    <motion.button
      id="sound-toggle"
      onClick={handleToggle}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center
                 border-2 border-comic-white bg-phantom-dark text-comic-white
                 transition-colors hover:bg-thief-red hover:border-thief-red"
      style={{ boxShadow: 'var(--shadow-comic-sm)' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isMuted ? 'Unmute sound effects' : 'Mute sound effects'}
      title={isMuted ? 'Unmute SFX' : 'Mute SFX'}
    >
      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
    </motion.button>
  );
}
