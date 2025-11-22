# Design System – Experimental Workshop (v2)

This document defines the visual language for my site: an **experimental workshop** at the intersection of engineering, radiation oncology, and AI.

---

## 1. Brand Keywords

- experimental
- builder / tinkerer
- cross-disciplinary (engineering + medicine)
- technically sharp
- minimalist, not cluttered
- reflective, curious

Tone: structured and rigorous, but not sterile; it should feel like a place where ideas and prototypes live.

---

## 2. Color Palette

Core background and text:

- **Background (lab bench)**: `#020617` (very dark navy/black)
- **Panel background**: `#0B1120`
- **Primary text**: `#E5E7EB` (off-white)
- **Muted text**: `#9CA3AF` (slate grey)

Accents:

- **CT Green / Experiment accent**: `#00FF88`
- **Cyan / AI accent**: `#34D8FF`
- **Teal / secondary accent**: `#22C55E` or `#14B8A6`
- **Border lines**: `rgba(148, 163, 184, 0.5)`

Usage:

- CT green and cyan are for **highlights only**: badges, callout borders, icons.
- Panels and cards live on `#0B1120` with subtle gradients or blueprint lines.
- No more than 2 accent colors per screen.

---

## 3. Typography

**Title / display font**

- `Playfair Display`, fallback `Georgia`, `serif`
- Used for:
  - Page titles
  - Section headings (`h1`, `h2` in long-form content)

**Body font**

- `IBM Plex Sans`, fallback system UI
- Used for:
  - Main paragraphs
  - Lists, captions

**Monospace / technical**

- `JetBrains Mono`, fallback `Roboto Mono`, `monospace`
- Used for:
  - Inline code (`code`)
  - HUD-like labels
  - Any “module” labels, e.g. `MODULE · LIT REVIEW`

---

## 4. Layout & Components

### Global

- Max content width: **900–960px**
- Centered column
- Generous vertical spacing (1.6–2rem between major sections)
- Left-aligned text, no center-aligned paragraphs

### Components

1. **Hero panel**
   - Dark panel with subtle radial gradients and faint grid
   - Contains:
     - small badge
     - title + subtitle + meta
     - optional visual (image or abstract “reactor/skull” circle)

2. **Badge**
   - Small pill with uppercase mono text
   - Example: `AI · RADIATION ONCOLOGY · EXPERIMENTS`
   - Border in CT green, soft cyan text

3. **Cards**
   - Background: `#0B1120`
   - Border: `rgba(148, 163, 184, 0.5)`
   - Rounded corners (0.75–0.9rem)
   - Used for:
     - project tiles
     - post previews
     - index lists

4. **Callout boxes**
   - For “Key Takeaways” or “Future Directions”
   - Dark panel with a colored left border and a soft gradient overlay
   - Title (`h2`) in Playfair

---

## 5. Collections & Their Visual Variants

- `_phantom` – Phantom Project
  - Accent leaning slightly towards CT green
  - Might feature more physical/3D printing imagery.

- `_oilsands` – Occupational / public health
  - Slightly more muted colors (cyan/teal) to distinguish from AI/LitReview.

- `_litreview` – AI & Radiation Oncology Lit Reviews
  - Uses **cyan + CT green** accents
  - Experimental workshop hero panel and module label
  - Callouts: Key Takeaways, Future Directions

All collections share:
- same background
- same typography
- same base card style

---

## 6. Tone of Writing (for myself)

- Explain ideas like I’m walking a colleague through an experiment.
- Mix:
  - evidence and references
  - my own engineering intuition and questions
- Don’t hide the “work in progress” aspect; this is a workshop, not a finished textbook.

---

_Last updated: v2 initial draft_
