import { HashRouter, Routes, Route } from 'react-router';
import { AnimatePresence } from 'motion/react';
import { AudioProvider } from './hooks/useAudio';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SoundToggle from './components/ui/SoundToggle';
import Terminal from './components/contact/Terminal';

import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

/**
 * App — Root application component.
 *
 * Architecture:
 * - HashRouter for SPA client-side routing (compatible with GitHub Pages)
 * - AnimatePresence for page transition animations
 * - Persistent: Navbar (top), Footer (bottom), SoundToggle (bottom-right), Terminal (bottom-left)
 * - Each route maps to a PRD module:
 *     /         → Module 1: The Calling Card (Hero)
 *     /resume   → Module 2: Confidant Status & Dossier
 *     /projects → Module 3: Project Grimoire
 *     /contact  → Module 4: The Velvet Room
 */
export default function App() {
  return (
    <AudioProvider>
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-phantom-black text-comic-white">
        {/* Fixed navigation */}
        <Navbar />

        {/* Page content */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <Footer />

        {/* Global floating controls */}
        <SoundToggle />
        <Terminal />
      </div>
    </HashRouter>
    </AudioProvider>
  );
}
