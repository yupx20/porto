import { useState } from 'react';
import { motion } from 'motion/react';
import { skills } from '../../data/skills';
import type { SkillCategory } from '../../types';

/**
 * StatScreen — Persona "Status Screen" style skill display.
 * Lists all skills grouped by category with animated progress bars.
 * Includes category tab filtering.
 */

const categories: SkillCategory[] = [
  'Frontend',
  'Backend',
  'Database',
  'Cloud & DevOps',
  'System Architecture',
  'AI',
];

export default function StatScreen() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'All'>('All');

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <div>
      {/* Section header */}
      <motion.div
        className="mb-6"
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
            STATUS SCREEN
          </span>
        </div>
        <p className="text-muted text-sm tracking-wider">
          // TECHNICAL SKILL PROFICIENCIES
        </p>
      </motion.div>

      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        <FilterTab
          label="ALL"
          isActive={activeCategory === 'All'}
          onClick={() => setActiveCategory('All')}
        />
        {categories.map((cat) => (
          <FilterTab
            key={cat}
            label={cat.toUpperCase()}
            isActive={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
          />
        ))}
      </div>

      {/* Skills list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="group flex items-center gap-4 p-3 bg-phantom-dark border border-halftone-gray
                       hover:border-thief-red/50 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
          >
            {/* Skill name */}
            <div className="min-w-[140px] sm:min-w-[180px]">
              <span className="font-display text-sm tracking-wider text-panel-light">
                {skill.name}
              </span>
            </div>

            {/* Progress bar */}
            <div className="flex-1 h-3 bg-phantom-black border border-halftone-gray overflow-hidden">
              <motion.div
                className="h-full"
                style={{
                  background:
                    skill.level >= 90
                      ? 'var(--color-thief-red)'
                      : skill.level >= 80
                        ? 'var(--color-velvet-bright)'
                        : skill.level >= 70
                          ? 'var(--color-octane-yellow)'
                          : 'var(--color-halftone-mid)',
                }}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            {/* Level number */}
            <span className="font-display text-sm text-octane-yellow w-10 text-right">
              {skill.level}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/** Filter tab button */
function FilterTab({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 font-display text-xs tracking-widest transition-all duration-200
        ${
          isActive
            ? 'bg-thief-red text-comic-white border-thief-red'
            : 'bg-transparent text-muted border-halftone-gray hover:text-comic-white hover:border-comic-white'
        } border`}
      style={{ transform: 'skewX(-8deg)' }}
    >
      <span style={{ display: 'inline-block', transform: 'skewX(8deg)' }}>{label}</span>
    </button>
  );
}
