import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useAudio } from '../../hooks/useAudio';

/**
 * Navbar — Persona-styled navigation bar with skewed menu items.
 * Desktop: horizontal nav with skewed active indicator.
 * Mobile: full-screen drawer with staggered animation.
 */

const navItems = [
  { path: '/', label: 'HOME', shortLabel: 'I' },
  { path: '/resume', label: 'DOSSIER', shortLabel: 'II' },
  { path: '/projects', label: 'GRIMOIRE', shortLabel: 'III' },
  { path: '/contact', label: 'VELVET ROOM', shortLabel: 'IV' },
];

const p5Icon = `${import.meta.env.BASE_URL}p5icon.png`;

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { playSound } = useAudio();

  return (
    <nav
      id="main-nav"
      className="fixed top-0 left-0 right-0 z-50 bg-phantom-black/90 backdrop-blur-md border-b-2 border-thief-red"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand */}
          <Link
            to="/"
            className="flex items-center gap-2.5 font-display text-2xl tracking-wider text-comic-white hover:text-thief-red transition-colors group"
          >
            <img
              src={p5Icon}
              alt="Persona Hat"
              className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
            />
            <span>PERSONA</span>
            <span className="text-thief-red">FOLIO</span>
          </Link>

          {/* Desktop nav items */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative group"
                  onClick={() => playSound('click')}
                  onMouseEnter={() => playSound('hover')}
                >
                  <div
                    className={`px-5 py-2 font-display text-sm tracking-widest transition-all duration-200
                      ${isActive
                        ? 'bg-thief-red text-comic-white'
                        : 'text-panel-light hover:text-comic-white hover:bg-comic-white/5'
                      }`}
                    style={{
                      transform: 'skewX(-12deg)',
                    }}
                  >
                    <span style={{ display: 'inline-block', transform: 'skewX(12deg)' }}>
                      <span className="text-xs text-octane-yellow mr-1.5 opacity-60">
                        {item.shortLabel}
                      </span>
                      {item.label}
                    </span>
                  </div>

                  {/* Active indicator line */}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-octane-yellow"
                      layoutId="nav-active"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden flex items-center justify-center w-10 h-10 text-comic-white border-2 border-comic-white hover:bg-thief-red hover:border-thief-red transition-colors"
            onClick={() => { setIsOpen(!isOpen); playSound('click'); }}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-16 bg-phantom-black/98 z-50 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => { setIsOpen(false); playSound('click'); }}
                    className={`block py-4 px-8 my-1 font-display text-3xl tracking-widest transition-colors
                      ${isActive
                        ? 'text-thief-red bg-comic-white/5'
                        : 'text-comic-white hover:text-thief-red'
                      }`}
                    style={{ transform: 'skewX(-4deg)' }}
                  >
                    <span className="text-sm text-octane-yellow mr-3 opacity-60">
                      {item.shortLabel}
                    </span>
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
