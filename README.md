# Persona Developer Portfolio

Personal developer portfolio for **Muhammad Rizal Yudianto** (@yupx20) featuring a high-contrast JRPG aesthetic inspired by Persona design systems, built with React 19, Tailwind CSS v4, and Vite.

---

## Architecture Overview

The application is structured into four core modules:

1. **The Calling Card (`/` - Home)**:
   - High-impact angular hero layout with diagonal cut-ins and halftone backdrop.
   - Codename, level indicator, and real-time competency ticker bar.
   - Quick CTA actions with direct resume download.

2. **Confidant Dossier (`/#/resume` - Resume)**:
   - **Persona Hexagon**: SVG hexagonal radar chart illustrating category proficiencies.
   - **Status Screen**: Technical skill proficiency bars grouped across Frontend, Backend, Database, Cloud & DevOps, System Architecture, and AI.
   - **Confidant Chronicles**: Work experience timeline with rank progressions and unlocked battle skills.
   - **Academic Record, Leadership & Languages**: Education credentials, organizational experience, and language proficiencies (TOEIC, ELPT).

3. **Project Grimoire (`/#/projects` - Projects)**:
   - Automated showcase of real repositories and engineering systems.
   - Client-side search, language filter pills, and featured project toggle.
   - Interactive modal previews rendering structured Markdown documentation.

4. **The Velvet Room (`/#/contact` - Contact & Terminal)**:
   - High-contrast contact form with client-side validation.
   - Direct links to GitHub, LinkedIn, Canva Portfolio, and Email.
   - **Secret Terminal**: Press `Ctrl+K` or `` ` `` to access the interactive CLI terminal.

---

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Tooling**: Vite 8 + React Compiler
- **Styling**: Tailwind CSS v4 (CSS-first configuration with `@theme`)
- **Routing**: React Router (HashRouter for full static host compatibility)
- **Animation**: Motion (Framer Motion v13)
- **Audio Engine**: Web Audio API (tactile UI sound effects with mute toggle)
- **Icons**: Lucide React + Custom SVG Brand Icons

---

## Local Development

### Prerequisites

- Node.js >= 20
- npm >= 9

### Installation & Run

1. Clone repository:
   ```bash
   git clone https://github.com/yupx20/porto.git
   cd porto
   ```

2. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## Deployment to GitHub Pages

This repository is pre-configured with a GitHub Actions workflow in `.github/workflows/deploy.yml` that automatically builds and deploys to GitHub Pages upon pushing to `main`.

### Setup Steps:

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete persona developer portfolio and github pages deployment setup"
   git branch -M main
   git remote add origin https://github.com/yupx20/porto.git
   git push -u origin main
   ```

2. On GitHub, navigate to **Settings > Pages**:
   - Under **Build and deployment > Source**, select **GitHub Actions**.

3. The workflow will automatically trigger, build the frontend, and publish the site at:
   ```
   https://yupx20.github.io/porto/
   ```
