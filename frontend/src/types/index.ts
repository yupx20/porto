/**
 * TypeScript interfaces for the Persona Portfolio.
 * Mirrors the data architecture and API response shapes.
 */

// ─── Profile ────────────────────────────────────────────────────
export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Lucide icon name or custom brand
}

export interface Profile {
  name: string;
  codename: string;        // e.g. "FULLSTACK & AI"
  level: number;           // e.g. 99
  title: string;           // e.g. "Information Systems Graduate | Fullstack & AI Developer"
  bio: string;
  avatar_url: string;
  location: string;
  email: string;
  availability: string;    // e.g. "Open to opportunities"
  social_links: SocialLink[];
  top_competencies: string[]; // ticker bar items
}

// ─── Projects (GitHub Repos) ────────────────────────────────────
export interface Project {
  id: number;
  name: string;
  description: string;
  primary_language: string;
  language_color: string;   // hex color for the language badge
  topics: string[];
  stars: number;
  forks: number;
  last_commit: string;      // ISO date string
  demo_url?: string;
  github_url: string;
  readme_html?: string;     // sanitized markdown rendered to HTML
  is_featured: boolean;
}

// ─── Skills ─────────────────────────────────────────────────────
export interface Skill {
  name: string;
  level: number;            // 0–100 proficiency percentage
  category: SkillCategory;
  icon?: string;            // Lucide icon name or custom
}

export type SkillCategory =
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'Cloud & DevOps'
  | 'System Architecture'
  | 'AI';

/** Radar chart data point — one axis per category */
export interface RadarDataPoint {
  category: SkillCategory;
  value: number;            // 0–100
}

// ─── Experience ─────────────────────────────────────────────────
export interface Experience {
  id: number;
  company: string;
  role: string;
  rank: number;             // Confidant rank 1–10
  start_date: string;       // ISO date
  end_date?: string;        // ISO date or undefined for "Present"
  description: string;
  skills_unlocked: string[]; // "battle skills" / perks unlocked
  logo_url?: string;
}

// ─── Education ──────────────────────────────────────────────────
export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  start_year: number;
  end_year?: number;
  gpa?: string;
  description?: string;
}

// ─── Organization & Certification ──────────────────────────────
export interface Organization {
  id: number;
  role: string;
  organization: string;
  period: string;
  description: string;
}

export interface LanguageCert {
  name: string;
  scoreOrLevel: string;
}

// ─── Contact Form ───────────────────────────────────────────────
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// ─── Terminal Command ───────────────────────────────────────────
export interface TerminalCommand {
  command: string;
  description: string;
  handler: (args: string[]) => string | React.ReactNode;
}

// ─── API Response Wrapper ───────────────────────────────────────
export interface ApiResponse<T> {
  data: T;
  status: 'success' | 'error';
  message?: string;
  cached_at?: string;
}
