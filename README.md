# HSS Data Design System

The authoritative design system for all HSS Data applications — dashboards, components, data visualizations, and marketing brand communications.

---

## Overview

This repository contains the HSS Data Design System, comprising:

- **Design tokens** — Primitives (colors, spacing, radii) and semantic tokens (light/dark mode) as CSS custom properties
- **Typography scale** — 20 text styles from `display-2xl` (48px) to `code-label` (11px)
- **Component specs** — Buttons, cards, inputs, tabs, alerts, badges, chips, toggles, and Data-Stat KPI cards
- **Navigation patterns** — App header/footer, sidebar, breadcrumbs for desktop (1440px) and mobile (375px)
- **Dashboard layout anatomy** — Canonical section order and responsive grid breakpoints
- **Data visualization** — 7-color palette, chart typography, and best practices
- **Accessibility** — WCAG 2.1 AA contrast ratios, touch targets, focus states, color-blind safe design
- **Dark mode** — Full light/dark theme support via semantic tokens
- **Marketing Brand System** — Brand identity, logo usage, tone of voice, marketing colors, co-branding, and collateral patterns

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the development environment.

---

## Key Files

| File | Purpose |
|------|---------|
| `claudedesign.md` | Authoritative machine-readable design system reference (tokens, components, patterns, marketing) |
| `hss-design-system-interactive-styleguide.html` | Interactive HTML styleguide with all tokens, components, and marketing brand system visualized |
| `README.md` | This file — project overview |

### Claude Skills (AI Reference)

| Skill | Path | Triggers On |
|-------|------|-------------|
| `hss-design-system` | `.claude/skills/hss-design-system/SKILL.md` | UI, components, dashboard, frontend, CSS, React |
| `hss-marketing` | `.claude/skills/hss-marketing/SKILL.md` | Marketing, brochure, flyer, brand collateral, co-brand, ERG |

---

## Figma Source

**HSS Data — Design Library** (Figma file) contains:

- Components / Patterns (light mode)
- Components / Patterns — Dark Mode
- Components / Core + Core — Dark Mode
- Components / Data Viz + Data Viz — Dark Mode
- Token Export Preview
- Accessibility guidelines
- **Marketing Brand System** — Brand foundation, tone of voice, logo, colors, typography, descriptors, co-branding, ERGs, collateral patterns, and desktop/mobile HSS homepage mockups

---

## Design Tokens

### Primitives

All primitives live in the `:root` scope as CSS custom properties.

| Category | Examples |
|----------|----------|
| **Blue (Brand)** | `--color-blue-500: #0074BC` (primary), `--color-blue-800: #264583` (indigo) |
| **Neutral** | `--neutral-white: #FFFFFF` through `--neutral-slate-900: #192328` |
| **Accent** | Gold, Green, Red, Amber, Purple, Teal, Cyan |
| **Data Viz** | 7-color palette: `--dataviz-1` through `--dataviz-7` |
| **Alert** | `--alert-red`, `--alert-orange`, `--alert-yellow`, `--alert-green`, `--alert-blue` |
| **Spacing** | `--space-0` (0px) through `--space-24` (96px), 4px base unit |
| **Radius** | `--radius-none` (0px) through `--radius-full` (9999px) |

### Semantic Tokens

Semantic tokens resolve differently in light and dark mode via `[data-theme]` selectors.

| Category | Key Tokens |
|----------|------------|
| **Backgrounds** | `--bg-base`, `--bg-surface`, `--bg-elevated`, `--bg-brand`, `--bg-invert` |
| **Text** | `--text-primary`, `--text-secondary`, `--text-tertiary`, `--text-brand` |
| **Borders** | `--border-default`, `--border-strong`, `--border-brand`, `--border-focus` |
| **Actions** | `--action-primary`, `--action-primary-hover`, `--action-secondary`, `--action-destructive` |
| **Feedback** | `--success-bg/text`, `--error-bg/text`, `--warning-bg/text`, `--info-bg/text` |
| **Header/Footer** | `--header-bg`, `--footer-bg`, `--footer-brand-text` |

### Token Naming Convention

- **Primitives:** `--color-{hue}-{shade}`, `--space-{value}`, `--radius-{size}`
- **Semantic:** `--{category}-{role}` (bg, text, border, action, success, error, warning, info)
- Never reference primitives directly in components — always use semantic tokens
- Token flow: Primitive value -> Semantic alias -> Component usage

---

## Typography

| Family | Usage |
|--------|-------|
| **Inter** | All UI text (primary brand typeface) |
| **JetBrains Mono** | Code blocks, token labels |
| **Source Sans Pro** | Data table cells |

20 text styles from `display-2xl` (48px/800w) through `code-label` (11px/500w). See `claudedesign.md` for the full scale.

---

## Components

| Component | Key Specs |
|-----------|-----------|
| **Buttons** | Primary, secondary, ghost, destructive. Radius 16px, height 40px, font-weight 600 |
| **Cards** | bg-surface, 1px border-default, radius 12px, padding 20px |
| **Inputs** | Height 40px, radius 8px, focus ring 2px action-primary |
| **Tabs** | Pill-style container, radius 16px, active/inactive states |
| **Alerts** | Success, error, warning, info — semantic bg/text pairs |
| **Badges** | Pill badges with status variants (approved, pending, rejected) |
| **Data-Stat Card** | KPI display: label + value + trend, sm/md/lg sizes |
| **Chips** | Toggleable filter chips, radius-full |
| **Checkboxes** | 18x18px, 2px border, brand-blue checked state |
| **Switch Toggle** | 44x24px track, 18px thumb |

---

---

# Marketing Brand System

> **Separate subsystem** for marketing collateral, print design, advertising, and consumer/patient-facing HSS communications. For the full reference, see the `hss-marketing` Claude skill or the Marketing Brand System section in the interactive styleguide.

The marketing brand subsystem provides authoritative guidelines for all HSS marketing and brand communications, sourced from the HSS Brand Identity Guidelines (January 2026).

### Scope

| Context | System |
|---------|--------|
| Application UI, dashboards, data-viz | HSS Data Design System (tokens, components, dark mode) |
| Marketing collateral, print, brand comms | HSS Marketing Brand System (logo, tone of voice, print colors, co-branding) |
| Consumer/patient-facing digital | Both — UI tokens from Data System, brand voice from Marketing |

### Brand Foundation

- **Purpose:** To help people get back to what they need and love to do better than any other place in the world
- **Brand Essence:** Better possibilities for quality of life through better quality of movement
- **Tagline:** "Choose Better. Move Better." — always ALL CAPS, HSS Blue
- **Values:** Diversity, Excellence, Gratitude, Innovation, Integrity, Passion, Teamwork

### Tone of Voice

| We Are | We Are Not |
|--------|------------|
| Knowledgeable | Boastful |
| Personable | Playful |
| Direct | Verbose |
| Approachable | Clinical |
| Confident | Alarming |

**Guardrails:** Speak with confidence (no boasting), speak in simple terms (no jargon), don't scaremonger (promote positively).

### Logo

- **HSS Monogram** always in HSS Blue (`#0074BC` digital / PMS 3005 print)
- Clear space = 1/4 logo height (X) on all sides
- Minimum size: 0.5" / 36px

#### Background Control

| Type | Background | Notes |
|------|------------|-------|
| **Preferred** | HSS Cool Neutral (`#F0F5F7`) | Logo in HSS Blue on neutral background |
| **Alternative** | Light photograph | Logo in HSS Blue — background must be light, must not distract |
| **Alternative** | HSS Blue (`#0074BC`) | Logo in HSS Blue with white outline |
| **Alternative** | White (`#FFFFFF`) | Logo in HSS Blue on white |

#### Logo and Taglines

| Lockup | Description |
|--------|-------------|
| HSS + **HOSPITAL FOR SPECIAL SURGERY** | Full name lockup |
| HSS + **#1 IN ORTHOPEDICS** | Ranking lockup |
| HSS + **CHOOSE BETTER MOVE BETTER** | Tagline lockup |
| HSS + **Lerner Children's Pavilion** | Pediatric unit lockup |

- **Positive lockups** (HSS Blue on light background) — preferred
- **Reverse lockups** (white on HSS Blue background) — dark backgrounds only
- Never distort, recolor, add elements, or use old versions

### Marketing Color Palette

#### Primary
| Name | Print (SPOT) | Digital (HTML) |
|------|-------------|----------------|
| HSS Blue | PMS 3005 | `#0074BC` (ADA) / `#0081C8` (print) |
| HSS Cool Neutral | 10% PMS 5435 | `#F0F5F7` |
| White | — | `#FFFFFF` |

#### Secondary
| Name | Print (SPOT) | Digital (HTML) |
|------|-------------|----------------|
| HSS Cyan | PMS 2995 | `#00ADE6` |
| HSS Dark Blue | PMS 7687 | `#264583` |
| Black | Process Black | `#000000` |

#### Tertiary
| Name | Print (SPOT) | Digital (HTML) |
|------|-------------|----------------|
| HSS Gold | PMS 7752 | `#D4B640` |
| HSS Dark Gray | PMS 5415 | `#5F849C` |
| HSS Green | PMS 369 | `#68A42D` (ADA) |
| HSS Teal | PMS 7710 | `#00A4AF` (ADA) |
| HSS Light Gray | PMS 5435 | `#A2BACA` |

#### Digital-Only
| Name | HTML |
|------|------|
| Footer Gray | `#30333E` |
| Warm Neutral | `#F5F5F5` |
| HSS Blue (graphics) | `#0077C8` |

### Marketing Typography

| Role | Font | Notes |
|------|------|-------|
| Primary headline | Inter Bold, HSS Blue | ALL CAPS for advertising |
| Secondary headline | Inter Medium | Upper/lower case |
| Subhead | Inter Medium or Bold | — |
| Body copy | Inter Regular | — |
| Boilerplate | Sofia Sans Condensed Italic | Legal, footnotes |
| Fallback (MS apps) | Arial | PowerPoint, Word only |

#### ADA Compliance (Digital)
| Color | Min on White | Min Reversed |
|-------|-------------|--------------|
| HSS ADA Blue `#0074BC` | 12pt regular | 12pt regular |
| HSS Dark Blue `#264583` | 12pt regular | 12pt regular |
| HSS Blue `#0077C8` | 18pt bold | 18pt bold |
| HSS ADA Green `#68A42D` | 18pt bold | 18pt bold |
| HSS ADA Teal `#00A4AF` | 18pt bold | 18pt bold |

**Non-compliant for text:** HSS Cyan, HSS Teal (brand), HSS Cool Neutral, HSS Green (print), HSS Light Gray, HSS Warm Neutral — graphics/icons only.

### HSS Organization

- B2B Business Areas: Education Institute, Research Institute, Innovation Institute
- Consumer Facing: Hospital for Special Surgery, Locations (Westchester), Departments & Services (Spine)
- Logos can only be created with permission from HSS Marketing

### Business Descriptors

- Format: **HSS** (Inter Black) + **Business Area** (Inter Medium)
- Always in HSS Blue on light backgrounds, white on dark
- Hospital for Special Surgery: **HSS | Hospital for Special Surgery** (vertical line always required)
- Never lock up with HSS logo (signage exception)
- Never use ALL CAPITALS for business/service or city name

### Departments & Services

- Public-facing departments/services use descriptor lock-up similar to business descriptor
- On business cards, department is part of Hospital for Special Surgery address
- On consumer-facing, descriptor used as sign-off (e.g., HSS Spine, HSS Sports Medicine Institute)

### Locations

- Wholly owned: signage lockup allowed (e.g., HSS Westchester)
- All other materials: HSS monogram as hero, location in text only
- Contact brandguidelinequestions@hss.edu for logo questions as nomenclature evolves

### Special Programs

- Donor/honoree programs may have special lockups (e.g., Lerner Children's Pavilion)
- HSS Perform: B2B offering direct to employers
- Internal programs (e.g., Stronger with HSS) require HSS Marketing permission

### Co-Branding

| Type | Language | Example |
|------|----------|---------|
| Collaboration | "in collaboration with" or "with" | HSS Orthopedics in collaboration with Stamford Health |
| Collaboration | "in collaboration with" | HSS in collaboration with Lima Corporate |
| At-location | "at" | HSS at NCH |
| Powered by | "Powered by HSS" | RightMove, CarePathways |

**Never use "partnership"** — does not meet legal definition, has risk/liability implications.

Logo size parity required: approximate area of HSS monogram = approximate area of co-brand logo, separated by vertical line.

### Photography

- **People on the Move:** Photography is used to represent people enjoying their lives and the freedom of movement that we provide to them. Always use color imagery, in clear focus and crop appropriately to display the subject in a flattering way. Images should always be aspirational.
  - `images/photography/people-on-the-move/` — woman running through arches, man moving joyfully in city, girl kicking soccer ball
- **Families and Community:** Images can include people enjoying their everyday lives. Lives that we've enhanced by helping them be their best selves.
  - `images/photography/families-and-community/` — mother and child surfing, group doing tai chi in park, two women walking in city
- **HSS in Action:** Shows our professionals in action, doing what they do best. Avoid overly posed images, and focus on capturing a moment in the lives of our dedicated staff. Ensure that all logos that may appear on clothing or equipment are blurred.
  - `images/photography/hss-in-action/` — surgical team, surgeons using VR headsets, medical team in discussion
- **HSS Employee Community:** Our HSS family represents who we are as an organization unlike anything else. Showing employees enjoying different aspects of their lives is very important.
  - `images/photography/employee-community/` — employee with marathon medal, employees at baseball game, employees at event booth
- Always use licensed or approved imagery; never take images from the internet without confirming licensing
- Stock photography can be licensed for diverse community representation

### Infographics and Icons

A variety of stock icons and illustrations can be utilized to emphasize meaning and add interest. Two-color icons in HSS Blue and HSS Dark Blue are available for use. Other icons can be created as long as the style remains consistent.

Reference: `images/icons/hss-icon-grid.png`

### Illustration — Patient Facing

Illustration is a good way to communicate with patients in a friendly and supportive way. Developed specifically for patient videos and brochures. These illustrations would **not** be appropriate for clinical or educational materials for professional audiences.

References: `images/illustrations/orthopedic-cycle-diagram.png`, `images/illustrations/patient-knee-anatomy.png`

### Advertising

- **Headlines:** Always ALL CAPS, bold, confident messaging
- **Market designation required:** acceptable formats — stacked (NY / NJ / CT / FL) or inline (NY | NJ | CT | FL)
- Designation must appear near the HSS logo
- Backgrounds can be HSS Cool Neutral in color

### Employee Resource Groups (ERGs)

| ERG | Name |
|-----|------|
| BEST | Black Employees Standing Together |
| HOLA | Hispanic Organization for Leadership & Advancement |
| WISE | Women Inspiring Success & Excellence |
| HAPI | HSS Asian & Pacific Islanders |
| LGBTQ+ | LGBTQ+ Standing Together |

- Internal use only (exception: community events/parades)
- Preferred backgrounds: white, black
- Never modify colors, rearrange elements, or add graphics

### Collateral Patterns

| Type | Key Rules |
|------|-----------|
| **Flyers** | HSS Blue focus, logo prominent, bold Inter headlines, relatable photography |
| **Brochures** | 1, 2, or 3 panels, standard brand typography |
| **Postcards** | Mailed or handouts, brand elements required |
| **Business Cards** | Approved templates only (standard, 3-line, 5-line, QR code variants) |
| **Presentations** | Templafy templates, widescreen/letter, Arial fallback for MS apps |
| **Email Newsletters** | Logo prominent, bold headlines, photography with purpose |
| **Branded Merchandise** | HSS monogram only (no department branding) |
| **Advertising** | ALL CAPS headlines, market designation (NY/NJ/CT/FL) required |

### Marketing Color -> Data Token Mapping

| Marketing Name | Marketing Hex | Data Token | Data Hex |
|----------------|---------------|------------|----------|
| HSS Blue (print) | `#0081C8` | `blue-500` | `#0074BC` |
| HSS Dark Blue | `#264583` | `blue-800` | `#264583` |
| HSS Cyan | `#00ADE6` | `cyan-60` | `#00ADE6` |
| HSS Cool Neutral | `#F0F5F7` | `slate-50` | `#ECF1F4` |
| HSS Gold | `#D4B640` | `dataviz-5` | `#D4B640` |
| HSS Green (ADA) | `#68A42D` | `green-500` | `#72B431` |
| HSS Teal (ADA) | `#00A4AF` | `teal-60` | `#00AEBA` |

---

## Accessibility

- **WCAG 2.1 AA** compliance required
- Normal text: 4.5:1 contrast minimum
- Large text (18px+ or 14px+ bold): 3:1 minimum
- Touch targets: 44x44px minimum, 8px spacing
- Focus ring: `outline: 2px solid var(--action-primary); outline-offset: 2px;`
- Never rely on color alone — pair with icons, patterns, or text labels

---

## Contact

For brand questions, artwork requests, or co-branding approval: **brandguidelinequestions@hss.edu**
