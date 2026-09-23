# Project Blueprint: High-End Engineering Portfolio

## 1. Overview & Purpose
This application is a cutting-edge personal portfolio website imported from `https://github.com/SankalpPatil7/sankalp-portfolio.git` and migrated into a Next.js (App Router) environment. It showcases full-stack and AI/ML engineering capabilities with an editorial, dark-mode typographic design, GSAP ScrollTrigger timeline animations, Lenis smooth scrolling, kinetic card scattering physics (`motion/react`), dynamic project chapter showcases, interactive skill matrix, evolution timeline, education/certifications catalog, GitHub/LeetCode live footprint console, and direct contact forms.

The portfolio is structured around a centralized data file (`src/data/portfolioData.ts`), enabling seamless personalization of:
- Personal identity, positioning, biography, education, and graduation milestones.
- Featured interactive project chapters (e.g. LEDGR, ResoniX, Hotel Guest Intelligence, GroupDNA).
- Secondary project archive with searchable & expandable architectural details.
- Comprehensive technical skill matrix categorized by domain.
- Verified certifications & industry simulations.
- Social coordinates, GitHub profile, LeetCode, LinkedIn, and direct contact endpoints.

---

## 2. Style, Design & Architecture

### Design Philosophy
- **Dark Editorial Aesthetic:** Base charcoal palette (`#0c0d0e`, `#111215`, `#18191e`) paired with high-contrast paper whites (`#f4f3ef`, `#e5e4de`) and vivid vermilion/orange accents (`#e65c24`, `#ff682b`).
- **Subtle Film Grain Texture:** Fixed SVG turbulence noise overlay (`grain-overlay`) creating a premium analog feel without performance degradation.
- **Architectural Grid Lines:** Faint vertical framing guidelines (`opacity-[0.03]`) structuring the editorial flow.
- **Typography:**
  - Display: `Syne` (high-contrast, editorial sans)
  - Primary Sans: `Space Grotesk` (clean geometric monospace/grotesque blend)
  - Code / Telemetry: `JetBrains Mono` (precise monospaced metrics)
- **Fluid & Accessible Motion:**
  - Synchronized Lenis smooth scroll + GSAP ScrollTrigger integration.
  - Kinetic card stack spread using Framer Motion (`motion/react`).
  - Strict respect for `prefers-reduced-motion: reduce` across all GSAP timelines and Motion hooks.

### Core Components & Modules
1. **`IntroLoader`:** Persistent recallable 3D intro cover with sound toggle, audio synthesizer beeps, telemetry details, and upward-scroll re-entry.
2. **`Navbar`:** Fixed editorial navigation bar with section anchors, live status badge, and intro loader toggle.
3. **`Hero`:** Big typography dancing letters headline (`DancingLetters`), editorial telemetry bar, FIG. 01 portrait frame, and quick CTAs.
4. **`AboutStatement` & `StackSpread`:** Central philosophy manifesto with 8 kinetic floating cards scattering into their respective grid coordinates upon scrolling, plus core philosophical pillars and FIG. 02 portrait.
5. **`SkillsMatrix`:** Typographic domain matrix featuring Languages, Core CS, AI & ML, Data & Analytics, Web Development, and Engineering Tools.
6. **`EvolutionTimeline`:** Multi-year project evolution trajectory documenting progression from foundations to complex AI systems.
7. **`FeaturedProjects`:** Deep architectural chapter exhibitions for major projects:
   - `LedgrChapter`: AI-Powered Finance Controller & Auditor (FastAPI, SQLite, ML, NVIDIA NIM).
   - `ResonixChapter`: Social Engagement Analytics Platform (Python, Streamlit, NLP, SciPy).
   - `HotelChapter`: Hotel Guest Intelligence & Revenue Optimization (RapidMiner, ML, Power BI).
   - `GroupDnaChapter`: WhatsApp Chat Behavioral Analytics System (Python, NumPy).
8. **`ProjectArchive`:** Expandable secondary catalog with search filter, tag badges, and architecture breakdown.
9. **`EducationCertifications`:** Degree details from university, CGPA badge, and verified certifications list.
10. **`TerminalFootprint`:** Interactive developer footprint console displaying live-styled GitHub activity, repository metrics, and LeetCode stats.
11. **`ContactSection` & `Footer`:** Direct get-in-touch channels, social links, and copyright statement.

---

## 3. Plan & Implementation Steps for Current Task
1. **Dependency Setup:**
   - Install `clsx`, `tailwind-merge`, `gsap`, `lenis`, `lucide-react`, `motion`.
2. **Asset Migration:**
   - Copy all static assets (`/images`, `favicon.svg`, `icons.svg`) from the cloned repository to `/public`.
3. **Codebase Migration into Next.js App Router:**
   - Transfer utility libraries (`src/lib/utils.ts`).
   - Transfer custom hooks (`useSmoothScroll.ts`, `useMagnetic.ts`).
   - Transfer centralized data file (`src/data/portfolioData.ts`).
   - Transfer UI components (`dancing-letters.tsx`, `stack-spread.tsx`, `BrandIcons.tsx`, `Navbar.tsx`, `Hero.tsx`, `AboutStatement.tsx`, `SkillsMatrix.tsx`, `EvolutionTimeline.tsx`, `featured/*`, `ProjectArchive.tsx`, `EducationCertifications.tsx`, `TerminalFootprint.tsx`, `ContactSection.tsx`, `Footer.tsx`, `IntroLoader.tsx`, `CustomCursor.tsx`).
   - Add `"use client"` directives to all interactive components with client-side state/GSAP/motion.
   - Configure global styling in `src/app/globals.css` with the complete theme variables, fonts, grain overlay, and Lenis CSS.
   - Configure `src/app/layout.tsx` to load Google Fonts (`Syne`, `Space Grotesk`, `JetBrains Mono`) and set proper HTML metadata.
   - Render the complete portfolio inside `src/app/page.tsx`.
4. **Verification & Build Testing:**
   - Run `npm run lint -- --fix` to verify ESLint compliance.
   - Run `npm run build` to ensure error-free compilation and TypeScript type checking.
5. **Personalization Readiness:**
   - Present a clear structure for user personalization, allowing the user to provide their personal name, university, skills, projects, and contact info, or update `portfolioData.ts`.

---

## 4. GitHub Repository Publishing
- Remote URL: `https://github.com/dev-lover-codes/Ubes_Portfolio.git`
- Target Branch: `main`
- Actions:
  1. Set remote `origin` to `https://github.com/dev-lover-codes/Ubes_Portfolio.git`.
  2. Stage all project files, assets, components, and configuration.
  3. Create commit with complete portfolio codebase.
  4. Ensure current branch is `main`.
  5. Push upstream to `origin/main`.

