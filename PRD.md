# Product Requirements Document (PRD)
## Project: Persona-Themed Developer Portfolio & GitHub Showcase

---

### 1. Executive Summary & Vision
**Product Name:** Project All-Out Attack (Persona Portfolio)  
**Target Platform:** Web (Desktop-first, fully responsive mobile)  
**Deployment Target:** Vercel (Frontend + Serverless DRF / Decoupled Architecture)  
**Design System Aesthetic:** Persona 5 / Persona 3 Reload Inspired JRPG UI (High-contrast, bold diagonal cut-ins, dynamic halftone textures, typographic dynamism, kinetic micro-interactions).

The purpose of this project is to build a distinctive developer portfolio that combines a personal resume/profile showcase with an automated GitHub project aggregator. Utilizing Django REST Framework (DRF) as the data and caching middleware and Tailwind CSS v4 on the client, the application delivers an engaging, gamified user experience without compromising performance, accessibility, or maintainability.

---

### 2. Goals & Success Metrics

#### 2.1 Core Goals
* **Automated Sync:** Automatically fetch, parse, and cache repositories and metadata (stars, forks, languages, topics, README snippets, release versions) from the user's GitHub account.
* **JRPG / Persona Visual Identity:** Implement an authentic Persona-inspired UI using Tailwind CSS v4, custom keyframe animations, skewed transformation matrices, and comic-style UI banners.
* **Serverless Portability:** Support seamless zero-cost deployment on Vercel using either a unified repository setup (Next.js/Vite + Serverless Python WSGI handler) or decoupled frontend/backend deployment.
* **Resume & Interactive Dossier:** Present work experience, technical skills, education, and achievements styled as character stats, confidant/social link tiers, and velvet room dossiers.

#### 2.2 Success Metrics & KPIs
* **Lighthouse Score:** Performance $\ge 90$, SEO $\ge 95$, Accessibility $\ge 90$.
* **First Contentful Paint (FCP):** $< 1.2$ seconds.
* **API Rate Limiting & Resilience:** 0% GitHub API rate limit throttling through DRF server-side caching (Redis / in-memory cache with fallback).
* **Sync Latency:** GitHub webhook / on-demand sync cycle completed in $< 1.5$ seconds.

---

### 3. User Personas & User Stories

| Persona | Role | Primary Need |
| :--- | :--- | :--- |
| **Tech Recruiter / Talent Lead** | Evaluating candidate fit | Needs rapid access to resume, core skills, contact channels, and verifiable code repositories. |
| **Engineering Manager** | Assessing code quality & depth | Wants interactive project walkthroughs, tech stack tags, live demo links, and GitHub commit activity. |
| **Fellow Developer / Visitor** | Browsing showcase & design | Appreciates high visual polish, Easter eggs, interactive themes, and unique frontend styling. |

#### Key User Stories
* *As a visitor,* I want to browse highlighted GitHub repositories with auto-updated star counts, tech tags, and commit stats so that I can see the developer's latest work.
* *As a recruiter,* I want to download or view a clean, structured resume formatted both as an interactive JRPG "Status Screen" and an exportable clean PDF.
* *As an administrator (portfolio owner),* I want the system to automatically refresh GitHub data via scheduled cron or webhook without manual redeployments.

---

### 4. System Architecture & Tech Stack

```
+-------------------------------------------------------------------------+
|                              VERCEL EDGE                                |
|                                                                         |
|  +-----------------------------------+   +---------------------------+  |
|  |       Frontend Client (SPA)       |   | Serverless Python Runtime |  |
|  | - Tailwind CSS v4                 |   | - Django REST Framework   |  |
|  | - Lucide Icons / Custom SVG SFX   |   | - PyGithub / httpx client |  |
|  | - Persona Sound Effects (WebAudio)|   | - Caching Middleware      |  |
|  +-----------------+-----------------+   +-------------+-------------+  |
|                    |                                   |                |
+--------------------|-----------------------------------|----------------+
                     | JSON API Requests                 | GitHub REST API v3
                     v                                   v
        +------------+-------------+        +------------+-------------+
        | DRF API Endpoints        |        | GitHub Cloud Service     |
        | /api/v1/profile          |        | - Repositories & Topics  |
        | /api/v1/projects         |        | - Activity & Commits     |
        | /api/v1/resume           |        | - Pinned Repos           |
        +--------------------------+        +--------------------------+
```

#### 4.1 Backend: Django REST Framework (DRF)
* **Framework:** Django 5.x + Django REST Framework 3.15+
* **Serverless Adaptor:** `wsgi.py` configured with `whitenoise` for static files, wrapped for Vercel Serverless Function runtime (`api/index.py`).
* **GitHub Integration:** Async client via `httpx` or `requests` with GitHub Personal Access Token (PAT) authentication to fetch metadata, README markdown, stargazers, and languages.
* **Caching Strategy:** Django Cache Framework (using in-memory cache or Redis/KV backend) with a 6-hour TTL on repository data, plus an authenticated `/api/v1/sync` webhook endpoint for instant refresh.

#### 4.2 Frontend: Tailwind CSS v4 & Modern UI Layer
* **Engine:** React 19 / Next.js 15 or Vite (TypeScript-enabled).
* **Styling:** Tailwind CSS v4 using modern `@theme` directive, CSS variables, skewed containers, custom clip-paths, and halftone dotted patterns.
* **Audio Layer (Optional/Toggleable):** Web Audio API for UI tactile clicks, menu transitions, and "All-Out Attack" finish sound effects (muted by default with persistent toggle).

---

### 5. UI/UX Design System: Persona Aesthetic Specs

#### 5.1 Color Palette
* **Thief Red (Primary Accent):** `#E60012` / `#FF0033`
* **Velvet Indigo (Secondary Accent):** `#1E22AA` / `#3A4BFF`
* **High-Octane Yellow (Highlight):** `#FFE600`
* **Deep Phantom Black (Canvas/Base):** `#0A0A0B` / `#121214`
* **Stark Comic White (Text/Panels):** `#FFFFFF` / `#F3F4F6`
* **Halftone Gray (Textures):** `#2A2A30`

#### 5.2 Typography & Angular Geometry
* **Display Fonts:** High-impact, dynamic oblique condensed fonts (e.g., *Bebas Neue*, *Anton*, or custom *Persona-styled* italicized block typography).
* **Body Font:** Clean sans-serif (*Plus Jakarta Sans* or *Inter*) for maximum legibility of resume details.
* **Geometric Rules:**
  - Angular cuts: `transform: skewX(-12deg)` or `skewY(-4deg)` on menu cards, headers, and section boundaries.
  - Comic Action Callouts: Starburst shapes, jagged talk-bubbles for tooltips, and high-contrast drop-shadows (`box-shadow: 6px 6px 0px #000000`).
  - Halftone / Dot Matrix: Subtle SVG dot pattern backgrounds overlaid across dark mode sections.

---

### 6. Functional Requirements & Feature Specifications

#### Module 1: The Calling Card (Hero & Persona Introduction)
* **Visual Elements:** Angular hero portrait cutout with dynamic diagonal color slicing (Red/Black).
* **Elements:**
  - Codenames / Title tag (e.g., "FULL-STACK ARCHITECT // LEVEL 99").
  - Animated comic-strip ticker displaying top competencies.
  - Quick Action Buttons: "DOWNLOAD DOSSIER (Resume)", "ENGAGE (Contact Me)", and "EXPLORE VAULT (Projects)".

#### Module 2: Confidant Status & Dossier (Resume & Experience)
* **Experience & Timeline:** Displayed as "Social Link / Confidant Chronicles".
  - Company/Organization cards with rank badges (Rank 1 to Rank 10 progression).
  - Key accomplishments presented as battle skills / perks unlocked.
* **Skill Radar / Persona Hexagon:**
  - Interactive SVG hexagonal radar chart illustrating proficiencies (Frontend, Backend, Database, Cloud/DevOps, System Architecture, UI/UX).
* **Resume Exporter:** One-click generation of ATS-friendly PDF alongside the stylized in-page preview.

#### Module 3: Project Grimoire (Automated GitHub Repository Showcase)
* **GitHub Synchronization Engine:**
  - Automated pull of pinned or tagged repos (`portfolio-featured`).
  - Auto-extracts: Repo Name, Description, Primary Language, Topics/Tags, Star Count, Fork Count, Recent Commit Timestamp, and GitHub Pages / Vercel Live Demo URL.
* **Project Card Display:**
  - Persona "All-Out Attack" cut-in style cards on hover.
  - Skewed banner featuring the dominant language color badge.
  - Interactive modal dialog showing repo README preview rendered with sanitized Markdown.
* **Search & Filter:** Instant client-side filtering by technology, framework, star rating, or project type.

#### Module 4: The Velvet Room Terminal (Contact & Guestbook)
* **Contact Form:** High-contrast stylized form with instant client-side validation.
* **Interactive Terminal / Easter Egg:** Mini CLI terminal accessible via key-combo (`~` or `Ctrl+K`) supporting commands:
  - `status`: Show current availability for hire.
  - `skills`: Output raw JSON of core competencies.
  - `repo [name]`: Direct redirect to specified project repository.
  - `summon`: Persona summoning animation overlay.

---

### 7. REST API Endpoints Specification (DRF)

| Method | Endpoint | Description | Auth Level |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/profile/` | Returns developer bio, social links, stats, and resume data | Public |
| `GET` | `/api/v1/projects/` | Returns list of cached and formatted GitHub repositories | Public |
| `GET` | `/api/v1/projects/:id/` | Returns detailed single project data with fetched README | Public |
| `POST` | `/api/v1/projects/sync/`| Triggers synchronous or asynchronous GitHub cache invalidation | Admin / Token |
| `POST` | `/api/v1/contact/` | Submits contact inquiry with anti-spam captcha protection | Public |
| `GET` | `/api/v1/skills/` | Returns categorized skill sets and competency levels | Public |

---

### 8. Vercel Deployment & Build Configuration

#### 8.1 Directory Structure
```
├── api/                       # Vercel Serverless DRF entrypoint
│   ├── index.py              # WSGI handler bridge
│   └── requirements.txt      # Lightweight backend dependencies
├── backend/                   # Django REST Framework Project
│   ├── manage.py
│   ├── portfolio_core/       # Settings, WSGI, URLs
│   └── api/                  # DRF serializers, views, services
│       ├── github_service.py # GitHub REST API connector
│       └── views.py
├── frontend/                  # Modern UI Application
│   ├── src/
│   │   ├── components/       # Persona UI elements (SkewCard, CutIn, Radar)
│   │   ├── styles/           # Tailwind 4 theme & CSS modules
│   │   └── App.tsx
│   ├── package.json
│   └── tailwind.config.ts
├── vercel.json               # Serverless route routing & build matrix
└── README.md
```

#### 8.2 Sample `vercel.json` Routing
```json
{
  "version": 2,
  "builds": [
    {
      "src": "api/index.py",
      "use": "@vercel/python"
    },
    {
      "src": "frontend/package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "dist" }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "api/index.py"
    },
    {
      "src": "/(.*)",
      "dest": "frontend/$1"
    }
  ],
  "env": {
    "DJANGO_SETTINGS_MODULE": "portfolio_core.settings",
    "GITHUB_TOKEN": "@github_token",
    "GITHUB_USERNAME": "@github_username"
  }
}
```

---

### 9. Non-Functional Requirements & Security
* **Rate Limiting:** Protect GitHub API tokens using server-side caching (preventing exposure to client bundles).
* **Content Security Policy (CSP):** Strict script and frame restrictions; safe inline SVG rendering.
* **Responsive Breakpoints:**
  - Mobile (`< 768px`): Compact skew angles ($-4^{\circ}$), collapsed drawer navigation, touch-optimized card carousels.
  - Desktop (`\ge 768px`): Full dynamic skew angles ($-12^{\circ}$), interactive hover cut-ins, floating battle UI HUD.
* **Performance Budget:** Total JS bundle size $< 150\text{ KB}$ gzipped.

---

### 10. Implementation Roadmap

| Phase | Milestone | Deliverables |
| :--- | :--- | :--- |
| **Phase 1** | DRF Core & GitHub Pipeline | Backend models, GitHub API client, caching layer, and Vercel WSGI bridge setup. |
| **Phase 2** | Tailwind 4 Persona Design System | Theme tokens, custom skew layouts, halftone patterns, fonts, and atomic UI components. |
| **Phase 3** | Resume & Project Integration | Status Screen, interactive timeline, GitHub project cards, and README modal. |
| **Phase 4** | JRPG Polish & Micro-Interactions | Sound toggle, cut-in animations, terminal Easter egg, and performance optimization. |
| **Phase 5** | Vercel Deployment & QA | CI/CD pipeline, environment secret configurations, Lighthouse audit, and launch. |