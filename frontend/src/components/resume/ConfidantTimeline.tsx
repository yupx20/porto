import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { experiences } from '../../data/experience';
import RankBadge from './RankBadge';

/**
 * ConfidantTimeline — Displays work experience as Persona "Social Link / Confidant" entries.
 * Each position has a rank badge (1–10), timeline connector, and "skills unlocked" perks.
 */
export default function ConfidantTimeline() {
  return (
    <div className="relative">
      {/* Section header */}
      <motion.div
        className="mb-10"
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
            CONFIDANT CHRONICLES
          </span>
        </div>
        <p className="text-muted text-sm tracking-wider">
          // SOCIAL LINK PROGRESSION — PROFESSIONAL EXPERIENCE
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative space-y-8 pl-8 md:pl-12">
        {/* Vertical connector line */}
        <div className="absolute left-3 md:left-5 top-0 bottom-0 w-0.5 bg-halftone-gray" />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Timeline dot */}
            <div className="absolute -left-8 md:-left-12 top-4 flex items-center justify-center">
              <div className="w-6 h-6 bg-thief-red border-2 border-comic-white rotate-45 z-10" />
            </div>

            {/* Card */}
            <div
              className="relative bg-phantom-mid border-2 border-halftone-gray p-6 md:p-8
                         hover:border-thief-red transition-colors duration-300 group"
              style={{ boxShadow: 'var(--shadow-comic-sm)' }}
            >
              {/* Top row: Rank + Company + Date */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                <RankBadge rank={exp.rank} />
                <div className="flex-1">
                  <h3 className="font-display text-xl tracking-wider text-comic-white">
                    {exp.company.toUpperCase()}
                  </h3>
                  <p className="text-thief-red font-display text-sm tracking-widest">
                    {exp.role.toUpperCase()}
                  </p>
                </div>
                <div className="text-sm text-muted font-display tracking-wider">
                  {formatDate(exp.start_date)} — {exp.end_date ? formatDate(exp.end_date) : 'PRESENT'}
                </div>
              </div>

              {/* Description */}
              <p className="text-panel-light/80 text-sm leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* Skills Unlocked */}
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-octane-yellow font-display tracking-wider mr-1">
                  SKILLS UNLOCKED:
                </span>
                {exp.skills_unlocked.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-display tracking-wider
                               bg-phantom-black text-panel-light border border-halftone-gray
                               group-hover:border-thief-red/40 transition-colors"
                  >
                    <ChevronRight size={10} className="text-thief-red" />
                    {skill}
                  </span>
                ))}
              </div>

              {/* Hover accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-thief-red transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}
