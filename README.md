# Persona Developer Portfolio

Personal portfolio featuring a high-contrast JRPG aesthetic inspired by Persona design systems, built with React 19, Tailwind CSS v4, and Vite.

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