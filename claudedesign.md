# HSS Data Design System — Claude Reference

Use this file as the authoritative design system reference when building UI for any HSS Data application. All tokens, components, patterns, and guidelines below are sourced from the HSS Data Design Library (Figma) and the styleguide.html.

---

## Table of Contents

### Part 1 — Application Design System
- [Fonts](#fonts)
- [Typography Scale](#typography-scale)
- [Primitive Colors](#primitive-colors)
- [Semantic Tokens (Light / Dark)](#semantic-tokens-light--dark)
- [Spacing Scale](#spacing-scale)
- [Border Radius](#border-radius)
- [Components](#components)
- [Navigation Patterns](#navigation-patterns)
- [Dashboard Layout Anatomy](#dashboard-layout-anatomy)
- [Iconography](#iconography)
- [Urgency Color System](#urgency-color-system)
- [Accessibility Requirements](#accessibility-requirements-wcag-21-aa)
- [Dark Mode Rules](#dark-mode-rules)
- [Data Visualization Guidelines](#data-visualization-guidelines)
- [Figma Source Files](#figma-source-files)
- [Token Naming Convention](#token-naming-convention)

### Part 2 — Marketing Brand System
- [HSS Marketing Brand Subsystem](#hss-marketing-brand-subsystem) (scope, brand foundation, tone of voice)
- [Logo Rules](#logo-rules-quick-reference)
- [HSS Organization](#hss-organization)
- [Marketing Color Palette](#marketing-color-palette)
- [Marketing Typography](#marketing-typography)
- [Typographic Style Rules](#typographic-style-rules)
- [Business Descriptors](#business-descriptors)
- [Departments & Services](#departments--services)
- [Locations](#locations)
- [Special Programs](#special-programs)
- [Co-Branding](#co-branding-quick-reference)
- [Photography](#photography)
- [Advertising](#advertising)
- [Collateral Patterns](#collateral-patterns)
- [Physician Website Rules](#physician-website-rules)
- [ERG Logos](#erg-logos)
- [Marketing Color → Data Token Mapping](#marketing-color--data-token-mapping)

---

## Fonts

- **Primary:** Inter (sans-serif) — all UI text
- **Code:** JetBrains Mono (monospace) — code blocks, token labels
- **Data tables:** Source Sans Pro — cell data in data-dense views

---

## Typography Scale

| Token | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| `display-2xl` | 48px | 800 | 52.8px | -0.03em | Hero headlines |
| `display-xl` | 36px | 700 | 39.6px | -0.02em | Page titles |
| `display-lg` | 30px | 700 | 36px | -0.02em | Section heroes |
| `heading-2xl` | 28px | 700 | 36.4px | -0.01em | Large headings |
| `heading-xl` | 24px | 600 | 31.2px | -0.01em | Section headings |
| `heading-lg` | 20px | 600 | 28px | — | Card titles |
| `heading-md` | 18px | 600 | 25.2px | — | Subsection headings |
| `heading-sm` | 16px | 600 | 24px | — | Small headings |
| `body-xl` | 18px | 400 | 28.8px | — | Large body text |
| `body-lg` | 16px | 400 | 25.6px | — | Default body |
| `body-base` | 14px | 400 | 21px | — | Standard body |
| `body-sm` | 12px | 400 | 18px | — | Secondary text |
| `body-xs` | 10px | 400 | 15px | — | Captions, timestamps |
| `label-lg` | 16px | 600 | 24px | — | Large labels |
| `label-md` | 14px | 600 | 21px | — | Default labels |
| `label-sm` | 12px | 600 | 18px | — | Small labels |
| `label-xs` | 10px | 600 | 14px | 0.06em | Uppercase micro labels |
| `code-base` | 13px | 400 | 19.5px | — | Inline code |
| `code-sm` | 12px | 400 | 18px | — | Small code |
| `code-label` | 11px | 500 | 15.4px | — | Code labels |

---

## Primitive Colors

### Blue (Brand)
| Token | Hex | Usage |
|-------|-----|-------|
| `blue-50` | #E2F4FE | Light blue tint |
| `blue-100` | #88D2F8 | Light blue |
| `blue-200` | #4097CD | Medium blue |
| `blue-500` | #0074BC | **Primary brand / action blue** |
| `blue-550` | #005A91 | Hover state |
| `blue-600` | #004D7D | Active/pressed state |
| `blue-700` | #00273F | Dark blue |
| `blue-800` | #264583 | Indigo |
| `blue-900` | #192E57 | Deep indigo |
| `navy-800` | #30233B | Dark navy |
| `navy-900` | #0D172C | **Brand text / darkest navy** |

### Neutral
| Token | Hex |
|-------|-----|
| `white` | #FFFFFF |
| `slate-50` | #ECF1F4 |
| `slate-100` | #EAEBEC |
| `slate-200` | #E1E2E4 |
| `slate-300` | #C4C5C8 |
| `slate-400` | #A6A8AD |
| `slate-500` | #6B6D76 |
| `slate-700` | #3E515A |
| `slate-900` | #192328 |

### Accent Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `gold-300` | #C6DCF2 | Highlight |
| `gold-400` | #8AB4D9 | Gold mid |
| `gold-500` | #3D6F94 | Gold |
| `gold-600` | #2C5470 | Dark gold |
| `green-100` | #F0F8E8 | Light green |
| `green-500` | #72B431 | Green |
| `green-600` | #498C1D | Dark green |
| `red-100` | #FEE5E5 | Light red |
| `red-500` | #BC0000 | Alert red |
| `amber-100` | #FFF6D0 | Light amber |
| `amber-500` | #D08007 | Alert orange |
| `amber-600` | #DCBF27 | Alert yellow |
| `purple-100` | #F0E6F0 | Light purple |
| `purple-500` | #7B3C84 | Ambassador badge |
| `purple-600` | #5D3070 | Dark purple |
| `teal-60` | #00AEBA | Teal accent |
| `cyan-60` | #00ADE6 | Cyan accent |

### Data Visualization Palette
| Series | Hex | Name |
|--------|-----|------|
| 1 | #1E3A5F | Deep Navy |
| 2 | #98579B | Purple |
| 3 | #00AEBA | Teal |
| 4 | #5C7986 | Slate |
| 5 | #D4B640 | Gold |
| 6 | #0074BC | HSS Blue |
| 7 | #72B431 | Green |

### Alert System Colors
| Level | Hex |
|-------|-----|
| `alert-red` | #BC0000 |
| `alert-orange` | #D08007 |
| `alert-yellow` | #DCBF27 |
| `alert-green` | #216A08 |
| `alert-blue` | #0075DD |

---

## Semantic Tokens (Light / Dark)

### Backgrounds
| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--bg-base` | #FFFFFF | #020617 | Page background |
| `--bg-surface` | #F8FAFC | #0F172A | Card/panel surfaces |
| `--bg-elevated` | #FFFFFF | #1E293B | Dropdowns, popovers |
| `--bg-overlay` | #0F172A | #0F172A | Modal overlays |
| `--bg-brand` | #2563EB | #3B82F6 | Brand backgrounds |
| `--bg-brand-subtle` | #EFF6FF | #1E3A8A | Subtle brand tint |
| `--bg-invert` | #0F172A | #FFFFFF | Inverted backgrounds |

### Text
| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--text-primary` | #0F172A | #FFFFFF | Headings, body text |
| `--text-secondary` | #475569 | #CBD5E1 | Descriptions, secondary info |
| `--text-tertiary` | #94A3B8 | #64748B | Hints, timestamps, captions |
| `--text-inverse` | #FFFFFF | #0F172A | Text on inverted backgrounds |
| `--text-brand` | #0D172C | #60A5FA | Brand text |
| `--text-accent` | #1D4ED8 | #93C5FD | Accent/link text |
| `--text-disabled` | #CBD5E1 | #475569 | Disabled text |

### Borders
| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--border-default` | #E2E8F0 | #1E293B | Card borders, dividers |
| `--border-strong` | #CBD5E1 | #475569 | Emphasized borders |
| `--border-brand` | #0074BC | #60A5FA | Brand-colored borders |
| `--border-focus` | #0D172C | #60A5FA | Focus ring outline |

### Actions (Interactive)
| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--action-primary` | #0074BC | #FFFFFF | Primary buttons |
| `--action-primary-hover` | #005A91 | #E2E8F0 | Primary hover |
| `--action-primary-active` | #004D7D | #CBD5E1 | Primary pressed |
| `--action-primary-text` | #FFFFFF | #0D172C | Text on primary buttons |
| `--action-secondary` | #F1F5F9 | #1E293B | Secondary button bg |
| `--action-secondary-text` | #272725 | #FFFFFF | Secondary button text |
| `--action-secondary-border` | #0074BC | #FFFFFF | Secondary button border |
| `--action-ghost` | #FFFFFF | #0F172A | Ghost button bg |
| `--action-ghost-hover` | #EFF6FF | #1E293B | Ghost hover |
| `--tab-active` | #0D172C | #FFFFFF | Active tab background |
| `--tab-active-text` | #FFFFFF | #0D172C | Active tab text |
| `--action-accent` | #0074BC | #0074BC | Links, inline actions |
| `--action-accent-hover` | #005A91 | #005A91 | Link/action hover |
| `--action-disabled` | #E2E8F0 | #475569 | Disabled state |
| `--action-destructive` | #DC2626 | #EF4444 | Destructive actions |

### Feedback
| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--success-bg` | #DCFCE7 | #16A34A | Success banner bg |
| `--success-text` | #16A34A | #DCFCE7 | Success text |
| `--error-bg` | #FEE2E2 | #DC2626 | Error banner bg |
| `--error-text` | #DC2626 | #FEE2E2 | Error text |
| `--warning-bg` | #FEF3C7 | #D97706 | Warning banner bg |
| `--warning-text` | #D97706 | #FEF3C7 | Warning text |
| `--info-bg` | #EFF6FF | #15304B | Info banner bg |
| `--info-text` | #2563EB | #A8C8E8 | Info text |
| `--info-border` | #BFDBFE | #0074BC | Info banner border |

### Branding
| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--powered-by-bg` | #F8FAFC | #0F172A | Powered-by section bg |
| `--powered-by-text` | #64748B | #94A3B8 | Powered-by label text |

### Header & Footer
| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--header-bg` | #FFFFFF | #0F172A | Header background |
| `--header-nav-active` | #0D172C | #FFFFFF | Active nav link |
| `--header-nav-inactive` | #64748B | #64748B | Inactive nav links |
| `--header-icon` | #64748B | #94A3B8 | Bell icon, hamburger |
| `--header-avatar` | #0074BC | #64748B | Avatar circle |
| `--footer-bg` | #FFFFFF | #0F172A | Footer background |
| `--footer-border` | #E2E8F0 | #1E293B | Footer top border |
| `--footer-icon-fill` | #0074BC | #FFFFFF | Pulse Grid icon |
| `--footer-powered-by` | #0074BC | rgba(255,255,255,0.7) | "POWERED BY" text |
| `--footer-brand-text` | #0D172C | #FFFFFF | "HSS Data" text |
| `--footer-btn-border` | #14334D | #FFFFFF | Support button border |
| `--footer-btn-text` | #14334D | #FFFFFF | Support button text |

---

## Spacing Scale

Based on a 4px base unit:

| Token | Value | Usage |
|-------|-------|-------|
| `--space-0` | 0px | No spacing |
| `--space-1` | 4px | Tight inline gaps |
| `--space-2` | 8px | Icon-to-text gaps |
| `--space-3` | 12px | Small component padding |
| `--space-4` | 16px | Default padding |
| `--space-5` | 20px | Medium padding |
| `--space-6` | 24px | Section padding |
| `--space-8` | 32px | Large gaps |
| `--space-10` | 40px | Section margins |
| `--space-12` | 48px | Major section breaks |
| `--space-16` | 64px | Page-level spacing |
| `--space-20` | 80px | Large page sections |
| `--space-24` | 96px | Maximum spacing |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-none` | 0px | Sharp corners |
| `--radius-sm` | 4px | Subtle rounding (logos, small elements) |
| `--radius-md` | 8px | Default cards, inputs, buttons |
| `--radius-lg` | 12px | Large cards, modals |
| `--radius-xl` | 16px | Prominent rounding (pills, tags) |
| `--radius-2xl` | 24px | Large pills |
| `--radius-full` | 9999px | Circles, pill badges |

---

## Components

### Buttons
- **Primary:** bg `--action-primary`, text `--action-primary-text`, radius `--radius-xl` (16px), height 40px, padding 10px 24px, font-weight 600, font-size 14px
- **Secondary:** bg transparent, border 1.5px `--action-secondary-border`, text `--action-secondary-text`, same radius/size
- **Ghost:** bg transparent, text `--action-primary`, no border, same radius/size
- **Destructive:** bg `--action-destructive`, text white
- **Disabled:** bg `--action-disabled`, text `--text-tertiary`, cursor not-allowed
- **States:** hover darkens 1 step, active darkens 2 steps, focus adds 2px `--border-focus` outline with 2px offset

### Tab Navigation
- Active tab: bg `--tab-active`, text `--tab-active-text`, font-weight 600
- Inactive tab: bg `--action-secondary`, text `--text-secondary`
- Container: bg `--action-secondary`, radius `--radius-xl`, padding 4px, gap 4px
- Tab item: radius `--radius-lg`, padding 8px 20px, font-size 14px

### Input Fields
- Height: 40px, border: 1px `--border-default`, radius `--radius-md`, padding 0 12px
- Font: 14px Inter, color `--text-primary`
- Placeholder: `--text-tertiary`
- Focus: border `--border-focus`, outline 2px `--action-primary` offset 2px
- Error: border `--action-destructive`, with error message in `--error-text`
- Disabled: bg `--action-disabled`, color `--text-disabled`

### Chips
- Default: bg `--action-secondary`, text `--text-secondary`, radius `--radius-full`, padding 6px 16px, font-size 13px
- Selected: bg `--action-primary`, text white
- Click to toggle

### Checkboxes
- Size: 18x18px, border 2px `--border-strong`, radius `--radius-sm`
- Checked: bg `--action-primary`, white checkmark SVG
- Focus: outline 2px `--action-primary` offset 2px

### Switch Toggle
- Track: 44x24px, off = `--border-strong`, on = `--action-primary`, radius `--radius-full`
- Thumb: 18px circle, white, 2px offset

### Cards
- Background: `--bg-surface`
- Border: 1px `--border-default`
- Radius: `--radius-lg` (12px)
- Padding: 20px (default), 24px (large)
- Shadow: none (flat design)

### Alerts / Notifications
Four variants — each uses its semantic bg + text token pair:
- **Success:** bg `--success-bg`, text `--success-text`, green check icon
- **Error:** bg `--error-bg`, text `--error-text`, X circle icon
- **Warning:** bg `--warning-bg`, text `--warning-text`, alert triangle icon
- **Info:** bg `--info-bg`, text `--info-text`, info circle icon
- Layout: flex row, padding 16px, gap 12px, radius `--radius-md`, icon 20px

### Badges
- Padding: 4px 12px, radius `--radius-full`, font-size 12px, font-weight 600
- Variants: success (green bg/text), warning (amber bg/text), error (red bg/text), info (blue bg/text), neutral (gray bg/text)
- Status badge examples: Approved (bg #DCFCE7, text #16A34A), Pending (bg #FEF3C7, text #92400E), Rejected (bg #FEE2E2, text #DC2626)

### Data-Stat Card (KPI)
- Primary HSS Data component for metric display
- Available sizes: sm, md, lg
- Structure: label (text-secondary, 12-14px) + value (text-primary, 24-36px bold) + optional trend indicator
- Semantic tints for stat cards: Pending (#FFFBEB bg / #FDE68A border), Approved (#F0FDF4 bg / #BBF7D0 border), Rejected (#FEF2F2 bg / #FECACA border)

---

## Navigation Patterns

Reference images: `images/navigation/desktop-light/`, `images/navigation/desktop-dark/`, `images/navigation/mobile-dark/`

### App Header — Desktop (1440px)
- Height: 56px, padding: 0 24px
- Background: `--header-bg` (light: #FFFFFF, dark: #0F172A)
- Border-bottom: 1px solid (light: #E2E8F0, dark: #1E293B)
- Left: HSS logo 32x32 (blue square #0074BC, radius 6px, white "HSS" text 11px/800w) + nav links (14px, gap 24px)
  - Active: `--header-nav-active` (light: #0D172C, dark: #FFFFFF), font-weight 600
  - Inactive: `--header-nav-inactive` (light: #64748B, dark: #64748B)
- Right: bell icon 20x20 (stroke: light #64748B, dark #94A3B8) + avatar 32x32 circle (light: #0074BC, dark: #64748B) + username 14px (light: #475569, dark: #94A3B8)
- Dark mode only: theme toggle — two circles (10px, border-radius 50%), colors #64748B and #94A3B8, gap 6px
- Layout: flexbox, space-between, center-aligned

### App Header — Mobile (375px)
- Height: 52px, padding: 0 16px
- Left: hamburger 24x24 + HSS logo 28x28 (same blue square style), gap 12px
- Right: theme toggle (dark mode only) + bell icon 20x20 + avatar 28x28, gap 12px
- No username text on mobile

### App Footer — Desktop (1440px)
- Height: 56px, padding: 0 24px
- Background: `--footer-bg` (light: #FFFFFF, dark: #0F172A), border-top: 1px `--footer-border` (light: #E2E8F0, dark: #1E293B)
- Left: Pulse Grid icon 28x28 (`--footer-icon-fill`) + "POWERED BY" (13.5px, medium, `--footer-powered-by`) + "HSS Data" (20px, bold, `--footer-brand-text`), gap 10px
- Center: "© 2026 HSS" (12px, `--text-tertiary`)
- Right: "Support & Feedback" pill button — padding 8px 20px, radius 20px, border 1.5px `--footer-btn-border`, font-weight 600, 14px, color `--footer-btn-text`

### App Footer — Mobile (375px)
- Stacked vertical, center-aligned, padding 16px, gap 12px
- Powered By row: Pulse Grid 22x22 + "POWERED BY" 13.5px + "HSS Data" 20px bold, gap 8px
- Support & Feedback pill button (same as desktop)
- "© 2026 HSS" (11px, text-tertiary)

### Sidebar Navigation
- Width: ~240px, vertical, bg `--bg-surface`
- Items: icon 18px + label, padding 10px 16px, gap 10px
- Active: bg `--bg-brand-subtle`, color `--action-primary`, font-weight 600
- Inactive: color `--text-secondary`

### Breadcrumbs
- Separator: "/" in `--text-tertiary`
- Links: `--action-primary`
- Current page: `--text-primary`, font-weight 500

---

## Dashboard Layout Anatomy

Canonical section order (top to bottom):
1. **App Header** — 56px, full-width
2. **Filter Bar** — 48px, chips/dropdowns for Date Range, Department, Surgeon, etc.
3. **KPI Card Row** — 3-column grid of Data-Stat cards
4. **Chart Area** — 2-column grid for visualizations
5. **Data Table** — full-width sortable table
6. **App Footer** — 56px, full-width

### Responsive Grid
| Breakpoint | KPI Columns | Chart Columns |
|------------|-------------|---------------|
| Desktop (>1024px) | 3 | 2 |
| Tablet (768-1024px) | 2 | 1 |
| Mobile (<768px) | 1 | 1 |

### Section Spacing
- Between major sections: 24px (`--space-6`)
- Within card groups: 16px (`--space-4`)
- Card internal padding: 20px (`--space-5`)

---

## Iconography

- All icons are inline SVGs with `stroke="currentColor"` (auto theme adaptation)
- Stroke width: 2px, stroke-linecap: round, stroke-linejoin: round
- Sizes: 16px (inline/body), 20px (buttons/inputs), 24px (navigation/headers)

---

## Urgency Color System

| Level | Color | Hex | Threshold |
|-------|-------|-----|-----------|
| Urgent | Red | #BC0000 | <7 days |
| Warning | Blue | #0074BC | 7–14 days |
| Safe | Green | #498C1D | >14 days |

---

## Accessibility Requirements (WCAG 2.1 AA)

### Contrast Ratios
- Normal text: minimum 4.5:1
- Large text (18px+ or 14px+ bold): minimum 3:1
- UI components: minimum 3:1

### Touch Targets
- Minimum interactive area: 44x44px
- Spacing between targets: minimum 8px

### Focus States
- All interactive elements must have visible focus indicator
- Focus ring: `outline: 2px solid var(--action-primary); outline-offset: 2px;`
- Never remove outline without replacement

### Color-Blind Safe Design
- Never rely on color alone to convey meaning
- Always pair color with icons, patterns, or text labels
- Test with deuteranopia, protanopia, and tritanopia simulations

---

## Dark Mode Rules

### Do
- Use semantic tokens for all colors (`var(--text-primary)`, not `#0F172A`)
- Test both modes during development
- Reduce elevation shadows in dark mode
- Use `color-mix()` for transparent overlays

### Don't
- Hardcode hex values (`#ffffff`, `#000000`)
- Use pure white text on dark backgrounds (use `--text-primary` which resolves to off-white in dark)
- Invert colors manually — let tokens handle it

---

## Data Visualization Guidelines

### Chart Colors
Always use the 7-color dataviz palette in order: #1E3A5F, #98579B, #00AEBA, #5C7986, #D4B640, #0074BC, #72B431

### Chart Typography
- Chart titles: heading-md (18px/600)
- Axis labels: body-xs (10px/400)
- Data labels: label-sm (12px/400)
- Tooltips: body-sm (12px) on elevated surface

### Best Practices
- Always include chart title and axis labels
- Use consistent number formatting (locale-aware)
- Provide text alternatives for screen readers
- Support light/dark themes via semantic tokens
- Limit pie/donut charts to 5-7 segments
- Use horizontal bar charts when category labels are long
- Include zero baseline for bar charts
- Use sparklines for inline trend indicators in KPI cards

---

## Figma Source Files

- **HSS Data — Design Library:** Contains all components, tokens, patterns for light and dark mode
  - Components / Patterns (light mode)
  - Components / Patterns — Dark Mode
  - Components / Core + Core — Dark Mode
  - Components / Data Viz + Data Viz — Dark Mode
  - Token Export Preview
  - Accessibility guidelines
  - **Marketing Brand System** — Brand foundation, tone of voice, logo, colors, typography, business descriptors, co-branding, ERGs, collateral patterns, and desktop/mobile HSS homepage mockups

---

## Token Naming Convention

- **Primitives:** `--color-{hue}-{shade}` (e.g., `--color-blue-500`), `--space-{value}`
- **Semantic:** `--{category}-{role}` where category = bg, text, border, action, success, error, warning, info
- Never reference primitives directly in components — always use semantic tokens
- Token flow: Primitive value → Semantic alias → Component usage

---
---

# Part 2 — HSS Marketing Brand System

> **For marketing collateral, print design, brand communications, and consumer/patient-facing materials.** This section extends the application design system above with marketing-specific guidelines sourced from the HSS Brand Identity Guidelines (January 2026). For the dedicated Claude skill, see `hss-marketing`.

---

## HSS Marketing Brand Subsystem

The HSS Marketing Brand Subsystem provides authoritative guidelines for all marketing and brand communications. It extends this design system with marketing-specific rules sourced from the HSS Brand Identity Guidelines (January 2026).

### Scope Division

| Context | System | Reference |
|---------|--------|-----------|
| Application UI, dashboards, data-viz | **HSS Data Design System** (this file) | Semantic tokens, components, dark mode |
| Marketing collateral, print, brand comms | **HSS Marketing Brand System** | Logo, tone of voice, print colors, co-branding |
| Consumer/patient-facing digital | **Both** — UI tokens from Data System, brand voice from Marketing | Cross-reference both |

### Brand Foundation

- **Purpose:** To help people get back to what they need and love to do better than any other place in the world.
- **Mission:** Highest quality patient care, improve mobility, advance orthopedic/rheumatology science.
- **Vision:** Lead the world as the most innovative source of musculoskeletal care.
- **Brand Essence:** Better possibilities for quality of life through better quality of movement.
- **Tagline:** "Choose Better. Move Better." — always ALL CAPS, HSS Blue.

### Tone of Voice

| We Are | We Are Not |
|--------|------------|
| Knowledgeable | Boastful |
| Personable | Playful |
| Direct | Verbose |
| Approachable | Clinical |
| Confident | Alarming |

**Guardrails:** Speak with confidence (no boasting), speak in simple terms (no jargon), don't scaremonger (promote positively).

### Logo Rules (Quick Reference)

- **HSS Monogram** always presented in **HSS Blue** (`#0074BC` digital / PMS 3005 print)
- Represents the entire HSS ecosystem
- Clear space = **X** on all sides, where X = 1/4 the height of the monogram logo
- Minimum size: **0.5 inches** (36 pixels) in height — never smaller

#### Background Control

**Preferred Background:**
| Background | Notes |
|------------|-------|
| HSS Cool Neutral (`#F0F5F7`) | **Preferred** — logo in HSS Blue on neutral background |

**Alternative Backgrounds:**
| Background | Notes |
|------------|-------|
| Light photograph | Logo in HSS Blue — background must be light and must not distract from the logo |
| HSS Blue (`#0074BC`) | Logo in HSS Blue with **white outline** — for use on HSS Blue backgrounds only |
| White (`#FFFFFF`) | Logo in HSS Blue on white |

The HSS logo should not appear on colors other than those shown above.

#### Logo and Taglines

The following lockups are the only approved configurations. The same Clear Space, Minimum Size, and Background Control rules apply to lockups as to the HSS logo.

**Approved Lockups:**
| Lockup | Description |
|--------|-------------|
| HSS + **HOSPITAL FOR SPECIAL SURGERY** | Full name lockup — used where "HSS" may not be well known |
| HSS + **#1 IN ORTHOPEDICS** | Ranking lockup — HSS monogram with "#1 IN ORTHOPEDICS" text |
| HSS + **CHOOSE BETTER MOVE BETTER** | Tagline lockup — HSS monogram with brand tagline |
| HSS + **Lerner Children's Pavilion** | Pediatric unit lockup — horizontal and vertical versions |

**Tagline:** Standard usage in all caps, HSS Blue. Other variations acceptable with Marketing approval. Artwork available from HSS Brand Center on the intranet.

**Positive vs. Reverse:**
- **Positive lockups** (HSS Blue on light background) — **preferred**
- **Reverse lockups** (white on HSS Blue background) — for use on dark backgrounds only

#### Incorrect Logo Use
- Never use old versions of the logo
- Never change the color of the logo
- Never add text or graphic elements to the logo
- Never distort the logo
- Never use the outline logo over a photograph
- Never use in black when color is possible (exception: B&W advertising)

### Marketing Color Palette

#### Primary (Print & Digital)
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

### Marketing Typography

| Role | Font | Notes |
|------|------|-------|
| Primary headline | Inter Bold, HSS Blue | ALL CAPS for advertising |
| Secondary headline | Inter Medium | — |
| Subhead | Inter Medium or Bold | — |
| Body copy | Inter Regular | — |
| Boilerplate | Sofia Sans Condensed Italic | Legal, footnotes |
| Fallback (MS apps) | Arial | PowerPoint, Word only |

### Typographic Style Rules
- Headlines: upper/lower case or all caps for branded collateral; always ALL CAPS for advertising
- All caps can be combined with upper & lower case to separate information
- **#1 statement** ("#1 IN ORTHOPEDICS"): always HSS Blue or white, always ALL CAPS
- Prioritize HSS Blue for type, followed by HSS Dark Blue, then Black for variety
- Bold typography + large numbers create distinctive design elements
- Large quotation marks create a distinctive design element with quotes

### Digital Typography ADA Compliance
| Color | Minimum on White | Minimum Reversed |
|-------|-----------------|------------------|
| HSS ADA Blue `#0074BC` | 12pt regular | 12pt regular |
| HSS Dark Blue `#264583` | 12pt regular | 12pt regular |
| HSS Blue `#0077C8` | 18pt bold | 18pt bold |
| HSS ADA Green `#68A42D` | 18pt bold | 18pt bold |
| HSS ADA Teal `#00A4AF` | 18pt bold | 18pt bold |
| HSS Dark Gray `#5F849C` | 18pt bold | 18pt bold |
| HSS Gold `#D4B640` | Non-compliant on white | 12pt bold reversed |

**Non-compliant for text:** HSS Cyan, HSS Teal (brand), HSS Cool Neutral, HSS Green (print), HSS Light Gray, HSS Warm Neutral

### HSS Organization
- B2B Business Areas: HSS Education Institute, HSS Research Institute, HSS Innovation Institute
- Consumer Facing Patient Care: HSS | Hospital for Special Surgery, HSS Westchester (Locations), HSS Spine (Departments & Services)
- Logos can only be created with permission from **HSS Marketing**

### Business Descriptors
- Format: **HSS** (Inter Black) + **Business Area** (Inter Medium)
- Always in HSS Blue on light backgrounds, white on dark
- Hospital for Special Surgery uses vertical line: **HSS | Hospital for Special Surgery**
- Never lock up with HSS logo (signage exception)

### Departments & Services
- Public-facing departments/services use descriptor lock-up: **HSS** (Inter Black) + service (Inter Medium)
- On business cards, department is part of Hospital for Special Surgery address
- On consumer-facing, descriptor is plain text in body + used as sign-off
- Examples: HSS Spine, HSS Sports Medicine Institute, HSS Adult Reconstruction and Joint Replacement

### Locations
- Wholly owned: identified by city/location (e.g., "HSS Westchester")
- Signage: location name can lock up with HSS logo
- All other materials: HSS monogram as hero, location in text only
- Examples: HSS Westchester, Northern NJ Surgery Center, HSS Paramus

### Special Programs
- Donor/honoree programs may have special lockups (e.g., Lerner Children's Pavilion + Penny Doerge Adaptive Academy)
- HSS Perform: B2B offering direct to employers
- Internal programs (e.g., Stronger with HSS) can be branded with HSS Marketing permission

### Co-Branding Quick Reference
| Type | Language | Example |
|------|----------|---------|
| Collaboration | "in collaboration with" or "with" | HSS Orthopedics in collaboration with Stamford Health |
| Collaboration | "in collaboration with" | HSS in collaboration with Lima Corporate |
| At-location | "at" | HSS at NCH |
| Knowledge/data | "Powered by HSS" | RightMove, CarePathways |

**Never use "partnership"** — does not meet legal definition (important risk/liability implications). Subject to prior approval by HSS Legal and HSS Brand Management.

### ERG Logos
- Internal use only (exception: community events/parades)
- Preferred backgrounds: white, black
- Never modify colors, rearrange elements, or add graphics
- ERGs: BEST, HOLA, WISE, HAPI, LGBTQ+ Standing Together

### Photography

#### People on the Move
Photography is used to represent people enjoying their lives and the freedom of movement that we provide to them. Always use color imagery, in clear focus and crop appropriately to display the subject in a flattering way. Images should always be aspirational.

**Photo examples:**
| Image | Description |
|-------|-------------|
| `images/photography/people-on-the-move/woman-running-arches.png` | Woman running through arches |
| `images/photography/people-on-the-move/man-moving-city.png` | Man moving joyfully in city |
| `images/photography/people-on-the-move/girl-kicking-soccer.png` | Girl kicking soccer ball |

#### Families and Community
Images can include people enjoying their everyday lives. Lives that we've enhanced by helping them be their best selves.

**Photo examples:**
| Image | Description |
|-------|-------------|
| `images/photography/families-and-community/mother-child-surfing.png` | Mother and child surfing |
| `images/photography/families-and-community/group-tai-chi-park.png` | Group doing tai chi in park |
| `images/photography/families-and-community/women-walking-city.png` | Two women walking in city |

#### HSS in Action
Another area of imagery we use shows our professionals in action, doing what they do best. Avoid overly posed images, and focus on capturing a moment in the lives of our dedicated staff. Ensure that all logos that may appear on clothing or equipment are **blurred**.

**Photo examples:**
| Image | Description |
|-------|-------------|
| `images/photography/hss-in-action/surgical-team-procedure.png` | Surgical team performing procedure |
| `images/photography/hss-in-action/surgeons-vr-headsets.png` | Surgeons using VR headsets in OR |
| `images/photography/hss-in-action/medical-team-discussion.png` | Medical team in discussion |

#### HSS Employee Community
Our HSS family represents who we are as an organization unlike anything else. Showing employees enjoying different aspects of their lives is very important.

**Photo examples:**
| Image | Description |
|-------|-------------|
| `images/photography/employee-community/employee-marathon-medal.png` | Employee with NYC Half Marathon medal |
| `images/photography/employee-community/employees-baseball-game.png` | Employees at baseball game |
| `images/photography/employee-community/employees-event-booth.png` | Employees at community event booth |

#### Photography Rules
- Always use licensed or approved imagery
- Never take images from the internet without confirming licensing
- Stock photography can be licensed for diverse community representation

### Infographics and Icons

A variety of stock icons and illustrations can be utilized to emphasize meaning and add interest.

Two-color icons in **HSS Blue** and **HSS Dark Blue** are available for use. Other icons can be created as long as the style remains consistent.

Icon subjects include: heart/vitals, user profiles, medical devices, pills/medication, clipboard/records, laptop/digital health, nutrition, megaphone/communications, fitness, ambulance, yoga/wellness, anatomy (knee, shoulder, spine, foot, hand, elbow), and general healthcare themes.

Reference: `images/icons/hss-icon-grid.png`

### Illustration — Patient Facing

Illustration is a good way to communicate with patients in a friendly and supportive way. These examples show illustrations that have been developed specifically for patient videos and brochures.

These illustrations would **not** be appropriate for clinical or educational materials for our professional audiences.

Illustration style: Friendly, supportive line-art in HSS Blue color scheme — depicting medical themes (orthopedic anatomy cycles, patient education diagrams, knee/joint anatomy).

| Image | Description |
|-------|-------------|
| `images/illustrations/orthopedic-cycle-diagram.png` | Orthopedic cycle — bone, joint, muscle, and treatment icons |
| `images/illustrations/patient-knee-anatomy.png` | Patient-facing knee anatomy illustration |

### Advertising

- **Headlines:** Always ALL CAPS, bold, confident messaging
- **Market designation required** on all advertising — acceptable formats: stacked (NY / NJ / CT / FL) or inline (NY | NJ | CT | FL)
- Market designation must appear near the HSS logo
- Backgrounds can be HSS Cool Neutral in color
- Logo can be locked up with tagline in advertising

### Collateral Patterns

| Type | Key Rules |
|------|-----------|
| **Flyers** | HSS Blue color focus. Logo prominent. Bold Inter headlines. Relatable photography. ERG logo lower-left for ERG-related. |
| **Pocket Brochures** | 1, 2, or 3 panels. Standard HSS brand typography and color. |
| **Postcards** | Mailed or handouts. Multiple purposes, all using brand elements. |
| **Business Cards** | Approved templates only — standard, 3-line title, 4-5 line title, QR code variants. Order via Linear/GHX e-requisitions. |
| **Stationery** | Specific layouts — never alter. Must use approved templates. |
| **Presentations** | Templafy templates in widescreen/letter. Correct logos, color palettes, sample imagery. Font fallback: Arial. |
| **Email Newsletters** | HSS logo prominent. Headlines large and bold. Photography used purposefully. Secondary colors can separate areas of information. |
| **Branded Merchandise** | HSS monogram only (no department branding). Must follow logo rules. |
| **Advertising** | ALL CAPS headlines. Market designation (NY &bull; NJ &bull; CT &bull; FL) required near HSS logo. |

### Physician Website Rules

**Do:** Ensure all uses of HSS name and brand identity are consistent with brand guidelines.

**Don't:**
- Use patient stories from "Back in the Game" (consent is limited)
- Use the US News & World Report badge
- Use the Olympic rings
- Use old versions of an HSS logo
- Use the HSS logo on any business venture outside of or not affiliated with HSS

### Marketing Color → Data Token Mapping
| Marketing Name | Marketing Hex | Data System Token |
|----------------|---------------|-------------------|
| HSS Blue (print) | `#0081C8` | `blue-500` / `#0074BC` |
| HSS Dark Blue | `#264583` | `blue-800` / `#264583` |
| HSS Cyan | `#00ADE6` | `cyan-60` / `#00ADE6` |
| HSS Cool Neutral | `#F0F5F7` | `slate-50` / `#ECF1F4` |
| HSS Gold | `#D4B640` | `dataviz-5` / `#D4B640` |
| HSS Green (ADA) | `#68A42D` | `green-500` / `#72B431` |
| HSS Teal (ADA) | `#00A4AF` | `teal-60` / `#00AEBA` |
