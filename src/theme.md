# Website Theme Guide (Yellow-Black Bold Business/Construction Style)

Ye guide 4 reference images (infographic roadmap, numbered process card, construction PPT template, heavy-equipment landing page) se nikaale gaye common design language par based hai. Isme colors, typography, layout patterns, aur components sab define hain — inhe seedha CSS variables ki tarah use kar sakte ho.

---

## 1. Color Palette

### Primary Colors
| Name | Hex | Usage |
|---|---|---|
| Brand Yellow / Amber | `#F5B301` – `#FDC500` | Primary accent, buttons, icon backgrounds, highlight bars |
| Deep Yellow / Gold | `#E8A800` | Hover states, gradients, shadows on yellow blocks |
| Charcoal Black | `#1A1A1A` – `#222222` | Dark section backgrounds, headings, contrast blocks |
| Pure Black | `#000000` | Icon outlines, text on yellow, borders |
| Off-White / Light Grey | `#F2F2F2` – `#FAFAFA` | Page background, light sections |
| Pure White | `#FFFFFF` | Cards, text on dark backgrounds |
| Neutral Grey (body text) | `#6B6B6B` – `#8A8A8A` | Paragraph/lorem text, secondary info |

### Suggested CSS Variables
```css
:root {
  --color-primary: #F5B301;
  --color-primary-dark: #E8A800;
  --color-black: #1A1A1A;
  --color-black-pure: #000000;
  --color-bg-light: #F2F2F2;
  --color-white: #FFFFFF;
  --color-text-muted: #6B6B6B;
  --color-border: #E0E0E0;
}
```

**Color ratio (roughly):** 60% white/light-grey background, 30% yellow accents, 10% black for contrast/text/dark sections.

---

## 2. Typography

- **Headings:** Bold, uppercase, sans-serif (e.g. `Poppins`, `Montserrat`, or `Oswald` for a strong construction/industrial feel). Letter-spacing slightly wide for section titles (CONCEPT, RESEARCH, STRATEGY style).
- **Sub-headings / labels:** Semi-bold, smaller size, often uppercase (e.g. "OUR OFFERS", "OUR BEST TEAM").
- **Body text:** Regular weight, grey color, sans-serif (e.g. `Inter`, `Roboto`, `Open Sans`), smaller line-height for compact paragraph blocks.
- **Large display titles** (like "Cakrawala", "HEAVY EQUIPMENT SOLUTIONS"): very large, bold, serif or heavy sans — used for hero/cover slides.
- **Numbers/steps** (01, 02, 03): Extra bold, large, often in black or white, paired next to yellow circular icon.

### Suggested Font Stack
```css
--font-heading: 'Poppins', 'Montserrat', sans-serif;
--font-body: 'Inter', 'Roboto', sans-serif;
--font-display: 'Oswald', 'Bebas Neue', sans-serif; /* for big hero titles */
```

---

## 3. Layout Patterns

### A. Winding Roadmap / Process Timeline (Image 1)
- S-curve/zig-zag road/path connecting steps from "START" to "GOAL/SUCCESS".
- Each step = circular yellow icon badge (black icon inside) placed on the path, with a title + 2-3 line description beside it.
- Alternating left-right text placement as the path curves.
- Dashed center line inside the black road path for a "road" effect.
- Small running figure icon at Start, flag icon at Goal.

### B. Numbered Circular Icon List (Image 2)
- Vertical stacked list of 5 steps.
- Each row: large **bold number** (01–05) + circular icon badge (yellow or black with icon) + heading + short paragraph.
- Split background: diagonal cut between yellow (left) and black/dark textured (right).
- Icons are simple white/black line-style glyphs inside filled circles with a drop shadow / 3D bevel effect.

### C. Card-Grid Business/Corporate Slides (Image 3 - Cakrawala)
- Clean white background slides with a yellow accent bar/shape.
- Grid of image cards (2x2 or 3-column) each with a colored angular "flag" label tag at bottom (e.g. BUILDING, INSTALLATION, PAINTING).
- Full-bleed yellow hero/CTA slides with bold white heading + product/equipment photo cut into the shape.
- Team member cards: photo + name + social icons row.
- Stat blocks: big bold number + small label (e.g. "250+", "67%") on a yellow bar.
- Consistent top navbar: logo left, 3-dot menu icon right, thin divider line.

### D. Modern Landing Page (Image 4 - Equirt)
- Split hero: text/CTA on left, image bleeding to right edge, thin diagonal accent shapes in yellow/orange.
- Rounded-corner image cards (large border-radius ~16-24px) used throughout for photo blocks.
- Dark (near-black) contrast section alternating with cream/light-yellow (`#FDF6E9`-ish) sections.
- Buttons: pill-shaped, dark background with yellow text OR yellow background with black text.
- Icon + short label combo in horizontal feature rows (3-4 items per row).

---

## 4. Common UI Components to Reuse

### Buttons
```css
.btn-primary {
  background: var(--color-primary);
  color: var(--color-black);
  font-weight: 700;
  text-transform: uppercase;
  padding: 12px 28px;
  border-radius: 999px; /* pill shape */
  border: none;
}
.btn-dark {
  background: var(--color-black);
  color: var(--color-primary);
  border-radius: 999px;
  padding: 12px 28px;
}
```

### Icon Badge (circular, used everywhere)
```css
.icon-badge {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 14px rgba(0,0,0,0.15);
}
.icon-badge svg, .icon-badge img {
  color: var(--color-black);
  width: 32px;
  height: 32px;
}
```

### Angular Tag Label (used under image cards)
```css
.tag-label {
  background: var(--color-primary);
  clip-path: polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%);
  padding: 8px 16px;
  font-weight: 700;
  color: var(--color-black);
}
```

### Section Split (diagonal yellow/black or yellow/cream)
```css
.split-section {
  background: linear-gradient(135deg, var(--color-primary) 55%, var(--color-black) 55%);
}
```

---

## 5. Imagery Style
- Construction workers, hard hats, heavy equipment (excavators, trucks) — real photography with warm yellow color grading/overlay.
- Icons: flat, minimal, single-color (black or white) line/solid icons inside circles — bulb (idea), magnifier (research), gear (strategy), people (team), bar-chart (growth), target (goal/success), brain, tools.
- Photos often have a yellow duotone/overlay tint or sit inside rounded/angular cutout shapes rather than plain rectangles.

---

## 6. Overall Mood / Keywords
Bold • Industrial • Energetic • Corporate-but-approachable • High-contrast • Construction/Engineering-inspired • Confident typography • Circular icon motifs • Numbered step storytelling

---

## 7. Quick Reference — Design Tokens (copy-paste ready)

```css
:root {
  /* Colors */
  --color-primary: #F5B301;
  --color-primary-dark: #E8A800;
  --color-black: #1A1A1A;
  --color-bg-light: #F2F2F2;
  --color-white: #FFFFFF;
  --color-text-muted: #6B6B6B;

  /* Typography */
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;

  /* Radius & Shadow */
  --radius-pill: 999px;
  --radius-card: 20px;
  --shadow-soft: 0 6px 20px rgba(0,0,0,0.12);
}
```

---

Isko apne project ke `theme.md` ya `design-system.md` ke naam se rakh sakte ho, aur CSS variables seedhe apni stylesheet me copy kar sakte ho.

---

## 8. Is Theme Ko Poori Website Me Kaise Apply Karein (Step-by-Step)

### Step 1 — Global Setup File Banao
- Ek `theme.css` (ya `_variables.css`) file banao aur usme Section 7 wale saare `:root { }` CSS variables paste kar do.
- Ye file apni website ke **har page** me sabse pehle `<head>` me link karo, taaki saare pages same variables use karein:
```html
<link rel="stylesheet" href="theme.css">
<link rel="stylesheet" href="style.css">
```
- Fonts (Poppins/Inter/Oswald) ko Google Fonts se `<head>` me import karo:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@400;500&family=Oswald:wght@600;700&display=swap" rel="stylesheet">
```

### Step 2 — Base Styles Set Karo
Body, headings, aur links ko globally theme se link karo taaki sab pages automatically consistent rahein:
```css
body {
  font-family: var(--font-body);
  color: var(--color-black);
  background: var(--color-bg-light);
}
h1, h2, h3, h4 {
  font-family: var(--font-heading);
  color: var(--color-black);
  text-transform: uppercase;
}
a { color: var(--color-primary-dark); }
```

### Step 3 — Har Section Ko Theme Pattern Assign Karo
Apni website ke sections ko upar wale 4 layout patterns (Section 3) me se match karo:

| Website Section | Konsa Pattern Use Karein |
|---|---|
| Homepage Hero / Banner | Pattern D (Split hero, yellow+dark contrast, rounded image cards) |
| "How It Works" / Process Steps | Pattern A (winding roadmap) ya Pattern B (numbered circular list) |
| Services / Products Grid | Pattern C (card-grid with angular tag labels) |
| About Us / Stats | Pattern C ke stat-block style (bold number + yellow bar) |
| Team Page | Pattern C ke team-card style (photo + name + socials) |
| Footer | Dark/black background (`--color-black`) with yellow accent links/icons |

### Step 4 — Reusable Components Har Jagah Use Karo
Section 4 ke `.btn-primary`, `.btn-dark`, `.icon-badge`, `.tag-label`, `.split-section` classes ko ek common `components.css` file me rakho aur jahan bhi button/icon/card chahiye, wahi class lagao — isse pura site visually consistent rahega.

### Step 5 — Navbar & Buttons Consistent Rakho
- Navbar: white/light background, logo left, menu right, thin bottom border — sabhi pages me same rakho.
- Saare CTA buttons `.btn-primary` (yellow pill) ya `.btn-dark` (black pill) use karein — kabhi random colors na dalo.

### Step 6 — Imagery Consistent Rakho
- Har photo pe halka yellow-tint overlay ya rounded/angular crop (Section 5) apply karo, taaki real photos bhi theme ke sath match karein.
- Icons hamesha single-color (black/white) rakho, circular yellow badge ke andar (`.icon-badge` class).

### Step 7 — Responsive Check
- Mobile pe winding-roadmap (Pattern A) ko simple vertical stacked list me convert kar do (curve lines hata do, seedha top-to-bottom list rakho).
- Split-hero (Pattern D) mobile pe stack ho jaye — text upar, image niche.

### Step 8 — Final Consistency Checklist
- [ ] Saare pages same `theme.css` import kar rahe hain
- [ ] Headings sab `--font-heading` use kar rahe hain, body text `--font-body`
- [ ] Buttons sirf 2 style me hain: yellow-pill aur black-pill
- [ ] Icons circular yellow badge ke andar hi hain, alag style nahi
- [ ] Color ratio maintain hai: ~60% light bg, 30% yellow, 10% black
- [ ] Footer dark background ke saath yellow accents use kar raha hai

Ye steps follow karke pura website ek hi consistent "Yellow-Black Bold" theme me dikhega, jaisa reference images me tha.