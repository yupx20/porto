import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TerminalIcon, X } from 'lucide-react';
import { profile } from '../../data/profile';
import { skills } from '../../data/skills';
import { projects } from '../../data/projects';
import { useAudio } from '../../hooks/useAudio';

/**
 * Terminal — Easter egg CLI terminal accessible via Ctrl+K or ~ key.
 * Supports commands: status, skills, repo [name], summon, help, clear.
 * Styled as a Persona-themed CRT terminal overlay.
 */

interface TerminalLine {
  type: 'input' | 'output' | 'error' | 'system';
  content: string;
}

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const { playSound } = useAudio();
  const [input, setInput] = useState('');
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'system', content: '╔══════════════════════════════════════════╗' },
    { type: 'system', content: '║  PERSONA TERMINAL v1.0 — VELVET ROOM    ║' },
    { type: 'system', content: '║  Type "help" for available commands.     ║' },
    { type: 'system', content: '╚══════════════════════════════════════════╝' },
    { type: 'output', content: '' },
  ]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Global keyboard shortcut: Ctrl+K or ~ to toggle terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.key === 'k') || (e.key === '`' && !e.ctrlKey && !e.altKey)) {
        e.preventDefault();
        setIsOpen((prev) => {
          playSound(!prev ? 'transition' : 'click');
          return !prev;
        });
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const executeCommand = useCallback((cmd: string) => {
    const parts = cmd.trim().toLowerCase().split(/\s+/);
    const command = parts[0];
    const args = parts.slice(1);

    switch (command) {
      case 'help':
        return [
          'Available commands:',
          '  help       — Show this help message',
          '  status     — Show current availability',
          '  skills     — Output core competencies',
          '  repo [name] — Open a project repository',
          '  repos      — List all repositories',
          '  summon     — Persona summoning animation',
          '  whoami     — Show profile info',
          '  clear      — Clear terminal',
          '',
          'Shortcuts: Ctrl+K or ` to toggle terminal',
        ].join('\n');

      case 'status':
        return `STATUS: ${profile.availability}\nLOCATION: ${profile.location}\nCLASS: ${profile.codename} // LV.${profile.level}`;

      case 'skills':
        return JSON.stringify(
          skills.reduce(
            (acc, s) => {
              if (!acc[s.category]) acc[s.category] = [];
              acc[s.category].push(`${s.name} (${s.level})`);
              return acc;
            },
            {} as Record<string, string[]>,
          ),
          null,
          2,
        );

      case 'repo': {
        if (args.length === 0) return 'Usage: repo [name]\nExample: repo persona-portfolio';
        const name = args.join('-');
        const project = projects.find(
          (p) => p.name.toLowerCase() === name || p.name.toLowerCase().includes(name),
        );
        if (project) {
          window.open(project.github_url, '_blank');
          return `Opening ${project.name}...`;
        }
        return `Repository "${name}" not found. Type "repos" to list all.`;
      }

      case 'repos':
        return projects
          .map((p) => `  ${p.name.padEnd(25)} ★${p.stars}  ${p.primary_language}`)
          .join('\n');

      case 'whoami':
        return `${profile.name} — ${profile.title}\n${profile.codename} // LEVEL ${profile.level}\n${profile.bio}`;

      case 'summon':
        return [
          '',
          '   ╱╲    COME FORTH!',
          '  ╱  ╲   ██████████████',
          ' ╱ ◈◈ ╲  ████ PERSONA ████',
          '╱______╲ ██████████████',
          '',
          '>>> ARSENE has been summoned! <<<',
          '',
        ].join('\n');

      case 'clear':
        return '__CLEAR__';

      case '':
        return '';

      default:
        return `Command not found: "${command}". Type "help" for available commands.`;
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    playSound('click');

    const newLines: TerminalLine[] = [
      ...lines,
      { type: 'input', content: `> ${input}` },
    ];

    const result = executeCommand(input);

    if (result === '__CLEAR__') {
      setLines([{ type: 'system', content: 'Terminal cleared.' }]);
    } else {
      result.split('\n').forEach((line) => {
        newLines.push({ type: 'output', content: line });
      });
      setLines(newLines);
    }

    setHistory((prev) => [input, ...prev]);
    setHistoryIndex(-1);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <>
      {/* Terminal toggle button */}
      <motion.button
        id="terminal-toggle"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center
                   border-2 border-comic-white bg-phantom-dark text-comic-white
                   hover:bg-velvet-indigo hover:border-velvet-indigo transition-colors"
        style={{ boxShadow: 'var(--shadow-comic-sm)' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle terminal"
        title="Toggle Terminal (Ctrl+K)"
      >
        <TerminalIcon size={20} />
      </motion.button>

      {/* Terminal overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[300] flex items-end sm:items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-phantom-black/80 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Terminal window */}
            <motion.div
              className="relative z-10 w-full max-w-2xl bg-phantom-black border-2 border-velvet-bright
                         shadow-[0_0_40px_rgba(58,75,255,0.3)]"
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Title bar */}
              <div className="flex items-center justify-between px-4 py-2 bg-velvet-indigo border-b border-velvet-bright">
                <div className="flex items-center gap-2">
                  <TerminalIcon size={14} className="text-comic-white" />
                  <span className="font-display text-xs tracking-[0.3em] text-comic-white">
                    VELVET ROOM TERMINAL
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-comic-white/60 hover:text-comic-white transition-colors"
                  aria-label="Close terminal"
                >
                  <X size={14} />
                </button>
              </div>

              {/* Terminal content */}
              <div
                ref={scrollRef}
                className="p-4 h-[400px] overflow-y-auto font-mono text-sm leading-relaxed"
              >
                {lines.map((line, i) => (
                  <div
                    key={i}
                    className={`whitespace-pre-wrap ${
                      line.type === 'input'
                        ? 'text-octane-yellow'
                        : line.type === 'error'
                          ? 'text-thief-red'
                          : line.type === 'system'
                            ? 'text-velvet-bright'
                            : 'text-panel-light/80'
                    }`}
                  >
                    {line.content}
                  </div>
                ))}

                {/* Input line */}
                <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-1">
                  <span className="text-thief-red font-bold">{'>'}</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent text-comic-white outline-none font-mono text-sm
                               caret-thief-red"
                    autoComplete="off"
                    spellCheck={false}
                    aria-label="Terminal input"
                  />
                </form>
              </div>

              {/* Scan line effect */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                  background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
