import { GithubIcon } from '../ui/BrandIcons';

/**
 * Footer — Minimal Persona-styled footer with social link and credit.
 */
export default function Footer() {
  return (
    <footer className="relative border-t-2 border-halftone-gray bg-phantom-dark">
      {/* Diagonal cut top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-thief-red" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left — Branding */}
          <div className="flex items-center gap-2 font-display text-lg tracking-widest text-muted">
            <span className="text-thief-red">{'>'}</span>
            <span>PERSONA</span>
            <span className="text-thief-red">FOLIO</span>
            <span className="text-halftone-mid">// 2026</span>
          </div>

          {/* Center — Credit */}
          <p className="text-sm text-muted">
            Engineered with React, Tailwind CSS, and precision.
          </p>

          {/* Right — GitHub */}
          <a
            href="https://github.com/yupx20"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted hover:text-comic-white transition-colors"
          >
            <GithubIcon size={16} />
            <span>github.com/yupx20</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
