import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    name: 'job-recommendation-chatbot',
    description:
      'AI-powered career assistant and CV analyzer built with Streamlit, LangChain, and Google Gemini API. Extracts resume text via PyMuPDF, performs benchmark skill comparisons, delivers ATS keyword optimization, and provides interactive career consultation.',
    primary_language: 'Python',
    language_color: '#3572A5',
    topics: ['streamlit', 'langchain', 'langgraph', 'gemini-api', 'pymupdf', 'ats-optimization'],
    stars: 1,
    forks: 0,
    last_commit: '2026-06-29T13:42:00Z',
    github_url: 'https://github.com/yupx20/job-recommendation-chatbot',
    is_featured: true,
    readme_html: `<h3>AI Job Recommender & Career Chatbot</h3>
<p>An intelligent career assistant application designed to streamline job search workflows and CV optimization.</p>
<h4>Core Capabilities</h4>
<ul>
<li>Structured PDF CV text extraction using PyMuPDF</li>
<li>Candidate profile parsing and skill gap evaluation against benchmark requirements</li>
<li>ATS keyword optimization to enhance applicant visibility</li>
<li>Interactive ReAct agent chatbot powered by LangChain, LangGraph, and Gemini API</li>
<li>Configurable model parameters including temperature and token thresholds</li>
</ul>
<h4>Tech Stack</h4>
<p>Python, Streamlit, LangChain, LangGraph, Google Gemini API, PyMuPDF</p>`,
  },
  {
    id: 2,
    name: 'resume-rag-chatbot',
    description:
      'Retrieval-Augmented Generation (RAG) conversational interface answering queries about professional background, skills, and experience directly from resume data using ChromaDB vector store and Groq LLM streaming.',
    primary_language: 'TypeScript',
    language_color: '#3178C6',
    topics: ['nextjs', 'react', 'rag', 'groq', 'chromadb', 'sentence-transformers'],
    stars: 1,
    forks: 0,
    last_commit: '2026-10-16T08:26:00Z',
    github_url: 'https://github.com/yupx20/resume-rag-chatbot',
    is_featured: true,
    readme_html: `<h3>Resume Chatbot (Retrieval Augmented Generation)</h3>
<p>Interactive conversational system grounded on personal resume documentation using semantic search and retrieval-augmented generation.</p>
<h4>System Architecture</h4>
<ul>
<li>Python ingestion pipeline parses source PDF and performs semantic chunking</li>
<li>Computes dense vector embeddings using ChromaDB and Sentence Transformers (all-MiniLM-L6-v2)</li>
<li>Next.js App Router API retrieves top matched context vectors</li>
<li>Fast token streaming powered by Groq API inference</li>
</ul>
<h4>Tech Stack</h4>
<p>Next.js 15, React 19, Python, ChromaDB, Sentence Transformers, Groq API</p>`,
  },
  {
    id: 3,
    name: 'sfia-skillmapping-project',
    description:
      'Research & development system utilizing Natural Language Processing to extract, parse, and match technical competencies from unstructured job specifications to the international SFIA (Skills Framework for the Information Age) taxonomy.',
    primary_language: 'Python',
    language_color: '#3572A5',
    topics: ['nlp', 'transformers', 'keybert', 'skillner', 'sfia', 'query-expansion'],
    stars: 1,
    forks: 0,
    last_commit: '2026-11-16T15:53:00Z',
    github_url: 'https://github.com/yupx20/sfia_skillmapping_project',
    is_featured: true,
    readme_html: `<h3>NLP Job Descriptions to SFIA Skills Mapping System</h3>
<p>Research and development implementation for automated competency taxonomy alignment based on the global SFIA standard.</p>
<h4>Methodology & Results</h4>
<ul>
<li>Engineered extraction and parsing algorithms for varied job specification formats</li>
<li>Custom pipeline integrating SkillNER entity recognition, semantic Query Expansion, and KeyBERT transformer modeling</li>
<li>Achieved 0.79 F1-score across evaluated technical competency benchmarks</li>
</ul>
<h4>Tech Stack</h4>
<p>Python, KeyBERT, SkillNER, Transformers, Natural Language Processing, SFIA 9</p>`,
  },
  {
    id: 4,
    name: 'what-to-buy',
    description:
      'Fullstack e-commerce storefront and admin POS system for beverage retail built with Laravel, Blade templates, Tailwind CSS, and Vite. Implements drink customization, session cart, live order tracking, and KPI monitoring.',
    primary_language: 'PHP',
    language_color: '#4F5D95',
    topics: ['laravel', 'php', 'tailwindcss', 'vite', 'blade', 'pos-system'],
    stars: 1,
    forks: 0,
    last_commit: '2026-08-15T20:02:00Z',
    github_url: 'https://github.com/yupx20/what-to-buy',
    is_featured: true,
    readme_html: `<h3>What to Buy - E-Commerce Storefront & Admin POS</h3>
<p>Modern commercial platform combining customer ordering with back-office operations under a service-layer architecture.</p>
<h4>Features</h4>
<ul>
<li>Product discovery with category filtering and real-time drink customization</li>
<li>Session-based shopping cart with automated subtotal, tax, and delivery computation</li>
<li>Two-step checkout flow with dynamic multi-stage order tracking</li>
<li>Administrative dashboard tracking revenue, inventory thresholds, and order execution</li>
<li>Role-based authentication and operational audit logging</li>
</ul>
<h4>Tech Stack</h4>
<p>PHP 8.3+, Laravel 13, Blade, Tailwind CSS 4, Vite 8, MySQL</p>`,
  },
  {
    id: 5,
    name: 'finselor',
    description:
      'Fullstack personal finance management application with AI investment advisory. Provides income/expense tracking, visual savings goal progression, asset allocation advisory based on risk profile, and JWT-authenticated FastAPI backend.',
    primary_language: 'TypeScript',
    language_color: '#3178C6',
    topics: ['nextjs', 'fastapi', 'postgresql', 'gemini-ai', 'docker', 'jwt'],
    stars: 1,
    forks: 0,
    last_commit: '2026-07-29T22:51:00Z',
    github_url: 'https://github.com/yupx20/finselor',
    is_featured: true,
    readme_html: `<h3>Finselor - Smart Personal Finance Manager</h3>
<p>Personal finance management suite designed to give individuals granular control over cashflow and automated savings plans.</p>
<h4>Key Features</h4>
<ul>
<li>Monthly cashflow monitoring with categorised income and expense distribution</li>
<li>Targeted savings goals with milestone tracking and deposit tracking</li>
<li>Surplus-based asset allocation suggestions generated via Google Gemini AI integration</li>
<li>Data export functionality to styled Excel and CSV files</li>
<li>Secure token-based JWT authentication and bcrypt password hashing</li>
</ul>
<h4>Tech Stack</h4>
<p>Next.js 16, FastAPI, PostgreSQL, Google Gemini API, Docker, Tailwind CSS</p>`,
  },
  {
    id: 6,
    name: 'growth-dashboard',
    description:
      'Internal monitoring dashboard developed during internship at PT Telkom Indonesia for contract tracking and operational reporting. Built with Django backend, React frontend, and optimized relational database queries.',
    primary_language: 'Python',
    language_color: '#3572A5',
    topics: ['django', 'react', 'postgresql', 'telkom', 'internal-dashboard'],
    stars: 1,
    forks: 0,
    last_commit: '2024-09-30T10:00:00Z',
    github_url: 'https://github.com/yupx20/growth_dashboard',
    is_featured: false,
    readme_html: `<h3>Telkom Growth Dashboard</h3>
<p>Operational monitoring system designed for contract management and project workflow visibility at PT Telkom Indonesia.</p>
<h4>Contributions</h4>
<ul>
<li>Maintained and expanded Django REST backend services for high-availability reporting</li>
<li>Engineered normalized relational SQL database architecture for project tracking</li>
<li>Optimized API response latency and streamlined frontend-backend dataflow in React</li>
<li>Collaborated via Git version control across multi-disciplinary engineering teams</li>
</ul>
<h4>Tech Stack</h4>
<p>Python, Django, React.js, PostgreSQL, REST APIs, Git</p>`,
  },
//   {
//     id: 7,
//     name: 'demand-forecasting-mcp',
//     description:
//       'Sales demand forecasting service, Model Context Protocol (MCP) server, and Streamlit executive dashboard for PT Borwita Citra Prima. Implements multi-model backtesting evaluated by WAPE metric.',
//     primary_language: 'Python',
//     language_color: '#3572A5',
//     topics: ['forecasting', 'prophet', 'fastapi', 'streamlit', 'mcp', 'pandas'],
//     stars: 1,
//     forks: 0,
//     last_commit: '2026-11-16T22:53:00Z',
//     github_url: 'https://github.com/yupx20',
//     is_featured: false,
//     readme_html: `<h3>Demand Forecasting & Model Context Protocol (MCP) System</h3>
// <p>End-to-end sales forecasting infrastructure serving enterprise planning requirements.</p>
// <h4>System Features</h4>
// <ul>
// <li>Data aggregation pipeline resolving product identity via connected components</li>
// <li>Multi-model backtesting comparing Naive, SES, Holt, and Prophet forecasting engines</li>
// <li>Automated model selection optimized against Weighted Absolute Percentage Error (WAPE)</li>
// <li>FastAPI REST microservice and Streamlit executive dashboard</li>
// <li>Model Context Protocol (MCP) tool provider enabling enterprise LLM queries</li>
// </ul>
// <h4>Tech Stack</h4>
// <p>Python, FastAPI, Streamlit, Prophet, Baserow, MCP</p>`,
//   },
  {
    id: 7,
    name: 'porto',
    description:
      'Persona-themed developer portfolio and project showcase with high-contrast JRPG aesthetic, responsive layout, interactive status dossier, and project grimoire. Built with React 19, Tailwind CSS v4, and Vite.',
    primary_language: 'TypeScript',
    language_color: '#3178C6',
    topics: ['react', 'typescript', 'tailwindcss', 'vite', 'portfolio', 'persona'],
    stars: 1,
    forks: 0,
    last_commit: '2026-11-17T12:00:00Z',
    github_url: 'https://github.com/yupx20/porto',
    is_featured: false,
    readme_html: `<h3>Persona Developer Portfolio</h3>
<p>A distinctive developer portfolio combining personal resume showcase with interactive project grimoire, inspired by Persona design systems.</p>
<h4>Features</h4>
<ul>
<li>High-contrast angular layout and halftone visual styling</li>
<li>Interactive technical status dossier and skill radar chart</li>
<li>Filterable project grimoire with modal markdown previews</li>
<li>Tactile Web Audio API sound effect integration</li>
<li>Optimized for static deployment via GitHub Pages</li>
</ul>
<h4>Tech Stack</h4>
<p>React 19, TypeScript, Tailwind CSS 4, Vite 8, Motion</p>`,
  },
];

/** Get unique languages from all projects */
export const projectLanguages = [...new Set(projects.map((p) => p.primary_language))];

/** Get unique topics from all projects */
export const projectTopics = [...new Set(projects.flatMap((p) => p.topics))];
