---
name: hss-accessibility
description: "ADA accessibility guidelines for the HSS Design System. Covers WCAG 2.1 AA compliance requirements for both digital product UI and marketing web properties. References HSS brand tokens, typography, and color system."
---
# HSS Accessibility Guidelines — ADA Compliance Reference

This document defines accessibility requirements for all HSS digital properties — internal applications (HSS Data dashboards, tools) and external-facing web content (marketing pages, patient portals). It aligns with **WCAG 2.1 Level AA** and **ADA Title III** requirements for healthcare organizations.

For design tokens and components, see `hss-data-design-system.md`.
For marketing brand rules, see `hss-marketing-brand-system.md`.

---

## Compliance Standard

| Standard | Level | Applies To |
|----------|-------|------------|
| WCAG 2.1 | AA (minimum) | All HSS digital properties |
| ADA Title III | Full | Patient-facing web content |
| Section 508 | Full | Internal tools used by staff |

---

## Color & Contrast

### Minimum Contrast Ratios

| Content Type | Ratio | Example |
|--------------|-------|---------|
| Normal text (<18px regular, <14px bold) | 4.5:1 | Body copy, labels, descriptions |
| Large text (≥18px regular or ≥14px bold) | 3:1 | Headlines, display text |
| UI components & graphical objects | 3:1 | Borders, icons, form controls |
| Placeholder text | 4.5:1 | Input placeholders must be legible |
| Disabled elements | No requirement | But must be visually distinct |

### HSS Brand Colors — ADA Compliance Matrix

Based on the HSS marketing brand ADA typography rules:

| Color | Hex | On White BG | On Dark BG | Minimum Size |
|-------|-----|-------------|------------|--------------|
| HSS ADA Blue | `#0074BC` | 4.5:1 pass | 4.5:1 pass | 12pt regular |
| HSS Dark Blue | `#264583` | 4.5:1 pass | 4.5:1 pass | 12pt regular |
| Navy 900 | `#0D172C` | 4.5:1 pass | — | Any size |
| HSS Blue (graphics) | `#0077C8` | 3:1 pass only | — | 18pt bold minimum |
| HSS ADA Green | `#68A42D` | 3:1 pass only | 3:1 pass | 18pt bold minimum |
| HSS ADA Teal | `#00A4AF` | 3:1 pass only | 3:1 pass | 18pt bold minimum |
| HSS Dark Gray | `#5F849C` | 3:1 pass only | — | 18pt bold minimum |
| HSS Gold | `#D4B640` | Fails on white | 3:1 reversed | Never use on white for text |

### Non-Compliant Colors (Graphics/Icons Only)

These colors **must never** be used for text at any size:
- HSS Cyan (`#00ADE6`)
- HSS Teal print variant (`#00AEBA`)
- HSS Cool Neutral (`#F0F5F7`)
- HSS Green print variant (`#72B431`)
- HSS Light Gray (`#A2BACA`)
- HSS Warm Neutral (`#F5F5F5`)

### Color Independence

- Never rely on color alone to convey information (status, errors, categories)
- Always pair color with a secondary indicator: icon, pattern, text label, or shape
- Data visualizations must use distinct patterns or shapes in addition to the 7-color palette
- Form validation errors must include text messages, not just red borders
- Alert components already combine color + icon + text (maintain this pattern)

### Dark Mode Considerations

- Use semantic tokens (`--text-primary`, `--bg-surface`) — these are pre-validated for contrast
- Never hardcode hex values in components
- Test contrast in both light and dark themes before shipping
- The `--text-tertiary` token (light: `#94A3B8`, dark: `#64748B`) meets 3:1 on its respective backgrounds but not 4.5:1 — use only for non-essential supplementary text

---

## Typography & Readability

### Minimum Sizes

| Context | Minimum Size | HSS Token |
|---------|-------------|-----------|
| Body text | 14px (1rem) | `body-base` |
| Secondary/caption text | 12px | `body-sm` |
| Smallest allowed (timestamps, legal) | 10px | `body-xs` |
| Interactive element labels | 14px | `label-md` |
| Mobile body text | 16px recommended | `body-lg` |

### Line Height & Spacing

- Body text: minimum 1.5x font size (already met by all HSS typography tokens)
- Heading text: minimum 1.2x font size (already met)
- Paragraph spacing: minimum 1.5x the font size between paragraphs
- Letter spacing: never reduce below token defaults

### Text Resizing

- All text must remain readable when zoomed to 200% (browser zoom)
- Layout must not break or clip content at 200% zoom
- Use relative units (`rem`, `em`) — avoid fixed `px` for font sizes in production CSS
- Horizontal scroll must not be required at 320px viewport width (reflow)

### Readability Rules

- Maximum line length: 80 characters (approximately 600px at 14px body)
- Left-align body text (never full-justify for body copy)
- Avoid ALL CAPS for body text longer than a single headline (reduces readability by 10-20%)
- Marketing headlines may use ALL CAPS per brand guidelines, but digital UI headlines should use sentence or title case
- Ensure sufficient contrast between text and any background images (use overlays)

---

## Keyboard Navigation

### Requirements

- All interactive elements must be operable via keyboard alone
- Tab order must follow logical reading order (left-to-right, top-to-bottom)
- No keyboard traps — users must be able to navigate away from any component
- Skip navigation link must be the first focusable element on every page

### Focus Indicators

Using the HSS design system focus specification:

```css
/* Standard focus ring — all interactive elements */
:focus-visible {
  outline: 2px solid var(--border-focus);
  outline-offset: 2px;
}

/* Never remove outline without a visible replacement */
:focus:not(:focus-visible) {
  outline: none;
}
```

| Element | Focus Style | Token |
|---------|-------------|-------|
| Buttons | 2px outline, 2px offset | `--border-focus` |
| Input fields | Border color change + outline | `--border-focus` |
| Links | 2px outline, 2px offset | `--border-focus` |
| Cards (clickable) | 2px outline, 2px offset | `--border-focus` |
| Tab navigation items | Background change + outline | `--tab-active` + `--border-focus` |
| Checkboxes | 2px outline, 2px offset | `--action-primary` |

### Focus Order Patterns

| Component | Focus Sequence |
|-----------|---------------|
| Dashboard layout | Skip link → Header nav → Filter bar → KPI cards → Charts → Data table → Footer |
| Marketing page | Skip link → Utility bar → Main nav → Hero CTA → Content sections → Footer |
| Modal/dialog | Trap focus within modal → Close button → Form elements → Action buttons |
| Dropdown menu | Trigger button → Menu items (arrow keys) → Escape to close |

### Keyboard Shortcuts

- `Tab` / `Shift+Tab`: Move between focusable elements
- `Enter` / `Space`: Activate buttons and links
- `Arrow keys`: Navigate within component groups (tabs, radio buttons, menu items)
- `Escape`: Close modals, dropdowns, popovers
- `Home` / `End`: Jump to first/last item in lists

---

## Interactive Components

### Buttons

- Minimum touch/click target: 44x44px (HSS buttons are 40px height — pad with margin/spacing to achieve 44px hit area)
- Minimum spacing between adjacent buttons: 8px (`--space-2`)
- Disabled buttons: must be visually distinct (`--action-disabled` token), use `aria-disabled="true"` instead of `disabled` attribute when state explanation is needed
- Loading state: provide `aria-busy="true"` and loading text for screen readers

### Form Controls

| Requirement | Implementation |
|-------------|----------------|
| Labels | Every input must have a visible `<label>` or `aria-label` |
| Error messages | Use `aria-describedby` linking to error text; announce with `aria-live="polite"` |
| Required fields | Mark with `aria-required="true"` and visible indicator (asterisk + sr-only text) |
| Field grouping | Use `<fieldset>` and `<legend>` for related inputs (radio groups, address blocks) |
| Autocomplete | Set `autocomplete` attribute for personal data fields |
| Input purpose | Identify the purpose of input fields collecting personal info (WCAG 1.3.5) |

### Data Tables

- Always include `<caption>` or `aria-label` for table identification
- Use `<th>` with `scope="col"` or `scope="row"` for header cells
- Sortable columns: indicate sort state with `aria-sort="ascending|descending|none"`
- For complex tables with merged cells, use `headers` attribute
- Provide text summary for data-dense tables when appropriate
- Pagination: announce page changes with `aria-live="polite"`

### Charts & Data Visualization

- Provide text alternative for every chart (summary of key data points)
- Use `role="img"` and `aria-label` on chart containers
- Interactive charts: make data points keyboard-navigable
- Supplement color with patterns/shapes for color-blind accessibility
- Provide a data table alternative view when possible
- Tooltips must be accessible via keyboard focus, not just hover

### Alerts & Notifications

- Use `role="alert"` for urgent messages (errors)
- Use `aria-live="polite"` for non-urgent updates (success messages, info)
- Toast notifications: remain visible for minimum 5 seconds, pausable on hover/focus
- Never auto-dismiss error messages
- Ensure dismissible alerts have a keyboard-accessible close button

---

## Touch & Pointer

### Target Sizes

| Element | Minimum Size | HSS Specification |
|---------|-------------|-------------------|
| Buttons | 44x44px | 40px height + 4px margin achieves 44px target |
| Icon buttons | 44x44px | Pad icons (16-24px) with sufficient clickable area |
| Checkboxes | 44x44px | 18x18px visual + 26px padding area |
| Links in text | N/A (inline) | But link text must be descriptive |
| Switch toggles | 44x44px | 44x24px track already meets width; ensure height |
| Chip filters | 44x44px | Padding 6px 16px meets this with standard line height |

### Spacing

- Minimum space between touch targets: 8px (`--space-2`)
- Mobile navigation items: minimum 48px height recommended
- Filter bar chips: already meet spacing with 16px gap

---

## Semantic Structure

### Page Landmarks

Every page must include these ARIA landmarks:

```html
<header role="banner">        <!-- App/site header -->
<nav role="navigation">        <!-- Primary navigation -->
<main role="main">             <!-- Primary content area -->
<aside role="complementary">   <!-- Sidebar/supplementary content -->
<footer role="contentinfo">    <!-- App/site footer -->
```

### Heading Hierarchy

- Every page must have exactly one `<h1>`
- Headings must not skip levels (no `h1` → `h3` without `h2`)
- Dashboard pages: `<h1>` = page title, `<h2>` = section titles (KPIs, Charts, Table)
- Marketing pages: `<h1>` = hero headline, `<h2>` = section titles

| HSS Token | Typical Heading Level |
|-----------|-----------------------|
| `display-2xl` / `display-xl` | h1 |
| `heading-2xl` / `heading-xl` | h2 |
| `heading-lg` / `heading-md` | h3 |
| `heading-sm` | h4 |

### Content Ordering

- Visual order must match DOM order (CSS flexbox `order` must not break reading flow)
- Off-screen content for screen readers: use `sr-only` utility (not `display: none`)
- Hidden decorative content: use `aria-hidden="true"`

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

---

## Images & Media

### Images

| Image Type | Requirement |
|------------|-------------|
| Informative images | `alt` text describing the content |
| Decorative images | `alt=""` (empty) + `role="presentation"` |
| HSS Logo (square, no border-radius, min 36px, clear space = 1/4 height) | `alt="HSS - Hospital for Special Surgery"` |
| Pulse Grid icon | `alt=""` (decorative — text "Powered by HSS Data" is adjacent) |
| Photography (marketing) | Describe the scene and any relevant action |
| Icons with meaning | `aria-label` on the SVG or parent button |
| Chart images | Detailed `alt` summarizing key data points |
| Complex infographics | `alt` + `aria-describedby` linking to long description |

### HSS Logo — Accessibility + Brand Compliance

The HSS monogram must always render as a **square** with **no border-radius** (per January 2026 Brand Onesheet). Additional marketing criteria that affect accessible implementation:

| Rule | Specification | Source |
|------|--------------|--------|
| Shape | Square — `border-radius: 0` always | Brand Onesheet 2026 |
| Color | HSS Blue `#0074BC` only (never recolor) | Brand Identity Guidelines |
| Minimum size | 0.5 inches / 36 pixels in height | Brand Identity Guidelines |
| Clear space | 1/4 the height of the monogram on all sides | Brand Identity Guidelines |
| Background | HSS Cool Neutral `#F0F5F7` (preferred), white, or HSS Blue with white outline | Brand Identity Guidelines |
| Alt text | `alt="HSS - Hospital for Special Surgery"` | Accessibility requirement |
| Incorrect use | Never distort, add text/graphics, change color, use old versions, or use outline version over photos | Brand Identity Guidelines |

```css
/* Correct logo implementation */
.hss-logo {
  width: 32px; /* minimum 36px for standalone usage */
  height: 32px;
  background: #0074BC;
  border-radius: 0; /* NEVER round — always square */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.5px;
}
```

### SVG Icons

All HSS icons use inline SVG with `stroke="currentColor"`:

```html
<!-- Decorative icon (adjacent text provides meaning) -->
<svg aria-hidden="true" focusable="false">...</svg>

<!-- Meaningful icon (no adjacent text) -->
<svg role="img" aria-label="Notifications">...</svg>

<!-- Icon button -->
<button aria-label="Close dialog">
  <svg aria-hidden="true" focusable="false">...</svg>
</button>
```

### Video & Audio

- All video content must have synchronized captions
- Provide audio descriptions for video where visual content isn't described in dialogue
- Auto-playing media: must be pausable, mutable, or stoppable
- No content that flashes more than 3 times per second

---

## Motion & Animation

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Animation Guidelines

- No essential information conveyed through animation alone
- Provide pause/stop controls for any animation lasting more than 5 seconds
- Loading spinners: include `aria-label="Loading"` and `role="status"`
- Skeleton screens: use `aria-busy="true"` on the loading container
- Parallax effects: disable entirely for `prefers-reduced-motion`
- Transition durations: keep under 400ms for UI transitions

---

## Navigation & Wayfinding

### Skip Links

Required on every page as the first focusable element:

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 16px;
  padding: 8px 16px;
  background: var(--bg-elevated);
  color: var(--text-primary);
  border: 2px solid var(--border-focus);
  border-radius: var(--radius-md);
  font-size: 14px;
  font-weight: 600;
  z-index: 9999;
  transition: top 0.2s;
}

.skip-link:focus {
  top: 8px;
}
```

### Breadcrumbs

```html
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/section">Section</a></li>
    <li aria-current="page">Current Page</li>
  </ol>
</nav>
```

### Navigation Patterns

- Use `aria-current="page"` on active nav items
- Mobile hamburger menu: `aria-expanded="true|false"` on toggle button
- Tab navigation: use `role="tablist"`, `role="tab"`, `role="tabpanel"` with proper `aria-selected`
- Sidebar navigation: `<nav aria-label="Sidebar">` to distinguish from primary nav
- Pagination: `<nav aria-label="Pagination">` with current page indicated by `aria-current="page"`

---

## Forms & Error Handling

### Validation Pattern

```html
<!-- Input with error -->
<div class="form-field">
  <label for="email">Email address <span aria-hidden="true">*</span></label>
  <input
    id="email"
    type="email"
    aria-required="true"
    aria-invalid="true"
    aria-describedby="email-error"
  />
  <p id="email-error" class="error-message" role="alert">
    Please enter a valid email address.
  </p>
</div>
```

### Error Handling Rules

- Display errors inline, adjacent to the field (not only at page top)
- Error messages must identify the field and describe how to fix the issue
- On form submission failure, move focus to the first error or to an error summary
- Use `aria-live="polite"` regions for real-time validation feedback
- Error state uses `--error-text` token + error icon — never color alone
- Group related errors in an error summary with links to each field

### Success Feedback

- Confirm successful actions with visible text (not just color change)
- Use `role="status"` for success messages so screen readers announce them
- Maintain the success message visible until the user navigates away

---

## Content & Language

### Language

- Set `lang` attribute on `<html>` element (e.g., `lang="en"`)
- Mark passages in other languages with appropriate `lang` attribute
- HSS content is primarily English; ensure medical terminology has plain-language equivalents where possible

### Link Text

- Link text must be descriptive out of context ("Read our joint replacement guide" not "Click here")
- Avoid generic link text: "Read more", "Click here", "Learn more" without context
- If generic link text is unavoidable, add `aria-label` with full context
- External links: indicate with icon + `aria-label` suffix "(opens in new tab)"

### Content Structure

- Use lists (`<ul>`, `<ol>`) for groups of related items
- Use `<blockquote>` for pull quotes (marketing testimonials)
- Use definition lists (`<dl>`) for term-definition pairs
- Break long content into sections with descriptive headings
- Provide table of contents for pages longer than 3 screenfuls

---

## Testing Requirements

### Automated Testing

Run on every build:
- axe-core or similar WCAG linting
- Color contrast checker (all token combinations)
- HTML validation (proper landmark structure, heading order)

### Manual Testing Checklist

| Test | Method | Frequency |
|------|--------|-----------|
| Keyboard-only navigation | Tab through entire page | Every feature |
| Screen reader (VoiceOver/NVDA) | Full page read-through | Every feature |
| Zoom to 200% | Browser zoom | Every layout change |
| Color contrast | Dev tools audit | Every color/token change |
| Reduced motion | Enable OS setting | Every animation added |
| Color blindness simulation | Browser extension | Every data-viz change |
| Touch target size | Dev tools measurement | Every interactive element |
| High contrast mode | Windows High Contrast | Quarterly |

### Screen Reader Testing Priority

| Reader | Platform | Priority |
|--------|----------|----------|
| VoiceOver | macOS / iOS | Primary (patient-facing) |
| NVDA | Windows | Primary (internal tools) |
| JAWS | Windows | Secondary |
| TalkBack | Android | Secondary |

---

## Component-Specific Accessibility

### HSS App Header

```html
<header role="banner">
  <nav aria-label="Main navigation">
    <a href="/" aria-label="HSS - Home">
      <img src="hss-logo.svg" alt="HSS" />
    </a>
    <!-- Nav links with aria-current="page" on active -->
    <button aria-label="Notifications" aria-haspopup="true">
      <svg aria-hidden="true"><!-- bell icon --></svg>
      <span class="sr-only">3 unread notifications</span>
    </button>
  </nav>
</header>
```

### HSS Data-Stat Card (KPI)

```html
<article aria-label="Total Procedures: 1,247">
  <p class="stat-label">Total Procedures</p>
  <p class="stat-value" aria-hidden="true">1,247</p>
  <p class="stat-trend">
    <svg aria-hidden="true"><!-- trend arrow --></svg>
    <span>12% increase from last month</span>
  </p>
</article>
```

### HSS Alert Component

```html
<!-- Error alert (urgent) -->
<div role="alert" class="alert alert-error">
  <svg aria-hidden="true"><!-- X circle icon --></svg>
  <div>
    <strong>Error:</strong> Unable to save changes. Please try again.
  </div>
  <button aria-label="Dismiss error">
    <svg aria-hidden="true"><!-- close icon --></svg>
  </button>
</div>

<!-- Info alert (non-urgent) -->
<div role="status" class="alert alert-info">
  <svg aria-hidden="true"><!-- info icon --></svg>
  <div>Your report is being generated. This may take a few minutes.</div>
</div>
```

### HSS Filter Bar

```html
<section aria-label="Filters">
  <div role="group" aria-label="Active filters">
    <button role="switch" aria-checked="true">Orthopedics</button>
    <button role="switch" aria-checked="false">Rheumatology</button>
  </div>
  <button aria-label="Clear all filters">Clear</button>
</section>
```

---

## Healthcare-Specific Requirements

### Patient-Facing Content

- Reading level: target 6th-8th grade (use Flesch-Kincaid readability testing)
- Provide glossary or tooltip definitions for medical terms
- Emergency contact information must be accessible without scrolling on mobile
- Appointment booking flows: ensure full keyboard operability and clear step indicators

### HIPAA Intersection

- Session timeout warnings: provide accessible alert with option to extend
- Secure form fields: do not use `autocomplete` on PHI (Protected Health Information) fields
- Error messages must never expose patient data

### Multilingual Support

- Provide language switcher in an accessible location (header utility bar)
- Translated content must maintain the same heading structure and landmark pattern
- Right-to-left (RTL) language support: use `dir="rtl"` and logical CSS properties

---

## Implementation Checklist

Use this checklist for every new page or component:

- [ ] All interactive elements keyboard-accessible
- [ ] Focus indicators visible on all interactive elements
- [ ] Skip link present and functional
- [ ] Heading hierarchy correct (h1 → h2 → h3, no skips)
- [ ] All images have appropriate alt text
- [ ] Color contrast meets minimum ratios
- [ ] Information not conveyed by color alone
- [ ] Form fields have visible labels
- [ ] Error messages are descriptive and linked to fields
- [ ] Touch targets meet 44x44px minimum
- [ ] Page landmarks properly defined
- [ ] Reduced motion preference respected
- [ ] Content readable at 200% zoom
- [ ] Screen reader tested (VoiceOver or NVDA)
- [ ] Language attribute set on `<html>`
- [ ] Link text is descriptive

---

## Resources

| Resource | URL |
|----------|-----|
| WCAG 2.1 Quick Reference | https://www.w3.org/WAI/WCAG21/quickref/ |
| ADA.gov Web Accessibility | https://www.ada.gov/resources/web-guidance/ |
| axe DevTools | https://www.deque.com/axe/devtools/ |
| WebAIM Contrast Checker | https://webaim.org/resources/contrastchecker/ |
| HSS Brand Contact | brandguidelinequestions@hss.edu |

---
