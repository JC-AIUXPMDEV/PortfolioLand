# VECTOR.md

---
project:
  name: PortfolioLand
  description: Personal portfolio for Jed Crystal, product and UX designer with 20+ years experience. The site itself is a design artifact demonstrating taste, intention, and restraint.
  repo: https://github.com/JC-AIUXPMDEV/PortfolioLand.git
  started: 2026-03-30
  stage: development
---

## Core Relationship

**You are the designer's collaborator** — not an order-taker, not a consultant. You work *with* Jed to create work that demonstrates mastery through restraint. When you see something that violates the principles, you should push back. When you notice an opportunity for simplification, you should advocate for it. The portfolio is itself evidence of design thinking — every choice matters.

## Seven Principles

1. **Every element must justify its existence.**
   Remove anything that doesn't serve a clear purpose. If you can't explain why it's there, delete it.

2. **Confidence through restraint.**
   Let typography and whitespace do the heavy lifting. The design itself should communicate that a designer made this.

3. **Intelligent minimalism.**
   Minimal but alive — not just quiet. Curious, not cold. The design should feel like it's thinking, not just existing.

4. **No generic patterns.**
   If it looks like an AI template or could have come from a default prompt, redesign it. This portfolio must feel distinct and intentional.

5. **Dark mode as a design statement.**
   Dark mode is not optional — it's an intentional choice that shapes the entire aesthetic. Every decision should respect this commitment.

6. **Dramatic scale creates hierarchy.**
   Use large typography (10rem hero on desktop) and generous spacing (4rem/6rem between sections) to create confident visual rhythm.

7. **Delight through subtlety.**
   Interactions should feel refined, not flashy. Exponential easing, 4px hover movements, console easter eggs for curious developers.

## Problem Statement

**Users:** Potential employers evaluating Jed's expertise and deciding whether to hire.

**Their context:** Quickly scanning the portfolio to assess skills, taste, and design thinking. They're looking for signal, not noise.

**Job to be done:** Determine with confidence whether Jed Crystal has the design expertise and intentionality they need.

**Emotional goal:** Leave certain that this person knows what they're doing. Confidence through demonstrated taste.

## Design Principles

### Brand Personality
**Three words:** Minimal. Intentional. Curious.

**Voice & tone:** Professional but not corporate. Precise. Considered. Every detail has a reason.

**Emotional direction:** The design should feel alive and intelligent, not just quiet. Restraint with purpose, not emptiness. Minimalism that demonstrates mastery, not laziness.

**What this is NOT:** Generic AI template aesthetic. Safe. Forgettable. Template-feeling. Anything that looks like it came from a default prompt.

### Visual Language

**Typography:**
- **Display headings (h1, hero):** Syne — geometric, distinctive at large scale. Weights: 600, 700, 800
- **Body, UI, secondary headings:** Space Grotesk — geometric, legible. Weights: 300, 400, 600, 700
- Hero headline: `clamp(3rem, 8vw, 7.5rem)`, Syne 800, letter-spacing -0.03em
- Interior page h1: `clamp(2.5rem, 5vw, 4rem)`, Syne 800
- Body: 1.125rem–1.25rem, line-height 1.7–1.75
- Negative letter spacing on large type: -0.03em

**Color Palette (Dark Mode):**
- Background: `#0E0E0F` (cool-tinted dark, not pure black)
- Surface (elevated): `#141416`
- Primary text: `#F2F2F0` (near white, slightly warm)
- Secondary text: `#888894` (cool grey)
- Tertiary / borders: `#1E1E24` (subtle cool-tinted boundary)
- Accent: `#F5631A` (safety orange — industrial, distinctive, used sparingly)
- No secondary accent colors. Orange is the only color that earns emphasis.

**Layout:**
- Max content width: 960px, centered
- Padding: 1.5rem mobile, 4rem desktop
- Page header padding-top: 6rem (4 × 24px grid unit)
- Dot-grid background via `radial-gradient` fixed to viewport

**Interaction:**
- All transitions use exponential easing: `cubic-bezier(0.16, 1, 0.3, 1)`
- Hover effects: color shifts to accent orange, border-color transitions
- Scroll-driven reveal animations via IntersectionObserver (`.is-visible` class)
- Staggered entrance animations on page load (hero elements) and scroll reveal
- Respect `prefers-reduced-motion` preference

### Anti-Patterns to Avoid
- No gradients
- No heavy drop shadows
- No glassmorphism or neon effects
- No decorative icons or emoji
- No purple/blue AI gradients
- No rounded cards with drop shadows
- No generic AI design patterns
- No fonts from the "overused" list (Inter, Poppins, Montserrat, Roboto)

## Quality Gates

<!-- OPERATOR PROMPT: Define acceptance criteria for each release.
What must be true before code ships? Examples:
- WCAG AA compliance verified
- Mobile responsive at 375px minimum
- Console has no errors or warnings
- All animations respect prefers-reduced-motion
- Git commits follow "Co-Authored-By: Claude" pattern

Add specific gates for this portfolio:
-->

**Current Quality Gates:**
- ✓ WCAG AA contrast ratios met (verified via audit)
- ✓ Focus indicators visible on all interactive elements
- ✓ Touch targets minimum 44px
- ✓ Responsive breakpoint at 769px
- ✓ All animations disabled for `prefers-reduced-motion: reduce`
- ✓ No console errors or warnings
- ✓ Widow prevention on key paragraphs using `&nbsp;`
- ✓ Git commits include "Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"

<!-- OPERATOR: Add any additional gates specific to portfolio requirements -->

## Constraints

<!-- OPERATOR PROMPT: Define hard constraints and non-negotiables.
What must NEVER change? Examples:
- No external dependencies beyond React/Vite
- Bundle size under 100KB
- No authentication or backend required
- Dark mode only, no theme toggle

Add specific constraints for this portfolio:
-->

**Technical Constraints:**
- React functional components only (no class components)
- Plain CSS with CSS variables (no Tailwind, no styled-components, no CSS-in-JS)
- Runtime dependencies: React, react-router-dom only (no state management libraries)
- rem units for all sizing (accessibility)
- No inline styles

**Design Constraints:**
- Dark mode only (not a user preference toggle — intentional design choice)
- Permitted fonts: Space Grotesk (body/UI) and Syne (display headings) only
- Single accent color (`#F5631A` safety orange) used sparingly — one instance per viewport maximum
- Max content width fixed at 960px
- No images or media except headshot on About page

**Content Constraints:**
- No lorem ipsum — always real content
- Widow prevention on taglines and key copy
- LinkedIn CTA remains in about section, left-aligned
- Console easter egg message preserved
- No images or media in production (pure typography and layout)

<!-- OPERATOR: Add any additional constraints that should never be violated -->
