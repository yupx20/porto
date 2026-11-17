import { motion } from 'motion/react';
import PageTransition from '../components/layout/PageTransition';
import ProjectGrid from '../components/projects/ProjectGrid';
import HalftonePattern from '../components/ui/HalftonePattern';

/**
 * ProjectsPage — "Project Grimoire" (PRD Module 3)
 * Automated GitHub repository showcase with filtering.
 */
export default function ProjectsPage() {
  return (
    <PageTransition>
      <main className="pt-24 pb-16">
        {/* Page header */}
        <section className="relative py-16 overflow-hidden">
          <HalftonePattern opacity={0.03} />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-display text-6xl sm:text-7xl tracking-tight text-comic-white">
                PROJECT
                <span className="text-thief-red"> GRIMOIRE</span>
              </h1>
              <div className="h-1 w-24 bg-thief-red mt-4" />
              <p className="mt-4 text-lg text-panel-light/70 max-w-xl">
                A curated collection of repositories, tools, and experiments
                from the vault. Each project tells a story of solving real problems.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Project Grid */}
        <section className="relative py-8">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ProjectGrid />
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
