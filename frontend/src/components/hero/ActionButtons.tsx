import { Link } from 'react-router';
import { Download, MessageSquare, FolderOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { useAudio } from '../../hooks/useAudio';

/**
 * ActionButtons — Hero CTA buttons styled as Persona menu actions.
 * - "DOWNLOAD DOSSIER" → Downloads resume PDF
 * - "ENGAGE" → Contact page
 * - "EXPLORE VAULT" → Projects page
 */

interface ButtonConfig {
  label: string;
  description: string;
  icon: React.ComponentType<{ size?: number }>;
  variant: 'primary' | 'secondary' | 'outline';
  to?: string;
  href?: string;
  download?: string;
}

const buttons: ButtonConfig[] = [
  {
    label: 'DOWNLOAD DOSSIER',
    description: 'Resume',
    icon: Download,
    variant: 'primary',
    href: import.meta.env.BASE_URL + 'resume.pdf',
    download: 'CV_Muhammad_Rizal_Yudianto.pdf',
  },
  {
    label: 'ENGAGE',
    description: 'Contact Me',
    icon: MessageSquare,
    to: '/contact',
    variant: 'secondary',
  },
  {
    label: 'EXPLORE VAULT',
    description: 'Projects',
    icon: FolderOpen,
    to: '/projects',
    variant: 'outline',
  },
];

const variantStyles = {
  primary:
    'bg-thief-red text-comic-white border-2 border-thief-red hover:bg-thief-red-bright hover:shadow-[0_0_20px_rgba(230,0,18,0.5)]',
  secondary:
    'bg-velvet-indigo text-comic-white border-2 border-velvet-indigo hover:bg-velvet-bright hover:shadow-[0_0_20px_rgba(58,75,255,0.5)]',
  outline:
    'bg-transparent text-comic-white border-2 border-comic-white hover:bg-comic-white hover:text-phantom-black',
};

export default function ActionButtons() {
  const { playSound } = useAudio();

  return (
    <div className="flex flex-wrap gap-3">
      {buttons.map((btn) => {
        const Icon = btn.icon;
        const inner = (
          <motion.div
            className={`group relative flex items-center gap-3 px-5 py-3 font-display text-sm tracking-widest
              transition-all duration-200 cursor-pointer ${variantStyles[btn.variant]}`}
            style={{
              transform: 'skewX(-8deg)',
              boxShadow: 'var(--shadow-comic-sm)',
            }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onHoverStart={() => playSound('hover')}
          >
            <span
              className="flex items-center gap-3"
              style={{ display: 'inline-flex', transform: 'skewX(8deg)' }}
            >
              <Icon size={16} />
              <span>{btn.label}</span>
            </span>
          </motion.div>
        );

        // External link / download
        if (btn.href) {
          return (
            <a
              key={btn.label}
              href={btn.href}
              download={btn.download}
              onClick={() => playSound('click')}
            >
              {inner}
            </a>
          );
        }

        // Internal route
        return (
          <Link key={btn.label} to={btn.to!} onClick={() => playSound('click')}>
            {inner}
          </Link>
        );
      })}
    </div>
  );
}
