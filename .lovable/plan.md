
# AI Engineer Portfolio — Build Plan

A single-page, dark futuristic AI portfolio inspired by OpenAI / Vercel / Linear / Anthropic, built on the project's TanStack Start stack (Vite + React 19 + TypeScript). All requested sections, animations, and design tokens included.

## Stack adjustments from the brief

- **Framework:** TanStack Start (not Next.js — not supported here). Same end result: SSR, file-based routing, TypeScript.
- Tailwind v4, Framer Motion (`motion`), Lucide Icons. No extra libs.
- Fonts: **Sora** (headings) + **Inter** (body) via `@fontsource-variable/*` packages, wired through `@theme` in `src/styles.css`.

## Architecture

```text
src/
  routes/
    __root.tsx          # head meta, fonts, Navbar + Footer shell
    index.tsx           # single-page portfolio: renders all sections
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Skills.tsx          # AI Galaxy
    Projects.tsx
    Experience.tsx      # horizontal timeline
    Research.tsx
    Services.tsx
    TechStack.tsx
    Achievements.tsx
    Contact.tsx
    Footer.tsx
    ui/
      GlassCard.tsx
      GradientText.tsx
      GlowButton.tsx
      AnimatedBackground.tsx   # grid + particles + radial gradients
      SectionHeading.tsx
      Counter.tsx              # count-up stat
  data/
    portfolio.ts        # ALL content (nav, hero copy, projects, skills, etc.)
  lib/
    motion.ts           # shared variants (fadeUp, slideIn, glowPulse, float)
```

One component per major section per the brief — no fragmentation.

## Design tokens (`src/styles.css`)

```text
--bg: #050816
--surface: #0D1224
--primary: #6D4AFF
--accent: #27D3FF
--glow: #A855F7
--gradient-hero: linear-gradient(135deg, #6D4AFF, #27D3FF)
--shadow-glow: 0 0 40px color-mix(in oklab, #6D4AFF 35%, transparent)
--radius: 22px
```

Mapped via `@theme inline` so utilities like `bg-surface`, `text-primary`, `shadow-glow` work. Glassmorphism via `bg-white/5 backdrop-blur-xl border border-white/10`.

## Section spec (matches the brief 1:1)

1. **Navbar** — sticky, blurred, animates compactness on scroll. Links: Home, About, Projects, Skills, Experience, Research, Services, Achievements, Contact. Right side: "Let's Connect" gradient CTA + theme icon (visual only — site is dark by design).
2. **Hero** — 3-col grid. Left: badge, large heading with gradient highlight on "retrieve, reason, automate", paragraph, two CTAs, 5 count-up stats. Center: portrait placeholder slot (data-driven `src`) on a glowing circular holographic platform built with concentric SVG rings + radial blur, surrounded by 5 floating glass cards (RAG Pipeline / Azure Deployment / Evaluation Metrics / Python Code / Vector Database) with Lucide icons and `float` animation. Right column flows from floating cards. Scroll indicator at bottom. **Image:** placeholder in `data/portfolio.ts` → user replaces on next turn.
3. **About** — split layout. Left: stylized "AI workstation" composition (layered glass panels + code lines + chart SVGs, all CSS/SVG, no stock image). Right: heading, paragraph, bulleted highlights, CTA.
4. **Skills (AI Galaxy)** — central "AI Engineering" node; 12 orbiting skill nodes (Python, FastAPI, Azure, LangChain, FAISS, Milvus, Docker, GitHub, OpenAI, RAGAS, Chroma, GitHub Actions) on two orbit rings; animated SVG connecting lines with gradient stroke; hover lifts + glow.
5. **Projects** — 2-col glass cards. Each: title, mini architecture diagram (SVG nodes + arrows), tech badges, description, Live Demo / GitHub / Research buttons.
6. **Experience** — horizontal glowing timeline (scrolls horizontally on mobile). Animated milestone dots, glass cards above/below the rail.
7. **Research** — paper preview card (mock PDF thumbnail via SVG), abstract, "View Publication" button.
8. **Services** — 6 glass cards (AI Chatbots, RAG Systems, AI Agents, Backend APIs, Cloud Deployment, Data Pipelines) with hover lift + border glow.
9. **Tech Stack** — uniform 6×2 icon grid with subtle hover.
10. **Achievements** — 5 professional cards (Research / Production Deployment / Publications / Certificates / Academic Excellence).
11. **Contact** — large gradient CTA heading, email + socials, primary button "Let's Connect", secondary "Download Resume".
12. **Footer** — minimal: logo, nav repeat, socials, copyright, back-to-top button.

## Background system

`<AnimatedBackground />` fixed behind all sections: CSS grid (radial-masked), 3 large radial gradients (purple/cyan/violet) with slow float, ~30 particle dots animated via Framer Motion. Subtle, never distracting.

## Animations (`lib/motion.ts`)

Shared variants: `fadeUp`, `slideInLeft/Right`, `glowPulse`, `float`, `hoverLift`, `staggerContainer`. Scroll-triggered via `whileInView` with `viewport={{ once: true, margin: "-80px" }}`. Count-up via small `useMotionValue` hook.

## Data layer

All copy, stats, projects, skills, experience entries, services, achievements, and links live in `src/data/portfolio.ts` exported as typed constants. Easy to edit; components stay presentational.

## SEO / Head

`__root.tsx` keeps existing shell; `index.tsx` sets route-specific title, description, og:title, og:description, og:image (once a hero image is provided).

## Out of scope / deferred

- **Hero portrait image** — placeholder slot only. User confirmed they'll re-upload next turn; I'll background-remove and wire it in then.
- No backend, no Lovable Cloud, no auth — pure marketing site.
- Resume PDF download wired to a `data/portfolio.ts` URL; user supplies file later.

## Verification

After build: run `tsgo` for typecheck; Playwright screenshot the home route at 1280×1800 to confirm dark theme, hero composition, and section order match the brief.
