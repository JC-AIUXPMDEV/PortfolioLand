# Architecture Audit

**Scope:** `src/` — all source files
**Doctrine source:** ARCHITECTURE.md (last updated 2026-04-13)
**Audit date:** 2026-04-13
**Files scanned:** 17 (main.jsx, App.jsx, App.css, index.css, pages/Home.jsx, pages/Home.css, pages/Work.jsx, pages/Work.css, pages/About.jsx, pages/About.css, pages/Contact.jsx, pages/Contact.css, pages/Hepper.jsx, pages/Ministry.jsx, pages/Wyss.jsx, pages/ShelfReady.jsx, pages/ProjectDetail.css)

---

## Violations

### TOKENS — medium

All findings are hardcoded spacing values where exact token equivalents exist in `src/index.css`. No hardcoded colors were found outside `src/main.jsx` (console.log exception — documented and intentional per ARCHITECTURE.md).

**`src/pages/Home.css`**
- `:5` — Hardcoded `padding-top: 6rem` on `.home-hero`. Use `var(--spacing-3xl)`.
- `:6` — Hardcoded `padding-bottom: 6rem` on `.home-hero`. Use `var(--spacing-3xl)`.
- `:7` — Hardcoded `margin-bottom: 3rem` on `.home-hero`. Use `var(--spacing-xl)`.
- `:91` — Hardcoded `padding: 1rem 2rem` on `.cta-button`. Use `var(--spacing-sm) var(--spacing-lg)`.
- `:126` — Hardcoded `margin-bottom: 1.5rem` on `.section-header`. Use `var(--spacing-md)`.
- `:127` — Hardcoded `padding-bottom: 1.5rem` on `.section-header`. Use `var(--spacing-md)`.
- `:165` — Hardcoded `padding: 1.5rem 0` on `.bring-item`. Use `var(--spacing-md) 0`.
- `:252` — Hardcoded `padding: 1.5rem 0` on `.bring-item` (desktop breakpoint). Use `var(--spacing-md) 0`.

**`src/pages/Work.css`**
- `:5` — Hardcoded `padding-top: 6rem` on `.work-header`. Use `var(--spacing-3xl)`.
- `:7` — Hardcoded `padding-bottom: 3rem` on `.work-header`. Use `var(--spacing-xl)`.

**`src/pages/About.css`**
- `:4` — Hardcoded `padding-top: 6rem` on `.about-header`. Use `var(--spacing-3xl)`.
- `:5` — Hardcoded `padding-bottom: 3rem` on `.about-header`. Use `var(--spacing-xl)`.
- `:53` — Hardcoded `margin-bottom: 1.5rem` on `.about-section-header`. Use `var(--spacing-md)`.
- `:54` — Hardcoded `padding-bottom: 1.5rem` on `.about-section-header`. Use `var(--spacing-md)`.
- `:159` — Hardcoded `padding: 1rem 2rem` on `.about-cta`. Use `var(--spacing-sm) var(--spacing-lg)`.

**`src/pages/Contact.css`**
- `:4` — Hardcoded `padding-top: 6rem` on `.contact-header`. Use `var(--spacing-3xl)`.
- `:5` — Hardcoded `padding-bottom: 3rem` on `.contact-header`. Use `var(--spacing-xl)`.

**`src/pages/ProjectDetail.css`**
- `:4` — Hardcoded `padding-top: 6rem` on `.project-detail`. Use `var(--spacing-3xl)`.

---

### INFO — unused keyframes

All four are defined in `src/App.css` but referenced nowhere in the codebase. Likely remnants of the prior single-page design (blue accent dividers, entrance animation experiments). Safe to remove.

- `src/App.css:17` — `@keyframes fadeIn` defined but unused.
- `src/App.css:39` — `@keyframes heroEntrance` defined but unused.
- `src/App.css:50` — `@keyframes lineGrow` defined but unused.
- `src/App.css:55` — `@keyframes lineGrowDesktop` defined but unused.

---

## Resolution (2026-04-13)

All findings resolved same session:

- ✅ `src/pages/Home.css` — 8 spacing values replaced with tokens (spacing-3xl, spacing-xl, spacing-md, spacing-sm, spacing-lg)
- ✅ `src/pages/Work.css` — 2 spacing values replaced with tokens
- ✅ `src/pages/About.css` — 5 spacing values replaced with tokens
- ✅ `src/pages/Contact.css` — 2 spacing values replaced with tokens
- ✅ `src/pages/ProjectDetail.css` — 1 spacing value replaced with token
- ✅ `src/App.css` — 4 unused keyframes removed (fadeIn, heroEntrance, lineGrow, lineGrowDesktop)

## Summary

- High: 0 | Medium: 0 | Low: 0 | Info: 0
- **Architecture health: CLEAN** ✅
