# ARCHITECTURE.md

*Last Updated: 2026-04-13 — Updated to reflect multi-page React Router architecture.*

This file is the technical specification. All layer boundaries, naming conventions, styling patterns, and development principles are defined here. Read VECTOR.md for project philosophy and design doctrine.

## Stack

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| **Framework** | React | 19.2.4 | UI rendering with functional components |
| **Routing** | react-router-dom | 7.14.0 | Client-side routing, BrowserRouter, NavLink |
| **Build Tool** | Vite | 8.0.1 | Development server and production bundler |
| **Styling** | Plain CSS | — | Component and global styles with CSS variables |
| **Typography** | Space Grotesk + Syne | — | Google Fonts (Space Grotesk: body/UI; Syne: display headings) |
| **Linting** | ESLint | 9.39.4 | Code quality and consistency |
| **Package Manager** | npm | — | Dependency management |
| **Version Control** | Git + GitHub CLI | — | Source control and deployment |

## Layers

```
┌─────────────────────────────────────────────────────┐
│  index.html                                         │  Entry point, font loading, meta tags
├─────────────────────────────────────────────────────┤
│  src/main.jsx                                       │  React mounting, BrowserRouter, console easter egg
├─────────────────────────────────────────────────────┤
│  src/App.jsx                                        │  Router shell: nav, routes, footer, ScrollToTop
├─────────────────────────────────────────────────────┤
│  src/pages/                                         │  Page components (one per route)
│  ┌──────────────────────────────────────────────┐  │
│  │  Home.jsx       Work.jsx      About.jsx      │  │
│  │  Contact.jsx    Hepper.jsx    Ministry.jsx   │  │
│  │  Wyss.jsx       ShelfReady.jsx               │  │
│  └──────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────┤
│  Styling Layer (CSS)                                │
│  ┌──────────────────────────────────────────────┐  │
│  │  src/index.css          Global tokens, resets │  │
│  │  src/App.css            Nav, footer, shared   │  │
│  │  src/pages/Home.css     Page-scoped styles    │  │
│  │  src/pages/Work.css                           │  │
│  │  src/pages/About.css                          │  │
│  │  src/pages/Contact.css                        │  │
│  │  src/pages/ProjectDetail.css  Shared detail   │  │
│  └──────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

## Import Direction

```
Entry (index.html)
  ↓
Bootstrap (main.jsx)  ←  imports BrowserRouter, App
  ↓
Shell (App.jsx)       ←  imports page components + App.css
  ↓
Pages (src/pages/)    ←  each imports its own .css file
  ↓
Styling (CSS files)
```

**Rules:**
- Flow is strictly downward — lower layers never import from higher layers
- CSS files are imported only by the component that owns them
- Page components import only their own CSS (no cross-page CSS imports)
- App.jsx imports page components and App.css only — it does not import page CSS files directly
- Bootstrap (main.jsx) imports App.jsx and wraps it in BrowserRouter

**Import pattern verification:**
- ✓ `main.jsx` imports `App.jsx`, wraps in `BrowserRouter`
- ✓ `App.jsx` imports 8 page components + `App.css`
- ✓ Each page component imports only its own CSS file
- ✓ `ProjectDetail.css` is imported by Hepper, Ministry, Wyss, ShelfReady (shared detail style)
- ✓ No circular imports
- ✓ No upward imports

## Layer Responsibilities

**1. Entry Layer (`index.html`)**
- Font preconnect and loading (Google Fonts: Space Grotesk + Syne)
- Meta tags (description, viewport, charset)
- Favicon reference
- Root div mounting point

**2. Bootstrap Layer (`src/main.jsx`)**
- React 19 strict mode rendering
- BrowserRouter wrapper (react-router-dom)
- Console easter egg for curious developers ("Curious, aren't you?")
- App component mounting

**3. Shell Layer (`src/App.jsx`)**
- Sticky nav with NavLink active states
- Routes declaration (all 8 routes)
- Footer
- ScrollToTop component (scroll reset + document.title update on route change)
- Per-page title map (`pageTitles` object)
- Does NOT contain page content — content lives in page components

**4. Pages Layer (`src/pages/`)**
- One file per route, named for the content it represents
- Each page manages its own layout within the shared container
- Pages use IntersectionObserver for scroll-driven reveal animations where appropriate
- Page content (copy, data arrays) lives inline in the page component — no separate data files needed at this scale
- Shared project detail styles use `ProjectDetail.css` (imported by all 4 case study pages)

**5. Styling Layer**
- **`src/index.css`**: Design token system
  - CSS variables (colors, spacing, typography, layout)
  - Global resets and base styles
  - Dot-grid background via `radial-gradient` + `background-attachment: fixed`
  - Accessibility: text selection color, reduced motion support
  - Mobile-first responsive base

- **`src/App.css`**: Shell and shared styles
  - Nav, footer
  - Shared keyframes: `fadeIn`, `slideUp`, `heroEntrance`, `lineGrow`
  - Shared utilities: `.container`, `.section-num`, `.category-tag`, `.back-link`, `.wip-badge`, `.wip-banner`

- **`src/pages/*.css`**: Page-scoped styles
  - Each CSS file styles only its paired page component
  - No cross-page CSS imports permitted

## Styling Approach

**Design Token System:**
All visual properties defined as CSS variables in `src/index.css :root`:
```css
/* Colors */
--color-bg: #0E0E0F
--color-surface: #141416
--color-primary: #F2F2F0
--color-secondary: #888894
--color-tertiary: #555560
--color-border: #1E1E24
--color-accent: #F5631A   /* safety orange — use sparingly */

/* Spacing */
--spacing-xs through --spacing-4xl

/* Typography */
--font-family-display: 'Syne', sans-serif     /* h1, hero, large titles */
--font-family: 'Space Grotesk', sans-serif    /* body, UI, secondary headings */
--font-weight-light: 300
--font-weight-regular: 400
--font-weight-semibold: 600
--font-weight-bold: 700
--font-weight-extrabold: 800

/* Layout */
--max-width: 960px
--padding-mobile: 1.5rem
--padding-desktop: 4rem
```

**Responsive Strategy:**
- Mobile-first base styles
- Single breakpoint at 769px for desktop enhancements
- `@media (min-width: 769px)` for desktop overrides

**Animation Strategy:**
- Page header entrance: `slideUp` keyframe, `cubic-bezier(0.16, 1, 0.3, 1)` easing, staggered delays
- Scroll-driven reveals: IntersectionObserver adds `.is-visible` class; reveal uses CSS `animation` (not `transition`) to avoid stagger-delay bleeding into hover states
- Hover states: color transitions only (`border-color`, `color`) — no transform animations on hover
- Terminal cursor on hero headline: `cursorBlink` keyframe, `step-end` easing
- All animations respect `prefers-reduced-motion: reduce`

**Naming Conventions:**
- Semantic BEM-lite class names scoped to page context: `.home-hero`, `.hero-headline`, `.hero-sub`, `.what-i-bring`, `.bring-item`, `.project-card`, `.about-bio`, `.contact-item`
- Page-prefixed where necessary to avoid collision: `.work-header`, `.about-header`, `.contact-header`
- State classes: `.is-visible` (IntersectionObserver reveal), `.active` (NavLink active route)
- Modifier classes: `.bring-item--1` through `.bring-item--4` (stagger delay via CSS custom property)
- No BEM double-underscore or utility classes

## Development Principles

1. **Multi-page, single concern**
   One page component per route. Each page owns its layout, data, and CSS. App.jsx is a shell only — it routes and wraps, it does not render page content.

2. **CSS-First Styling**
   No CSS-in-JS, no Tailwind, no styled-components. CSS variables for all tokens. No inline styles. Animations defined in CSS only.

3. **Separate reveal animation from hover transition**
   Use CSS `animation` + `animation-play-state` (triggered by IntersectionObserver class) for scroll reveals. Use `transition` only for hover effects with zero delay. Mixing `transition-delay` (for stagger) with `transition` (for hover) causes hover bleeding across sibling elements in Safari.

4. **Accessibility by Default**
   Semantic HTML, rem units, focus indicators on all interactive elements, touch targets ≥ 44px, reduced motion support.

5. **Static content, no state management**
   Page data (project descriptions, bio text, skill lists) lives inline in each page component. No Context API, no external state libraries. No API calls.

6. **Git Workflow**
   Descriptive commit messages explaining the "why." Co-authored commits: `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>`. Push to main on GitHub.

## What Not to Do

1. **No hardcoded visual values in component CSS**
   Always use CSS variables from `index.css`. Never write `color: #F5631A` — write `color: var(--color-accent)`.

2. **No inline styles**
   All styling lives in CSS files. React `style={{}}` props are prohibited.

3. **No additional styling frameworks**
   Plain CSS only. No Tailwind, styled-components, Emotion, or CSS-in-JS.

4. **No cross-page CSS imports**
   Each page component imports only its own CSS file. Exception: case study pages may import `ProjectDetail.css` as shared base.

5. **No breaking the 960px max-width**
   Content container fixed at 960px. This is a design constraint, not a preference.

6. **No light mode or theme toggle**
   Dark mode is an intentional design choice, not a user preference.

7. **No state management libraries**
   Static content only. No Redux, Zustand, Jotai, Context API, or useReducer for shared state.

8. **No fonts outside the permitted set**
   Space Grotesk (body/UI) and Syne (display headings) only. Do not introduce Inter, Poppins, Montserrat, Roboto, or any other font.

9. **No generic AI design patterns**
   No gradients, glassmorphism, neon effects, purple/blue AI gradients, or anything template-generated.

10. **No `transition-delay` on container elements that also have hover transitions**
    Stagger delays must live on `animation-delay` (for reveal animations), not `transition-delay`. Setting `transition-delay` on a container element delays ALL transitions including hover border/color changes, causing unintended multi-element hover responses in Safari.

**Exception:** Console easter egg in `main.jsx` uses hardcoded colors because `console.log` styling doesn't support CSS variables. Documented and intentional.

## File Structure

```
/
├── index.html                  Entry point, font loading, meta tags
├── package.json                Dependencies and scripts
├── vite.config.js              Vite configuration
├── eslint.config.js            ESLint configuration
├── skills-lock.json            Installed Claude skills manifest
├── .gitignore                  Git ignore rules
├── README.md                   Project overview
├── VECTOR.md                   Design doctrine and principles
├── CLAUDE.md                   Onboarding briefing and agent rules
├── ARCHITECTURE.md             This file (technical specification)
├── SESSION-NOTES.md            Current state and resume context
├── .impeccable.md              Design context from /teach-impeccable
├── .claude/                    Claude Code configuration
│   └── skills/                 Installed skills
│       ├── invest-backfill/
│       ├── invest-doctrine/
│       └── invest-architecture/
├── vector/                     Research and audit artifacts
│   ├── research/               Design research (interviews, JTBD, personas)
│   ├── decisions/              Architecture Decision Records
│   ├── schemas/                Zero-Vector schema definitions
│   └── audits/                 Investiture audit reports
├── public/                     Static assets
│   └── favicon.svg             Site icon
└── src/                        Source code
    ├── main.jsx                React bootstrap, BrowserRouter, console easter egg
    ├── App.jsx                 Router shell: nav, routes, footer, ScrollToTop
    ├── App.css                 Nav, footer, shared utilities, shared keyframes
    ├── index.css               Global styles, CSS variables, design tokens
    └── pages/                  Page components (one per route)
        ├── Home.jsx            / — hero + what I bring
        ├── Home.css
        ├── Work.jsx            /work — project list
        ├── Work.css
        ├── About.jsx           /about — bio, skills, headshot, CTAs
        ├── About.css
        ├── Contact.jsx         /contact — email, LinkedIn
        ├── Contact.css
        ├── Hepper.jsx          /work/hepper
        ├── Ministry.jsx        /work/ministry-of-supply
        ├── Wyss.jsx            /work/wyss-institute
        ├── ShelfReady.jsx      /work/shelf-ready
        └── ProjectDetail.css   Shared styles for all case study pages
```

## Build & Deployment

**Development:**
```bash
npm run dev           # Start Vite dev server (http://localhost:5173)
```

**Production:**
```bash
npm run build         # Build for production (outputs to /dist)
npm run preview       # Preview production build locally
```

**Linting:**
```bash
npm run lint          # Run ESLint
```

**Git:**
```bash
git add .
git commit -m "Description"
git push              # Push to GitHub main branch
```

## How to Add a Page

1. Create `src/pages/PageName.jsx` and `src/pages/PageName.css`
2. Add the route to `App.jsx`: `<Route path="/path" element={<PageName />} />`
3. Add import to `App.jsx`: `import PageName from './pages/PageName'`
4. Add the page title to the `pageTitles` map in `App.jsx`
5. Add nav link if needed (most pages are linked from content, not nav)
6. Follow the page header pattern: Syne extrabold, orange left-border, `slideUp` animation

## Future Considerations

- Deployment to Vercel or Netlify (static hosting, no server needed)
- Analytics integration (privacy-focused, e.g., Plausible)
- Resume/CV download (PDF asset in `/public`)
- Contact form (requires a form service — Formspree or similar — no backend)
- Headshot photo on About page (already scaffolded, needs actual image file)
- Real content for all case study pages (currently placeholder copy)
