# Doctrine Audit

**Files audited:** VECTOR.md, CLAUDE.md, ARCHITECTURE.md
**Project stage:** development
**Audit date:** 2026-04-13

---

## Findings

### DRIFT — high

- `ARCHITECTURE.md:Layers` — Declares single-component architecture (`App.jsx` with hero/about/experience sections). Reality: 8-page multi-route architecture. `src/pages/` contains 9 source files (Home, Work, About, Contact, Hepper, Ministry, Wyss, ShelfReady page components + shared ProjectDetail CSS). The entire layer model is wrong.

- `ARCHITECTURE.md:stack` — `react-router-dom ^7.14.0` is the third production dependency in `package.json` but is absent from the stack table. invest-architecture cannot check imports against an undeclared dependency.

- `ARCHITECTURE.md:Development Principles #1` — States "No routing (single page)" and "Single component architecture (no unnecessary abstractions)." Both are false. React Router v7 wraps the entire app; App.jsx is now a router shell and layout wrapper, not a content component.

- `ARCHITECTURE.md:What Not to Do #4` — "No component extraction unless file exceeds 200 lines. Keep single-component architecture in App.jsx." Directly contradicts the current architecture where 8 page components are the intentional design.

- `ARCHITECTURE.md:Import Direction` — Diagram shows `App.jsx` as the terminal component importing only CSS. Reality: App.jsx imports 8 page components; each page component imports its own CSS file. There is now an additional Pages layer in the import chain.

- `ARCHITECTURE.md:Naming conventions` — References class names `.hero`, `.about`, `.experience`, `.tagline`, `.experience-card`, `.linkedin-button`. None exist. Current names: `.home-hero`, `.hero-headline`, `.what-i-bring`, `.bring-item`, `.project-card`, `.about-bio`, `.contact-item`, etc.

- `VECTOR.md:Visual Language:Color Palette` — Accent declared as `#3B82F6` (blue). Actual token `--color-accent`: `#F5631A` (safety orange). Background declared as `#0A0A0A`; actual `--color-bg`: `#0E0E0F`. Secondary text declared as `#9CA3AF`; actual `--color-secondary`: `#888894`. All three wrong.

- `VECTOR.md:Visual Language:Typography` — Declares Space Grotesk only. Actual: both Space Grotesk (body/UI, weights 300/400/600/700) and Syne (display headings, weights 600/700/800) are loaded in index.html and applied to every page `h1` and hero headline.

- `VECTOR.md:Visual Language:Layout` — "Blue accent dividers: 2px height, 80px/120px width, animated." These do not exist. Replaced by `border-left: 3px solid var(--color-accent)` on headline blocks.

- `VECTOR.md:Constraints` — "Space Grotesk font exclusively" — Syne is now in use. "Single accent color (`#3B82F6`)" — accent is `#F5631A`.

- `CLAUDE.md:Stack Summary` — Missing `react-router-dom`. States "No routing. Single-page application (intentionally)." — no longer true.

- `CLAUDE.md:Key Context #1` — "The entire application lives in `src/App.jsx` — one component with three sections (hero, about, experience)." — App.jsx is the router shell. All content lives in 8 separate page components under `src/pages/`.

- `CLAUDE.md:Key Context #2` — Lists accent `#3B82F6` (blue) and background `#0A0A0A`. Both wrong; see color drift above.

- `CLAUDE.md:Key Context #4` — "Blue accent dividers that animate on load." Dividers don't exist; the animation system uses a terminal cursor, scroll-reveal keyframes, and orange left-border accents on headlines.

---

### STRUCTURE — medium

- `ARCHITECTURE.md:File Structure` — `src/pages/` exists on disk with 9 files (About.css, About.jsx, Contact.css, Contact.jsx, Hepper.jsx, Home.css, Home.jsx, Ministry.jsx, ProjectDetail.css, ShelfReady.jsx, Work.css, Work.jsx, Wyss.jsx) but is entirely absent from the declared file structure tree. invest-architecture will treat all of these as undeclared.

---

### GAP — low

- `VECTOR.md:Constraints` — States "No runtime dependencies beyond React + Vite." `react-router-dom` is now a runtime dependency. Constraint needs updating.

- `VECTOR.md:Future Considerations` — "Case study pages (would require routing)" — Routing is implemented and case study pages exist. Move to current state.

- `CLAUDE.md:What Not to Do #5` — "Space Grotesk only. Do not introduce Inter, Poppins, Montserrat, or Roboto." Syne is now used and should be explicitly permitted alongside Space Grotesk.

- `CLAUDE.md:Commit Format` — Co-Authored-By trailer references `Claude Sonnet 4.5`. Current model is `Claude Sonnet 4.6`.

---

## Summary

- Critical: 0 | High: 11 | Medium: 1 | Low: 4 | Info: 0
- **Doctrine health: UNSOUND** *(at time of audit — all findings resolved same session)*

---

## Resolution (2026-04-13)

All findings resolved:

- ✅ `ARCHITECTURE.md` — Fully rewritten: 5-layer diagram (Entry, Bootstrap, Shell, Pages, Styling), react-router-dom added to stack, file structure tree updated with all page files, import direction updated, "no routing" and "single-component" prohibitions removed, naming conventions updated, animation strategy (animation vs transition separation) documented
- ✅ `VECTOR.md` — Colors updated (accent `#F5631A`, bg `#0E0E0F`, secondary `#888894`); Syne added to typography; blue accent dividers removed; interaction updated; Constraints updated (Syne permitted, react-router-dom acknowledged)
- ✅ `CLAUDE.md` — react-router-dom added to stack table; "No routing" removed; Key Context #1–#4 updated to reflect current architecture, colors, and animation system; What Not to Do #5 updated to permit Syne; Co-Authored-By updated to Sonnet 4.6

**Doctrine health: SOUND** ✅ — Ready to run `/invest-architecture`.
