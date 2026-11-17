import type { Skill, RadarDataPoint } from '../types';

/**
 * Technical skills data organized by category.
 * Matched with professional experience and CV specifications.
 */
export const skills: Skill[] = [
  // ── Frontend ──────────────────────────────────────────────
  { name: 'React.js', level: 90, category: 'Frontend', icon: 'Code2' },
  { name: 'Next.js', level: 86, category: 'Frontend', icon: 'Globe' },
  { name: 'Tailwind CSS', level: 92, category: 'Frontend', icon: 'Palette' },
  { name: 'JavaScript / TypeScript', level: 88, category: 'Frontend', icon: 'FileCode' },
  { name: 'HTML5 / CSS3', level: 94, category: 'Frontend', icon: 'Globe' },

  // ── Backend ───────────────────────────────────────────────
  { name: 'Python (Django, FastAPI)', level: 92, category: 'Backend', icon: 'Terminal' },
  { name: 'PHP (Laravel)', level: 88, category: 'Backend', icon: 'Server' },
  { name: 'RESTful API Integration', level: 92, category: 'Backend', icon: 'Workflow' },
  { name: 'Service-Layer Architecture', level: 86, category: 'Backend', icon: 'Layers' },

  // ── Database ──────────────────────────────────────────────
  { name: 'PostgreSQL', level: 88, category: 'Database', icon: 'Database' },
  { name: 'MySQL', level: 88, category: 'Database', icon: 'Database' },
  { name: 'Eloquent ORM', level: 86, category: 'Database', icon: 'Zap' },
  { name: 'SQLAlchemy', level: 84, category: 'Database', icon: 'Layers' },
  { name: 'ChromaDB (Vector Database)', level: 85, category: 'Database', icon: 'Database' },

  // ── Cloud & DevOps ────────────────────────────────────────
  { name: 'Git & GitHub', level: 90, category: 'Cloud & DevOps', icon: 'GitBranch' },
  { name: 'Docker', level: 80, category: 'Cloud & DevOps', icon: 'Container' },
  { name: 'Linux', level: 82, category: 'Cloud & DevOps', icon: 'Terminal' },
  { name: 'Google Cloud Platform', level: 78, category: 'Cloud & DevOps', icon: 'Cloud' },

  // ── System Architecture ───────────────────────────────────
  { name: 'Relational Database Design', level: 88, category: 'System Architecture', icon: 'LayoutDashboard' },
  { name: 'SDLC Principles & Practices', level: 90, category: 'System Architecture', icon: 'Workflow' },
  { name: 'RAG Architecture', level: 88, category: 'System Architecture', icon: 'Network' },
  { name: 'State & Session Management', level: 86, category: 'System Architecture', icon: 'Settings' },

  // ── AI ────────────────────────────────────────────────────
  { name: 'LangChain & LangGraph', level: 90, category: 'AI', icon: 'Workflow' },
  { name: 'RAG (Retrieval Augmented Generation)', level: 92, category: 'AI', icon: 'Sparkles' },
  { name: 'Groq & Google Gemini API', level: 92, category: 'AI', icon: 'Cpu' },
  { name: 'NLP (SkillNER, KeyBERT, SFIA)', level: 88, category: 'AI', icon: 'FileCode' },
  { name: 'Streamlit & PyMuPDF', level: 90, category: 'AI', icon: 'Smartphone' },
  { name: 'Data Visualization (NumPy, Matplotlib)', level: 85, category: 'AI', icon: 'Layers' },
];

/**
 * Radar chart data — skill proficiency assessment per category.
 * Used by the SkillRadar hexagonal chart component.
 */
export const radarData: RadarDataPoint[] = [
  { category: 'Frontend', value: 89 },
  { category: 'Backend', value: 92 },
  { category: 'Database', value: 86 },
  { category: 'Cloud & DevOps', value: 84 },
  { category: 'System Architecture', value: 88 },
  { category: 'AI', value: 91 },
];
