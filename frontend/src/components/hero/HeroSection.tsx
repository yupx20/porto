import { motion } from 'motion/react';
import { profile } from '../../data/profile';
import HalftonePattern from '../ui/HalftonePattern';
import TickerBar from './TickerBar';
import ActionButtons from './ActionButtons';
import GlitchText from '../ui/GlitchText';

/**
 * HeroSection — "The Calling Card" (PRD Module 1)
 *
 * Features:
 * - Angular hero layout with diagonal red/black color slicing
 * - Codename / title tag with level badge
 * - Animated competency ticker bar
 * - CTA action buttons
 */
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-phantom-black"
    >
      {/* Halftone texture overlay */}
      <HalftonePattern opacity={0.04} spacing={20} />

      {/* Diagonal red slice — background decoration */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-thief-red opacity-10"
        style={{
          clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)',
        }}
        aria-hidden="true"
      />

      {/* Additional diagonal accent */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-2 bg-thief-red"
        initial={{ scaleX: 0, transformOrigin: 'left' }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column — Text content */}
          <div className="space-y-6">
            {/* Codename tag */}
            <motion.div
              className="inline-flex items-center gap-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="px-4 py-1.5 bg-thief-red font-display text-sm tracking-[0.3em] text-comic-white"
                style={{ transform: 'skewX(-12deg)' }}
              >
                <span style={{ display: 'inline-block', transform: 'skewX(12deg)' }}>
                  {profile.codename}
                </span>
              </div>
              <div
                className="px-3 py-1.5 border-2 border-octane-yellow font-display text-sm text-octane-yellow tracking-widest"
                style={{ transform: 'skewX(-12deg)' }}
              >
                <span style={{ display: 'inline-block', transform: 'skewX(12deg)' }}>
                  LV. {profile.level}
                </span>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <h1 className="font-display text-7xl sm:text-8xl lg:text-9xl leading-none tracking-tight">
                <GlitchText>{profile.name.toUpperCase()}</GlitchText>
              </h1>
              <p className="mt-2 font-display text-2xl sm:text-3xl text-thief-red tracking-widest">
                {profile.title.toUpperCase()}
              </p>
            </motion.div>

            {/* Bio */}
            <motion.p
              className="text-lg text-panel-light/80 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {profile.bio}
            </motion.p>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <ActionButtons />
            </motion.div>
          </div>

          {/* Right column — Decorative persona card */}
          <motion.div
            className="hidden lg:flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Card frame */}
              <div
                className="relative w-80 h-[420px] border-4 border-comic-white bg-phantom-dark overflow-hidden"
                style={{
                  transform: 'skewX(-4deg)',
                  boxShadow: '8px 8px 0px #E60012, 16px 16px 0px #000',
                }}
              >
                {/* Inner halftone */}
                <HalftonePattern opacity={0.08} spacing={12} />

                {/* Avatar area */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-6">
                  {/* Persona-style character frame */}
                  <div className="w-40 h-40 rounded-full border-4 border-thief-red bg-halftone-gray flex items-center justify-center mb-6 overflow-hidden">
                    <img
                      alt={profile.name}
                      src={profile.avatar_url}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Status card text */}
                  <div className="text-center space-y-2">
                    <h2 className="font-display text-3xl tracking-wider text-comic-white">
                      {profile.name.toUpperCase()}
                    </h2>
                    <div className="h-0.5 w-16 bg-thief-red mx-auto" />
                    <p className="font-display text-sm tracking-[0.3em] text-octane-yellow">
                      {profile.codename}
                    </p>

                    {/* Mini stat bars */}
                    <div className="mt-4 space-y-2 w-full">
                      {['HP', 'SP', 'EXP'].map((stat, i) => (
                        <div key={stat} className="flex items-center gap-2">
                          <span className="font-display text-xs text-muted w-8">{stat}</span>
                          <div className="flex-1 h-2 bg-phantom-black rounded-none overflow-hidden">
                            <motion.div
                              className={`h-full ${i === 0
                                ? 'bg-thief-red'
                                : i === 1
                                  ? 'bg-velvet-bright'
                                  : 'bg-octane-yellow'
                                }`}
                              initial={{ width: 0 }}
                              animate={{ width: `${85 + i * 5}%` }}
                              transition={{ duration: 1, delay: 0.8 + i * 0.15 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-thief-red" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-thief-red" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-thief-red" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-thief-red" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ticker bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <TickerBar />
      </div>
    </section>
  );
}
