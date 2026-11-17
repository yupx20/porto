import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, GitFork, ExternalLink, X } from 'lucide-react';
import { GithubIcon } from '../ui/BrandIcons';
import type { Project } from '../../types';
import CutInOverlay from '../ui/CutInOverlay';
import { useAudio } from '../../hooks/useAudio';

/**
 * ProjectCard — Persona "All-Out Attack" style project card.
 * Features a skewed banner with language color, hover cut-in animation,
 * and click-to-open README modal.
 */
interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenModal: (project: Project) => void;
}

export default function ProjectCard({ project, index, onOpenModal }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { playSound } = useAudio();

  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onMouseEnter={() => { setIsHovered(true); playSound('hover'); }}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => { onOpenModal(project); playSound('click'); }}
    >
      <div
        className="relative bg-phantom-mid border-2 border-halftone-gray overflow-hidden
                   hover:border-thief-red transition-all duration-300"
        style={{ boxShadow: 'var(--shadow-comic-sm)' }}
      >
        {/* Language color banner */}
        <div
          className="h-2 w-full"
          style={{ backgroundColor: project.language_color }}
        />

        {/* Card content */}
        <div className="p-5">
          {/* Header: name + featured badge */}
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-display text-lg tracking-wider text-comic-white group-hover:text-thief-red transition-colors">
              {project.name.toUpperCase()}
            </h3>
            {project.is_featured && (
              <span
                className="px-2 py-0.5 bg-octane-yellow text-phantom-black font-display text-[10px] tracking-wider"
                style={{ transform: 'skewX(-8deg)' }}
              >
                <span style={{ display: 'inline-block', transform: 'skewX(8deg)' }}>
                  FEATURED
                </span>
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-panel-light/70 leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Topics */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className="px-2 py-0.5 text-[10px] font-display tracking-wider border border-halftone-gray
                           text-muted group-hover:border-thief-red/30 group-hover:text-panel-light transition-colors"
              >
                {topic}
              </span>
            ))}
          </div>

          {/* Footer: stats + links */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-muted">
              {/* Language */}
              <span className="flex items-center gap-1.5">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: project.language_color }}
                />
                <span className="font-display text-xs tracking-wider">
                  {project.primary_language}
                </span>
              </span>

              {/* Stars */}
              <span className="flex items-center gap-1">
                <Star size={12} />
                <span className="font-display text-xs">{project.stars}</span>
              </span>

              {/* Forks */}
              <span className="flex items-center gap-1">
                <GitFork size={12} />
                <span className="font-display text-xs">{project.forks}</span>
              </span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-2">
              {project.demo_url && (
                <a
                  href={project.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-muted hover:text-octane-yellow transition-colors"
                  title="Live Demo"
                >
                  <ExternalLink size={14} />
                </a>
              )}
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-muted hover:text-comic-white transition-colors"
                title="View on GitHub"
              >
                <GithubIcon size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Hover cut-in overlay */}
        <CutInOverlay isVisible={isHovered} color={project.language_color}>
          <span className="font-display text-2xl tracking-widest text-comic-white drop-shadow-lg">
            VIEW PROJECT
          </span>
        </CutInOverlay>
      </div>
    </motion.div>
  );
}

/**
 * ProjectModal — Displays project details + README preview.
 */
interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-phantom-black/90 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Modal content */}
        <motion.div
          className="relative z-10 bg-phantom-dark border-2 border-thief-red w-full max-w-2xl max-h-[80vh] overflow-y-auto"
          style={{ boxShadow: '8px 8px 0px #E60012' }}
          initial={{ scale: 0.9, y: 40, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 40, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 bg-phantom-dark border-b-2 border-halftone-gray p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: project.language_color }}
              />
              <h2 className="font-display text-2xl tracking-wider text-comic-white">
                {project.name.toUpperCase()}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="flex items-center justify-center w-8 h-8 border-2 border-comic-white
                         text-comic-white hover:bg-thief-red hover:border-thief-red transition-colors"
              aria-label="Close modal"
            >
              <X size={16} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6">
            {/* Stats row */}
            <div className="flex flex-wrap gap-4 mb-6">
              <Stat icon={<Star size={14} />} label="Stars" value={project.stars} />
              <Stat icon={<GitFork size={14} />} label="Forks" value={project.forks} />
              <Stat
                icon={
                  <span
                    className="w-3 h-3 rounded-full inline-block"
                    style={{ backgroundColor: project.language_color }}
                  />
                }
                label="Language"
                value={project.primary_language}
              />
            </div>

            {/* Description */}
            <p className="text-panel-light/80 leading-relaxed mb-6">{project.description}</p>

            {/* README preview */}
            {project.readme_html && (
              <div className="border-t border-halftone-gray pt-4">
                <h3 className="font-display text-sm tracking-widest text-muted mb-4">
                  // README.md
                </h3>
                <div
                  className="prose prose-invert prose-sm max-w-none
                             prose-headings:font-display prose-headings:tracking-wider
                             prose-a:text-thief-red"
                  dangerouslySetInnerHTML={{ __html: project.readme_html }}
                />
              </div>
            )}

            {/* Action links */}
            <div className="flex gap-3 mt-6 pt-4 border-t border-halftone-gray">
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-comic-white text-phantom-black
                           font-display text-sm tracking-widest hover:bg-panel-light transition-colors"
                style={{ transform: 'skewX(-8deg)' }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', transform: 'skewX(8deg)' }}>
                  <GithubIcon size={14} />
                  VIEW SOURCE
                </span>
              </a>
              {project.demo_url && (
                <a
                  href={project.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-thief-red text-comic-white
                             font-display text-sm tracking-widest hover:bg-thief-red-bright transition-colors"
                  style={{ transform: 'skewX(-8deg)' }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', transform: 'skewX(8deg)' }}>
                    <ExternalLink size={14} />
                    LIVE DEMO
                  </span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-phantom-black border border-halftone-gray">
      {icon}
      <span className="text-xs text-muted font-display tracking-wider">{label}:</span>
      <span className="text-sm text-comic-white font-display">{value}</span>
    </div>
  );
}
