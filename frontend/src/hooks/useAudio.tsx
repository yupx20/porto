import { createContext, useContext, useState, useCallback, useRef, type ReactNode } from 'react';

/**
 * AudioContext Provider — Shares a single audio state and playSound function
 * across the entire app. This ensures the SoundToggle button controls sound
 * for all components.
 *
 * Why a Context?
 * Each call to `useAudio()` as a plain hook creates its own isolated state.
 * The Context pattern ensures ONE mute state + ONE AudioContext is shared.
 */

type SoundType = 'click' | 'hover' | 'transition' | 'success' | 'error';

interface AudioContextValue {
  isMuted: boolean;
  toggleMute: () => void;
  playSound: (type: SoundType) => void;
}

const AudioCtx = createContext<AudioContextValue | null>(null);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isMuted, setIsMuted] = useState(() => {
    if (typeof window === 'undefined') return true;
    const stored = localStorage.getItem('persona-sfx-muted');
    // Muted by default (PRD requirement)
    return stored === null ? true : stored === 'true';
  });

  const audioCtxRef = useRef<AudioContext | null>(null);

  /** Lazily create AudioContext (requires user gesture first) */
  const getContext = useCallback(() => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioContext();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }, []);

  /** Play a synthesized Persona-style sound effect */
  const playSound = useCallback(
    (type: SoundType) => {
      if (isMuted) return;

      try {
        const ctx = getContext();
        const oscillator = ctx.createOscillator();
        const gain = ctx.createGain();

        oscillator.connect(gain);
        gain.connect(ctx.destination);

        switch (type) {
          case 'click':
            oscillator.type = 'square';
            oscillator.frequency.setValueAtTime(800, ctx.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
            oscillator.start(ctx.currentTime);
            oscillator.stop(ctx.currentTime + 0.1);
            break;

          case 'hover':
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(600, ctx.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.05);
            gain.gain.setValueAtTime(0.08, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
            oscillator.start(ctx.currentTime);
            oscillator.stop(ctx.currentTime + 0.05);
            break;

          case 'transition':
            oscillator.type = 'sawtooth';
            oscillator.frequency.setValueAtTime(150, ctx.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.2);
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
            oscillator.start(ctx.currentTime);
            oscillator.stop(ctx.currentTime + 0.3);
            break;

          case 'success':
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(523, ctx.currentTime); // C5
            oscillator.frequency.setValueAtTime(659, ctx.currentTime + 0.1); // E5
            oscillator.frequency.setValueAtTime(784, ctx.currentTime + 0.2); // G5
            gain.gain.setValueAtTime(0.12, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
            oscillator.start(ctx.currentTime);
            oscillator.stop(ctx.currentTime + 0.4);
            break;

          case 'error':
            oscillator.type = 'square';
            oscillator.frequency.setValueAtTime(200, ctx.currentTime);
            oscillator.frequency.setValueAtTime(150, ctx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
            oscillator.start(ctx.currentTime);
            oscillator.stop(ctx.currentTime + 0.2);
            break;
        }
      } catch {
        // Audio context creation can fail silently in some browsers
      }
    },
    [isMuted, getContext],
  );

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev;
      localStorage.setItem('persona-sfx-muted', String(next));
      return next;
    });
  }, []);

  return (
    <AudioCtx.Provider value={{ isMuted, toggleMute, playSound }}>
      {children}
    </AudioCtx.Provider>
  );
}

/**
 * useAudio — Access the shared audio context.
 * Must be used within an <AudioProvider>.
 */
export function useAudio() {
  const ctx = useContext(AudioCtx);
  if (!ctx) {
    throw new Error('useAudio must be used within an <AudioProvider>');
  }
  return ctx;
}
