# PortfolioLand — CLAUDE.md

## Reading Order

Before working on this project, read the doctrine in this order:

1. **VECTOR.md** — Project philosophy, design principles, constraints
2. **CLAUDE.md** — This file (onboarding briefing)
3. **ARCHITECTURE.md** — Technical specification and layer rules

## Architecture Reference

**Read ARCHITECTURE.md and follow it.** It is the single technical authority for this project. All layer boundaries, naming conventions, styling patterns, and development principles are defined there.

## Project Overview

**PortfolioLand** is a personal portfolio website for Jed Crystal, a product and UX designer with 20+ years experience. The site is intentionally minimal — the design itself demonstrates taste, restraint, and intentionality. This is not a template; it's a design artifact.

**Target audience:** Potential employers evaluating Jed's expertise and deciding whether to hire.

**Brand personality:** Minimal. Intentional. Curious.

## Stack Summary

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | React | 19.2.4 |
| Routing | react-router-dom | 7.14.0 |
| Build Tool | Vite | 8.0.1 |
| Styling | Plain CSS with CSS variables | — |
| Typography | Space Grotesk + Syne (Google Fonts) | Space Grotesk: 300/400/600/700; Syne: 600/700/800 |
| Linting | ESLint | 9.39.4 |
| Version Control | Git + GitHub CLI | — |

**No state management.** Static content only.
**Multi-page with React Router.** 8 routes, client-side navigation.
**No backend.** Pure frontend deployment.

## Key Context

### 1. Multi-Page Router Architecture
`src/App.jsx` is the router shell — it renders the nav, footer, and `<Routes>`. All page content lives in `src/pages/` (one component per route). Do not put page content in App.jsx. Do not extract shared sub-components unless a pattern repeats across 3+ pages.

**Routes:**
- `/` → Home.jsx
- `/work` → Work.jsx
- `/work/hepper` → Hepper.jsx
- `/work/ministry-of-supply` → Ministry.jsx
- `/work/wyss-institute` → Wyss.jsx
- `/work/shelf-ready` → ShelfReady.jsx
- `/about` → About.jsx
- `/contact` → Contact.jsx

### 2. Dark Mode Only
Dark mode is **not a user preference toggle** — it's an intentional design choice. The color palette is fixed:
- Background: `#0E0E0F` — cool-tinted dark
- Surface (elevated): `#141416`
- Primary text: `#F2F2F0` — near white, slightly warm
- Secondary text: `#888894` — cool grey
- Accent: `#F5631A` — safety orange, used sparingly (once per viewport maximum)

Never introduce light mode colors or a theme switcher.

### 3. CSS Design Token System
All visual properties are defined as CSS variables in `src/index.css` (`:root`). Never hardcode colors, spacing, or typography values in component CSS. Always reference the tokens:
```css
--color-bg, --color-surface, --color-primary, --color-secondary, --color-tertiary
--color-border, --color-accent
--spacing-xs through --spacing-4xl
--font-family-display, --font-family, --font-weight-*
--max-width, --padding-mobile, --padding-desktop
```

### 4. Animation System
Two distinct animation mechanisms — do not mix them:
- **Page-load entrances:** CSS `animation` with `slideUp` keyframe (defined in App.css), staggered `animation-delay` per element
- **Scroll reveals:** IntersectionObserver adds `.is-visible` class; reveal uses CSS `animation` (not `transition`) on the element. This prevents stagger `transition-delay` from bleeding into hover states (a known Safari issue)
- **Hover states:** `transition` on `color` and `border-color` only — no transform animations on hover
- All easing: `cubic-bezier(0.16, 1, 0.3, 1)` (exponential ease-out)
- All animations respect `prefers-reduced-motion: reduce`

### 5. Console Easter Egg
`src/main.jsx` contains a styled console message for curious developers ("Curious, aren't you?"). This is brand voice — preserve it during any refactoring.

### 6. Responsive Strategy
Mobile-first with a single breakpoint at 769px. Hero headline scales from `3rem` to `7.5rem` via `clamp()`. Interior page h1s scale from `2.5rem` to `4rem`. Test at both mobile and desktop sizes.

### 7. Content Constraints
- No lorem ipsum — always real content
- Widow prevention using `&nbsp;` between last two words of taglines
- LinkedIn CTA stays in the about section
- Page data (project descriptions, bio) lives inline in each page component — no separate data files at this scale

## What Not to Do

These are the most important prohibitions from ARCHITECTURE.md, surfaced here so you see them early:

1. **No hardcoded visual values in component CSS**
   Always use CSS variables from `index.css`. Never write `color: #3B82F6` — write `color: var(--color-accent)`.

2. **No inline styles**
   All styling lives in CSS files. React `style={{}}` props are prohibited.

3. **No Tailwind, styled-components, or CSS-in-JS**
   Plain CSS only. This is a constraint, not a preference.

4. **No generic AI design patterns**
   No gradients, glassmorphism, neon effects, purple/blue AI gradients, or anything that looks template-generated. If it could have come from a default prompt, redesign it.

5. **No fonts outside the permitted set**
   Space Grotesk (body/UI) and Syne (display headings) are the only permitted fonts. Do not introduce Inter, Poppins, Montserrat, Roboto, or any other font.

6. **No theme toggle or light mode**
   Dark mode is fixed. Do not add a switcher.

7. **No breaking the 960px max-width**
   Content container is fixed at 960px centered. Do not change this.

8. **No images or media**
   Pure typography and layout. No photos, icons, illustrations, or decorative SVGs.

## Commit Format

All commits should include the Co-Authored-By trailer:

```
git commit -m "$(cat <<'EOF'
Your commit message here.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
EOF
)"
```

Use descriptive commit messages that explain the "why," not just the "what."

## Standup Format

When providing status updates, use this format:

```
## Status: [In Progress / Blocked / Complete]

**What I did:**
- [Specific changes made]

**What's next:**
- [Immediate next steps]

**Blockers:**
- [None / specific issues]
```

## Development Commands

```bash
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Quality Gates

Before pushing code, verify:
- ✓ WCAG AA contrast ratios maintained
- ✓ Focus indicators visible on interactive elements
- ✓ Touch targets minimum 44px
- ✓ Animations disabled for `prefers-reduced-motion: reduce`
- ✓ No console errors or warnings
- ✓ Responsive at both mobile and desktop breakpoints
- ✓ Widow prevention on key copy using `&nbsp;`

## Collaboration Style

**You are the designer's collaborator**, not an order-taker. If you see a violation of the principles (generic patterns, hardcoded values, unnecessary complexity), push back. If you notice an opportunity for simplification, advocate for it. Every choice in this portfolio communicates design thinking — the code quality is part of the portfolio itself.

When uncertain, ask questions. When clear, be direct.

<!--
═══════════════════════════════════════════════════════════════════════════════
LEGACY CONTENT (Archived 2026-03-30)

The content below was the original CLAUDE.md created during project setup.
It has been replaced because it reflected early design decisions (light mode,
Inter font, 720px max-width, restricted animations) that were later evolved
through systematic design improvements.

Preserved here for reference. The current doctrine is in the sections above.
───────────────────────────────────────────────────────────────────────────────

# Portfolio — CLAUDE.md

## Project
Personal portfolio for Jed Crystal, a product and UX designer.
This site is itself a design artifact — it should demonstrate
taste, intention, and restraint.

## Design Principles
- Clean and minimal — white space is a design element, not empty space
- Every detail should feel considered and intentional
- Inspired by Dieter Rams — less but better
- No decorative elements that don't serve a purpose
- The design itself should communicate that a designer made this

## Typography
- Sans-serif only — modern, clean, precise
- Use Inter from Google Fonts
- Dramatic scale contrast between headings and body text
- Heading sizes: large and confident (3rem–6rem for hero)
- Body text: comfortable reading size (1rem–1.125rem)
- Line height: generous (1.6–1.75 for body)
- Letter spacing: slightly tracked on headings (-0.02em)
- Font weights: use 300 (light) and 600 (semibold) — avoid regular 400 weight for headings

## Color Palette
- Background: #FFFFFF (true white)
- Primary text: #0F0F0F (near black)
- Secondary text: #6B7280 (cool gray)
- Subtle borders and dividers: #E5E7EB (light gray)
- Accent: #1D4ED8 (a single precise blue — use sparingly)
- Never use pure #000000 black or gradients

## Layout
- Max content width: 720px, centered
- Generous padding: 2rem mobile, 4rem desktop
- Sections separated by whitespace, not dividers
- No cards with heavy shadows — use subtle borders or spacing only
- Mobile responsive at all times

## Code Conventions
- React functional components only
- Plain CSS modules — no Tailwind, no styled-components
- One component per file
- CSS variables for all colors and spacing defined in index.css
- Never use inline styles

## What to Avoid
- No gradients
- No heavy drop shadows
- No decorative icons or emoji
- No animations unless extremely subtle (opacity fade only)
- No generic AI design patterns — glassmorphism, neon, purple/blue gradients
- No lorem ipsum — always use real content

═══════════════════════════════════════════════════════════════════════════════
END LEGACY CONTENT
═══════════════════════════════════════════════════════════════════════════════
-->
