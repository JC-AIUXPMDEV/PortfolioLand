# ARCHITECTURE.md

## Stack

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| **Framework** | React | 19.2.4 | UI rendering with functional components |
| **Build Tool** | Vite | 8.0.1 | Development server and production bundler |
| **Styling** | Plain CSS | - | Component and global styles with CSS variables |
| **Typography** | Space Grotesk | - | Google Fonts (weights: 300, 400, 600, 700) |
| **Linting** | ESLint | 9.17.0 | Code quality and consistency |
| **Package Manager** | npm | - | Dependency management |
| **Version Control** | Git + GitHub CLI | - | Source control and deployment |

## Layers

```
┌─────────────────────────────────────┐
│         index.html                  │  Entry point, font loading, meta tags
├─────────────────────────────────────┤
│         src/main.jsx                │  React mounting, console easter egg
├─────────────────────────────────────┤
│         src/App.jsx                 │  Main component (hero, about, experience)
├─────────────────────────────────────┤
│    Styling Layer (CSS)              │
│  ┌─────────────────────────────┐   │
│  │  src/index.css              │   │  Global styles, CSS variables, resets
│  ├─────────────────────────────┤   │
│  │  src/App.css                │   │  Component styles, animations, interactions
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

## Import Direction

```
Entry (index.html)
  ↓
Bootstrap (main.jsx)
  ↓
Component (App.jsx)
  ↓
Styling (CSS files)
```

**Rules:**
- Lower layers never import from higher layers (unidirectional flow)
- CSS can be imported by any layer above it
- Component layer (App.jsx) is terminal — imports only CSS files
- Bootstrap layer (main.jsx) imports only from Component and Styling layers
- Entry layer (index.html) references Bootstrap as script module entry point

**Import pattern verification:**
- ✓ `main.jsx` imports from `App.jsx` and `App.css`
- ✓ `App.jsx` imports from `App.css`
- ✓ No circular imports exist
- ✓ No upward imports (component doesn't import from bootstrap)

### Layer Responsibilities

**1. Entry Layer (`index.html`)**
- Font preconnect and loading (Google Fonts)
- Meta tags (description, viewport, charset)
- Favicon reference
- Root div mounting point

**2. Bootstrap Layer (`src/main.jsx`)**
- React 19 strict mode rendering
- Console easter egg for curious developers
- App component mounting

**3. Component Layer (`src/App.jsx`)**
- Single-component architecture (intentionally flat)
- Three main sections: hero, about, experience
- Experience categories as inline data (no separate data layer needed)
- Semantic HTML structure

**4. Styling Layer**
- **`src/index.css`**: Design token system
  - CSS variables (colors, spacing, typography, layout)
  - Global resets and base styles
  - Accessibility: text selection, reduced motion support
  - Mobile-first responsive breakpoints

- **`src/App.css`**: Component-specific styles
  - Section layouts and spacing
  - Typographic hierarchy
  - Animations (entrance, hover, divider line-grow)
  - Interaction states (hover, active, focus-visible)

## Styling Approach

**Design Token System:**
All visual properties defined as CSS variables in `:root`:
```css
--color-bg, --color-primary, --color-secondary, --color-border, --color-accent
--spacing-xs through --spacing-3xl
--font-family, --font-weight-* variants
--max-width, --padding-mobile, --padding-desktop
```

**Responsive Strategy:**
- Mobile-first base styles
- Single breakpoint at 769px for desktop enhancements
- Uses `@media (min-width: 769px)` and `@media (max-width: 768px)`
- No utility classes — all responsive adjustments in component CSS

**Animation Strategy:**
- Entrance animations: staggered with delays (0s → 0.3s → 0.5s → 0.6s)
- Interaction animations: hover, active, focus states
- Easing: exponential `cubic-bezier(0.16, 1, 0.3, 1)` for refined feel
- Accessibility: all animations disabled via `@media (prefers-reduced-motion: reduce)`

**Naming Conventions:**
- Semantic class names: `.hero`, `.about`, `.experience`, `.tagline`, `.experience-card`, `.linkedin-button`
- No BEM or utility classes — straightforward semantic naming
- Pseudo-elements for decorative dividers (`.hero::after`, `.about::after`)

## Development Principles

1. **Intentional Simplicity**
   - Single component architecture (no unnecessary abstractions)
   - No state management needed (static content)
   - No routing (single page)
   - Inline data arrays (experience categories directly in component)

2. **CSS-First Styling**
   - No CSS-in-JS, no Tailwind, no styled-components
   - CSS variables for all tokens
   - No inline styles permitted
   - Animations defined in CSS, not JavaScript

3. **Accessibility by Default**
   - Semantic HTML (`<section>`, proper heading hierarchy)
   - rem units for sizing (respects user browser preferences)
   - Focus indicators on all interactive elements
   - Touch targets minimum 44px
   - Reduced motion support

4. **Performance Considerations**
   - No runtime dependencies beyond React
   - Font preconnect for faster loading
   - CSS animations (GPU-accelerated)
   - Static content (no API calls or data fetching)

5. **Git Workflow**
   - Descriptive commit messages
   - Co-authored commits with Claude: `Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>`
   - Push to main branch on GitHub

## What Not to Do

These are critical prohibitions that prevent violations of the architecture:

1. **No hardcoded visual values in component CSS**
   Always use CSS variables from `index.css`. Never write `color: #3B82F6` — write `color: var(--color-accent)`.

2. **No inline styles**
   All styling lives in CSS files. React `style={{}}` props are prohibited.

3. **No additional styling frameworks**
   Plain CSS only. Do not introduce Tailwind, styled-components, Emotion, or any CSS-in-JS solution.

4. **No component extraction unless file exceeds 200 lines**
   Keep single-component architecture in `App.jsx`. Premature abstraction violates intentional simplicity.

5. **No breaking the 960px max-width**
   Content container is fixed at 960px centered. This is a design constraint, not a suggestion.

6. **No light mode or theme toggle**
   Dark mode is an intentional design choice, not a user preference. Do not add theme switching.

7. **No state management libraries**
   Static content only. Do not introduce Redux, Zustand, Jotai, or Context API. No state needed.

8. **No images or media in production**
   Pure typography and layout. No photos, icons, illustrations, or decorative SVGs.

9. **No fonts from the "overused" list**
   Space Grotesk only. Do not introduce Inter, Poppins, Montserrat, or Roboto.

10. **No generic AI design patterns**
    No gradients, glassmorphism, neon effects, purple/blue AI gradients, or anything that looks template-generated.

**Exception:** Console easter egg in `main.jsx` uses hardcoded colors (`#3B82F6`, `#9CA3AF`) because `console.log` styling doesn't support CSS variables. This is documented and intentional.

## File Structure

```
/
├── index.html              Entry point
├── package.json            Dependencies and scripts
├── vite.config.js          Vite configuration
├── .gitignore             Git ignore rules
├── README.md              Project overview
├── VECTOR.md              Design doctrine
├── CLAUDE.md              Onboarding briefing
├── ARCHITECTURE.md        This file (technical spec)
├── SESSION-NOTES.md       Current state and resume instructions
├── .impeccable.md         Design context from /teach-impeccable
├── .claude/               Claude Code configuration
│   └── skills/            Installed skills
│       ├── invest-backfill/
│       ├── invest-doctrine/
│       └── invest-architecture/
├── /vector/               Documentation and audits
│   ├── research/          Design research artifacts
│   ├── decisions/         Architecture Decision Records
│   ├── schemas/           Zero-Vector schema definitions
│   └── audits/            Investiture audit reports
├── public/                Static assets
│   └── favicon.svg        Site icon (SVG)
└── src/                   Source code
    ├── main.jsx           React bootstrap + console easter egg
    ├── App.jsx            Main component (hero, about, experience)
    ├── App.css            Component styles, animations, interactions
    └── index.css          Global styles, CSS variables, design tokens
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

**Git Operations:**
```bash
git add .
git commit -m "Description"
git push              # Push to GitHub main branch
```

## Future Considerations

<!-- OPERATOR PROMPT: Document potential architecture changes.
What might evolve as the project grows? Examples:
- Component library extraction
- CMS integration for content
- Analytics integration
- A/B testing framework

Consider for this portfolio:
-->

**Potential Enhancements:**
- Deploymentto Vercel/Netlify (static hosting)
- Analytics integration (privacy-focused, e.g., Plausible)
- Resume/CV download functionality
- Case study pages (would require routing)
- Contact form (would require backend/service)

**Constraints to Maintain:**
- Keep single-component architecture unless pages exceed 3
- No theme toggle — dark mode is intentional, not configurable
- Preserve console easter egg in any refactoring
- Maintain CSS-only styling approach

<!-- OPERATOR: Add notes about architectural decisions that should persist -->
