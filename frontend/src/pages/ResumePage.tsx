import { motion } from 'motion/react';
import PageTransition from '../components/layout/PageTransition';
import ConfidantTimeline from '../components/resume/ConfidantTimeline';
import SkillRadar from '../components/resume/SkillRadar';
import StatScreen from '../components/resume/StatScreen';
import HalftonePattern from '../components/ui/HalftonePattern';
import { education, organizations, languageCerts } from '../data/experience';
import { GraduationCap, Users, Globe } from 'lucide-react';

/**
 * ResumePage — "Confidant Status & Dossier" (PRD Module 2)
 *
 * Sections:
 * 1. Confidant Timeline (work experience)
 * 2. Persona Hexagon (skill radar)
 * 3. Status Screen (skill bars)
 * 4. Education
 * 5. Organizations
 * 6. Language Proficiencies
 */
export default function ResumePage() {
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
                CONFIDANT
                <span className="text-thief-red"> DOSSIER</span>
              </h1>
              <div className="h-1 w-24 bg-thief-red mt-4" />
              <p className="mt-4 text-lg text-panel-light/70 max-w-xl">
                A comprehensive record of professional experience, technical mastery,
                and battle-tested skills forged through years of development.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skill Radar + Stats Grid */}
        <section className="relative py-16 bg-phantom-dark">
          <HalftonePattern opacity={0.04} spacing={12} />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Radar Chart */}
              <SkillRadar />
              {/* Stat Screen */}
              <StatScreen />
            </div>
          </div>
        </section>

        {/* Confidant Timeline */}
        <section className="relative py-16">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ConfidantTimeline />
          </div>
        </section>

        {/* Education */}
        <section className="relative py-16 bg-phantom-dark">
          <HalftonePattern opacity={0.03} />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="inline-block px-6 py-2 bg-velvet-indigo mb-3"
                style={{ transform: 'skewX(-12deg)' }}
              >
                <span
                  className="font-display text-xl tracking-[0.3em] text-comic-white"
                  style={{ display: 'inline-block', transform: 'skewX(12deg)' }}
                >
                  ACADEMIC RECORD
                </span>
              </div>
              <p className="text-muted text-sm tracking-wider">
                // EDUCATIONAL BACKGROUND
              </p>
            </motion.div>

            {education.map((edu) => (
              <motion.div
                key={edu.id}
                className="flex items-start gap-4 p-6 bg-phantom-mid border-2 border-halftone-gray
                           hover:border-velvet-bright transition-colors"
                style={{ boxShadow: 'var(--shadow-comic-sm)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-velvet-indigo flex items-center justify-center">
                  <GraduationCap size={24} className="text-comic-white" />
                </div>
                <div>
                  <h3 className="font-display text-lg tracking-wider text-comic-white">
                    {edu.institution.toUpperCase()}
                  </h3>
                  <p className="text-thief-red font-display text-sm tracking-widest">
                    {edu.degree.toUpperCase()} — {edu.field.toUpperCase()}
                  </p>
                  <p className="text-sm text-muted mt-1">
                    {edu.start_year} — {edu.end_year || 'Present'}
                  </p>
                  {edu.description && (
                    <p className="text-sm text-panel-light/70 mt-2">{edu.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Organizations & Language Proficiencies */}
        <section className="relative py-16">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Organizations */}
              <div>
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className="inline-block px-6 py-2 bg-thief-red mb-3"
                    style={{ transform: 'skewX(-12deg)' }}
                  >
                    <span
                      className="font-display text-xl tracking-[0.3em] text-comic-white"
                      style={{ display: 'inline-block', transform: 'skewX(12deg)' }}
                    >
                      ORGANIZATIONS
                    </span>
                  </div>
                  <p className="text-muted text-sm tracking-wider">
                    // LEADERSHIP & INVOLVEMENT
                  </p>
                </motion.div>

                <div className="space-y-4">
                  {organizations.map((org) => (
                    <motion.div
                      key={org.id}
                      className="flex items-start gap-4 p-6 bg-phantom-dark border-2 border-halftone-gray
                                 hover:border-thief-red transition-colors"
                      style={{ boxShadow: 'var(--shadow-comic-sm)' }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-thief-red flex items-center justify-center">
                        <Users size={24} className="text-comic-white" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg tracking-wider text-comic-white">
                          {org.organization.toUpperCase()}
                        </h3>
                        <p className="text-thief-red font-display text-sm tracking-widest">
                          {org.role.toUpperCase()}
                        </p>
                        <p className="text-sm text-muted mt-1">{org.period}</p>
                        <p className="text-sm text-panel-light/70 mt-2">{org.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Language Proficiencies */}
              <div>
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className="inline-block px-6 py-2 bg-octane-yellow mb-3"
                    style={{ transform: 'skewX(-12deg)' }}
                  >
                    <span
                      className="font-display text-xl tracking-[0.3em] text-phantom-black"
                      style={{ display: 'inline-block', transform: 'skewX(12deg)' }}
                    >
                      LANGUAGES
                    </span>
                  </div>
                  <p className="text-muted text-sm tracking-wider">
                    // LANGUAGE PROFICIENCIES & SCORES
                  </p>
                </motion.div>

                <div className="space-y-3">
                  {languageCerts.map((lang) => (
                    <motion.div
                      key={lang.name}
                      className="flex items-center gap-4 p-4 bg-phantom-dark border-2 border-halftone-gray
                                 hover:border-octane-yellow/60 transition-colors"
                      style={{ boxShadow: 'var(--shadow-comic-sm)' }}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-octane-yellow flex items-center justify-center">
                        <Globe size={20} className="text-phantom-black" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-display text-sm tracking-wider text-comic-white">
                          {lang.name.toUpperCase()}
                        </h4>
                        <p className="text-xs text-octane-yellow font-display tracking-widest">
                          {lang.scoreOrLevel.toUpperCase()}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
