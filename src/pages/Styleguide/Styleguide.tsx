import { useContext, useState } from 'react';
import { ThemeContext } from '../../ThemeProvider';
import styles from './Styleguide.module.css';

/* ─── Token data (mirroring CSS custom properties from Figma) ─── */

const primitiveColors: Record<string, Record<string, string>> = {
  blue: {
    '50': '#eff6ff', '100': '#dbeafe', '200': '#bfdbfe',
    '300': '#93c5fd', '400': '#60a5fa', '500': '#3b82f6',
    '600': '#2563eb', '700': '#1d4ed8', '800': '#1e40af', '900': '#1e3a8a',
  },
  navy: { '800': '#1e2a4a', '900': '#0f172a' },
  neutral: {
    'white': '#ffffff', '50': '#f8fafc', '100': '#f1f5f9',
    '200': '#e2e8f0', '300': '#cbd5e1', '400': '#94a3b8',
    '500': '#64748b', '600': '#475569', '700': '#334155',
    '800': '#1e293b', '900': '#0f172a',
  },
  gold: { '300': '#fcd34d', '400': '#fbbf24', '500': '#f59e0b', '600': '#d97706' },
  green: { '100': '#dcfce7', '500': '#22c55e', '600': '#16a34a' },
  red: { '100': '#fee2e2', '500': '#ef4444', '600': '#dc2626' },
  amber: { '100': '#fef3c7', '500': '#f59e0b', '600': '#d97706' },
  purple: { '100': '#f3e8ff', '500': '#a855f7', '600': '#9333ea' },
  teal: { '05': '#f0fdfa', '100': '#ccfbf1' },
  cyan: { '05': '#ecfeff', '100': '#cffafe' },
  alert: {
    'red': '#ef4444', 'orange': '#f97316', 'yellow': '#eab308',
    'green': '#22c55e', 'blue': '#3b82f6',
  },
  dataviz: {
    '1': '#1E3A5F', '2': '#98579B', '3': '#00AEBA', '4': '#5C7986',
    '5': '#D4B640', '6': '#2563eb', '7': '#16a34a',
  },
};

const semanticTokens: Record<string, { label: string; variable: string }[]> = {
  Background: [
    { label: 'bg-base', variable: 'var(--bg-base)' },
    { label: 'bg-surface', variable: 'var(--bg-surface)' },
    { label: 'bg-elevated', variable: 'var(--bg-elevated)' },
    { label: 'bg-brand', variable: 'var(--bg-brand)' },
    { label: 'bg-brand-subtle', variable: 'var(--bg-brand-subtle)' },
    { label: 'bg-invert', variable: 'var(--bg-invert)' },
  ],
  Text: [
    { label: 'text-primary', variable: 'var(--text-primary)' },
    { label: 'text-secondary', variable: 'var(--text-secondary)' },
    { label: 'text-tertiary', variable: 'var(--text-tertiary)' },
    { label: 'text-inverse', variable: 'var(--text-inverse)' },
    { label: 'text-brand', variable: 'var(--text-brand)' },
    { label: 'text-accent', variable: 'var(--text-accent)' },
    { label: 'text-disabled', variable: 'var(--text-disabled)' },
  ],
  Border: [
    { label: 'border-default', variable: 'var(--border-default)' },
    { label: 'border-strong', variable: 'var(--border-strong)' },
    { label: 'border-brand', variable: 'var(--border-brand)' },
    { label: 'border-focus', variable: 'var(--border-focus)' },
  ],
  Interactive: [
    { label: 'action-primary', variable: 'var(--action-primary)' },
    { label: 'action-primary-hover', variable: 'var(--action-primary-hover)' },
    { label: 'action-primary-active', variable: 'var(--action-primary-active)' },
    { label: 'action-secondary-text', variable: 'var(--action-secondary-text)' },
    { label: 'action-secondary-border', variable: 'var(--action-secondary-border)' },
    { label: 'action-secondary', variable: 'var(--action-secondary)' },
    { label: 'action-ghost', variable: 'var(--action-ghost)' },
    { label: 'action-ghost-hover', variable: 'var(--action-ghost-hover)' },
    { label: 'action-accent', variable: 'var(--action-accent)' },
    { label: 'action-accent-hover', variable: 'var(--action-accent-hover)' },
    { label: 'action-disabled', variable: 'var(--action-disabled)' },
    { label: 'action-destructive', variable: 'var(--action-destructive)' },
  ],
  Feedback: [
    { label: 'success-bg', variable: 'var(--success-bg)' },
    { label: 'success-text', variable: 'var(--success-text)' },
    { label: 'error-bg', variable: 'var(--error-bg)' },
    { label: 'error-text', variable: 'var(--error-text)' },
    { label: 'warning-bg', variable: 'var(--warning-bg)' },
    { label: 'warning-text', variable: 'var(--warning-text)' },
    { label: 'info-bg', variable: 'var(--info-bg)' },
    { label: 'info-text', variable: 'var(--info-text)' },
  ],
};

const typographyStyles = [
  { name: 'display/2xl', className: 'text-display-2xl', size: '48px', weight: 800, leading: '56px', tracking: '-3%' },
  { name: 'display/xl', className: 'text-display-xl', size: '36px', weight: 800, leading: '44px', tracking: '-2%' },
  { name: 'display/lg', className: 'text-display-lg', size: '30px', weight: 800, leading: '36px', tracking: '-2%' },
  { name: 'heading/2xl', className: 'text-heading-2xl', size: '36px', weight: 700, leading: '44px', tracking: '-0.72px' },
  { name: 'heading/xl', className: 'text-heading-xl', size: '30px', weight: 700, leading: '36px', tracking: '-0.6px' },
  { name: 'heading/lg', className: 'text-heading-lg', size: '24px', weight: 700, leading: '30px', tracking: '-0.36px' },
  { name: 'heading/md', className: 'text-heading-md', size: '20px', weight: 700, leading: '26px', tracking: '-0.2px' },
  { name: 'heading/sm', className: 'text-heading-sm', size: '16px', weight: 600, leading: '24px', tracking: '0' },
  { name: 'body/xl', className: 'text-body-xl', size: '18px', weight: 400, leading: '28px', tracking: '0' },
  { name: 'body/lg', className: 'text-body-lg', size: '16px', weight: 400, leading: '24px', tracking: '0' },
  { name: 'body/base', className: 'text-body-base', size: '16px', weight: 400, leading: '24px', tracking: '0' },
  { name: 'body/sm', className: 'text-body-sm', size: '14px', weight: 400, leading: '21px', tracking: '0' },
  { name: 'body/xs', className: 'text-body-xs', size: '12px', weight: 400, leading: '18px', tracking: '0' },
  { name: 'label/lg', className: 'text-label-lg', size: '16px', weight: 500, leading: '16px', tracking: '0.16px' },
  { name: 'label/md', className: 'text-label-md', size: '14px', weight: 500, leading: '14px', tracking: '0.14px' },
  { name: 'label/sm', className: 'text-label-sm', size: '12px', weight: 500, leading: '12px', tracking: '0.12px' },
  { name: 'label/xs', className: 'text-label-xs', size: '11px', weight: 500, leading: '11px', tracking: '0.44px' },
  { name: 'code/base', className: 'text-code-base', size: '14px', weight: 400, leading: '21px', tracking: '0' },
  { name: 'code/sm', className: 'text-code-sm', size: '12px', weight: 400, leading: '18px', tracking: '0' },
  { name: 'code/label', className: 'text-code-label', size: '11px', weight: 500, leading: '16px', tracking: '0' },
];

const spacingScale = [
  { token: '--space-0', px: 0 },
  { token: '--space-1', px: 4 },
  { token: '--space-2', px: 8 },
  { token: '--space-3', px: 12 },
  { token: '--space-4', px: 16 },
  { token: '--space-5', px: 20 },
  { token: '--space-6', px: 24 },
  { token: '--space-8', px: 32 },
  { token: '--space-10', px: 40 },
  { token: '--space-12', px: 48 },
  { token: '--space-16', px: 64 },
  { token: '--space-20', px: 80 },
  { token: '--space-24', px: 96 },
];

const radiusScale = [
  { token: 'none', value: '0px' },
  { token: 'sm', value: '4px' },
  { token: 'md', value: '8px' },
  { token: 'lg', value: '12px' },
  { token: 'xl', value: '16px' },
  { token: '2xl', value: '24px' },
  { token: 'full', value: '9999px' },
];

const breakpoints = [
  { name: 'sm', value: '640px', px: 640 },
  { name: 'md', value: '768px', px: 768 },
  { name: 'lg', value: '1024px', px: 1024 },
  { name: 'xl', value: '1280px', px: 1280 },
  { name: '2xl', value: '1536px', px: 1536 },
];

/* ─── Component ─── */

export function Styleguide() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Interactive state
  const [switch1, setSwitch1] = useState(true);
  const [switch2, setSwitch2] = useState(false);
  const [chips, setChips] = useState<Record<string, boolean>>({
    Facility: false,
    Orthopedics: true,
    Department: false,
    Cardiology: false,
  });
  const [activeTab, setActiveTab] = useState('Income Statement');
  const tabItems = ['Income Statement', 'Balance Sheet', 'Cash Flow'];
  const tabContent: Record<string, string> = {
    'Income Statement': 'Revenue, expenses, and net income for the selected reporting period.',
    'Balance Sheet': 'Assets, liabilities, and equity at the end of the reporting period.',
    'Cash Flow': 'Operating, investing, and financing cash flows for the period.',
  };
  const [activeTab2, setActiveTab2] = useState('All');

  const [checks, setChecks] = useState<Record<string, boolean>>({
    'Enable notifications': true,
    'Auto-save drafts': false,
    'Show tooltips': true,
  });

  const toggleChip = (name: string) => {
    setChips((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const toggleCheck = (name: string) => {
    setChecks((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>HSS Design Tokens</h1>
          <p className={styles.subtitle}>Visual reference for the HSS Data Design Library</p>
        </div>
        <button className={styles.themeToggle} onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '☀️'} {theme === 'light' ? 'Dark' : 'Light'}
        </button>
      </header>

      {/* ═══ Primitive Colors ═══ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Primitive Colors</h2>
        <p className={styles.sectionDesc}>
          Core palette values from the Primitives variable collection. These are referenced by semantic tokens.
        </p>
        {Object.entries(primitiveColors).map(([group, shades]) => (
          <div key={group} className={styles.colorGroup}>
            <h3 className={styles.colorGroupTitle}>{group}</h3>
            <div className={styles.swatchGrid}>
              {Object.entries(shades).map(([shade, hex]) => (
                <div key={shade} className={styles.swatch}>
                  <div
                    className={styles.swatchColor}
                    style={{ backgroundColor: hex }}
                    title={`${group}-${shade}: ${hex}`}
                  />
                  <div className={styles.swatchLabel}>{shade}</div>
                  <div className={styles.swatchHex}>{hex}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ═══ Semantic Colors ═══ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Semantic Colors</h2>
        <p className={styles.sectionDesc}>
          Theme-aware tokens that switch between Light and Dark modes. Toggle the theme to see values change.
        </p>
        <div className={styles.semanticGrid}>
          {Object.entries(semanticTokens).map(([category, tokens]) => (
            <div key={category} className={styles.semanticCard}>
              <div className={styles.semanticCardTitle}>{category}</div>
              {tokens.map((t) => (
                <div key={t.label} className={styles.semanticRow}>
                  <div
                    className={styles.semanticDot}
                    style={{ background: t.variable }}
                  />
                  <div className={styles.semanticInfo}>
                    <div className={styles.semanticName}>--{t.label}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ═══ Typography ═══ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Typography</h2>
        <p className={styles.sectionDesc}>
          Text styles using Inter (sans) and JetBrains Mono (code). All styles are defined as utility classes.
        </p>
        <table className={styles.typeTable}>
          <thead>
            <tr>
              <th>Style</th>
              <th>Preview</th>
              <th>Size</th>
              <th>Weight</th>
              <th>Line Height</th>
              <th>Tracking</th>
            </tr>
          </thead>
          <tbody>
            {typographyStyles.map((t) => (
              <tr key={t.name}>
                <td>
                  <span className={styles.typeStyleName}>.{t.className}</span>
                </td>
                <td>
                  <span className={t.className}>
                    {t.name.startsWith('code') ? 'const x = 42;' : 'The quick brown fox'}
                  </span>
                </td>
                <td><span className={styles.typeMeta}>{t.size}</span></td>
                <td><span className={styles.typeMeta}>{t.weight}</span></td>
                <td><span className={styles.typeMeta}>{t.leading}</span></td>
                <td><span className={styles.typeMeta}>{t.tracking}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* ═══ Spacing ═══ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Spacing</h2>
        <p className={styles.sectionDesc}>
          Spacing scale based on a 4px base unit, mapped to CSS custom properties.
        </p>
        <div className={styles.spacingList}>
          {spacingScale.map((s) => (
            <div key={s.token} className={styles.spacingRow}>
              <span className={styles.spacingLabel}>{s.token.replace('--', '')}</span>
              <div
                className={styles.spacingBar}
                style={{ width: Math.max(s.px, 2) }}
              />
              <span className={styles.spacingPx}>{s.px}px</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ Border Radius ═══ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Border Radius</h2>
        <p className={styles.sectionDesc}>
          Radius tokens from none (sharp) to full (pill/circle).
        </p>
        <div className={styles.radiusGrid}>
          {radiusScale.map((r) => (
            <div key={r.token} className={styles.radiusItem}>
              <div
                className={styles.radiusBox}
                style={{ borderRadius: r.value }}
              />
              <div className={styles.radiusName}>{r.token}</div>
              <div className={styles.radiusValue}>{r.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ Breakpoints ═══ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Breakpoints</h2>
        <p className={styles.sectionDesc}>
          Responsive design breakpoints for mobile-first layouts.
        </p>
        <div className={styles.breakpointList}>
          {breakpoints.map((bp) => (
            <div key={bp.name} className={styles.breakpointRow}>
              <span className={styles.breakpointName}>{bp.name}</span>
              <span className={styles.breakpointValue}>{bp.value}</span>
              <div className={styles.breakpointBarWrap}>
                <div
                  className={styles.breakpointBarFill}
                  style={{ width: `${(bp.px / 1536) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          COMPONENTS
          ═══════════════════════════════════════════════ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Components</h2>
        <p className={styles.sectionDesc}>
          Core UI components from the HSS Data Design Library. Each shows variants, sizes, and interactive states. Click, hover, and focus to see state changes.
        </p>

        {/* ── Buttons ── */}
        <div className={styles.componentCard}>
          <h3 className={styles.componentName}>Buttons</h3>
          <p className={styles.componentDesc}>
            Primary, secondary, ghost, and destructive button variants. Hover, click, and tab to see interactive states.
          </p>
          <div className={styles.componentRowLabel}>Variants</div>
          <div className={styles.componentRow}>
            <button className={styles.btnPrimary}>Primary Button</button>
            <button className={styles.btnSecondary}>Secondary Button</button>
            <button className={styles.btnGhost}>Ghost Button</button>
            <button className={styles.btnDestructive}>Destructive</button>
            <button className={styles.btnPrimaryDisabled} disabled>Disabled</button>
          </div>
          <div className={styles.componentRowLabel}>Sizes</div>
          <div className={styles.componentRow}>
            <button className={styles.btnSmall}>Small</button>
            <button className={styles.btnPrimary}>Medium</button>
            <button className={styles.btnLarge}>Large</button>
          </div>
        </div>

        {/* ── Tab Navigation ── */}
        <div className={styles.componentCard}>
          <h3 className={styles.componentName}>Tab Navigation</h3>
          <p className={styles.componentDesc}>
            Segmented tab controls for switching between views. Click tabs to navigate between content panels.
          </p>
          <div className={styles.componentRowLabel}>Example</div>
          <div style={{ padding: '16px 0' }}>
            <div className={styles.tabList}>
              {tabItems.map((tab) => (
                <button
                  key={tab}
                  className={activeTab === tab ? styles.tabItemActive : styles.tabItem}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className={styles.tabContent}>{tabContent[activeTab]}</div>
          </div>
          <div className={styles.componentRowLabel}>Variants</div>
          <div className={styles.componentRow} style={{ gap: 24 }}>
            <div>
              <div style={{ fontSize: 11, color: 'var(--text-tertiary)', marginBottom: 8, textTransform: 'uppercase' as const, letterSpacing: '0.06em' }}>4 Tabs</div>
              <div className={styles.tabList}>
                {['All', 'Active', 'Pending', 'Archived'].map((tab) => (
                  <button
                    key={tab}
                    className={activeTab2 === tab ? styles.tabItemActive : styles.tabItem}
                    onClick={() => setActiveTab2(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 11, color: 'var(--text-tertiary)', marginBottom: 8, textTransform: 'uppercase' as const, letterSpacing: '0.06em' }}>2 Tabs</div>
              <div className={styles.tabList}>
                <button className={styles.tabItemActive}>Chart</button>
                <button className={styles.tabItem}>Table</button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Input Fields ── */}
        <div className={styles.componentCard}>
          <h3 className={styles.componentName}>Input Fields</h3>
          <p className={styles.componentDesc}>
            Click into any input to see the focus state. Error and disabled states shown inline.
          </p>
          <div className={styles.componentRow}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Default</label>
              <input className={styles.inputField} placeholder="Click to focus..." />
              <span className={styles.inputHint}>Hint text</span>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Filled</label>
              <input className={styles.inputField} defaultValue="Selected value" />
              <span className={styles.inputHint}>Editable</span>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Error</label>
              <input className={styles.inputFieldError} defaultValue="Invalid entry" />
              <span className={styles.inputError}>This field is required</span>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Disabled</label>
              <input className={styles.inputFieldDisabled} value="Disabled field" disabled readOnly />
              <span className={styles.inputHint}>Disabled</span>
            </div>
          </div>
        </div>

        {/* ── Chips ── */}
        <div className={styles.componentCard}>
          <h3 className={styles.componentName}>Chips</h3>
          <p className={styles.componentDesc}>
            Click chips to toggle selection on and off.
          </p>
          <div className={styles.componentRow}>
            {Object.entries(chips).map(([name, selected]) => (
              <span
                key={name}
                className={selected ? styles.chipSelected : styles.chip}
                onClick={() => toggleChip(name)}
              >
                {selected && <span>&#10003;</span>} {name}
              </span>
            ))}
            <span className={styles.chipDisabled}>Unavailable</span>
          </div>
        </div>

        {/* ── Checkboxes ── */}
        <div className={styles.componentCard}>
          <h3 className={styles.componentName}>Checkboxes</h3>
          <p className={styles.componentDesc}>
            Click to toggle check state on and off.
          </p>
          <div className={styles.componentRow}>
            {Object.entries(checks).map(([label, checked]) => (
              <div
                key={label}
                className={styles.checkboxRow}
                onClick={() => toggleCheck(label)}
              >
                <div className={checked ? styles.checkboxBoxChecked : styles.checkboxBox}>
                  {checked && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span className={styles.checkboxLabel}>{label}</span>
              </div>
            ))}
            <div className={styles.checkboxRow}>
              <div className={styles.checkboxBoxDisabled} />
              <span className={styles.checkboxLabelDisabled}>Disabled option</span>
            </div>
          </div>
        </div>

        {/* ── Switch Toggle ── */}
        <div className={styles.componentCard}>
          <h3 className={styles.componentName}>Switch Toggle</h3>
          <p className={styles.componentDesc}>
            Click toggles to switch between on and off states.
          </p>
          <div className={styles.componentRow}>
            <div className={styles.switchRow}>
              <div
                className={`${styles.switchTrack} ${switch1 ? styles.switchTrackOn : styles.switchTrackOff}`}
                onClick={() => setSwitch1(!switch1)}
              >
                <div className={`${styles.switchThumb} ${switch1 ? styles.switchThumbOn : styles.switchThumbOff}`} />
              </div>
              <span className={styles.switchLabel}>{switch1 ? 'On' : 'Off'}</span>
            </div>
            <div className={styles.switchRow}>
              <div
                className={`${styles.switchTrack} ${switch2 ? styles.switchTrackOn : styles.switchTrackOff}`}
                onClick={() => setSwitch2(!switch2)}
              >
                <div className={`${styles.switchThumb} ${switch2 ? styles.switchThumbOn : styles.switchThumbOff}`} />
              </div>
              <span className={styles.switchLabel}>{switch2 ? 'On' : 'Off'}</span>
            </div>
            <div className={styles.switchRow}>
              <div className={`${styles.switchTrack} ${styles.switchTrackDisabled}`}>
                <div className={`${styles.switchThumb} ${styles.switchThumbOff}`} />
              </div>
              <span className={styles.switchLabelDisabled}>Disabled</span>
            </div>
          </div>
        </div>

        {/* ── Cards ── */}
        <div className={styles.componentCard}>
          <h3 className={styles.componentName}>Cards</h3>
          <p className={styles.componentDesc}>
            Metric cards, content cards, and data summary containers used throughout dashboards.
          </p>
          <div className={styles.componentRow}>
            <div className={styles.metricCard}>
              <span className={styles.metricCardLabel}>Total Cases</span>
              <span className={styles.metricCardValue}>1,247</span>
              <span className={styles.metricCardTrendUp}>&#8593; 12.3% vs last month</span>
            </div>
            <div className={styles.metricCard}>
              <span className={styles.metricCardLabel}>Avg. Wait Time</span>
              <span className={styles.metricCardValue}>23 min</span>
              <span className={styles.metricCardTrendDown}>&#8595; 4.1% vs last month</span>
            </div>
            <div className={styles.metricCard}>
              <span className={styles.metricCardLabel}>Patient Satisfaction</span>
              <span className={styles.metricCardValue}>4.6 / 5.0</span>
              <span className={styles.metricCardTrendUp}>&#8593; 0.3 vs last quarter</span>
            </div>
          </div>
        </div>

        {/* ── Alerts ── */}
        <div className={styles.componentCard}>
          <h3 className={styles.componentName}>Alerts &amp; Notifications</h3>
          <p className={styles.componentDesc}>
            System feedback banners for success, error, warning, and informational messages.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div className={`${styles.alert} ${styles.alertSuccess}`}>
              <div className={`${styles.alertIcon} ${styles.alertIconSuccess}`} />
              <div className={styles.alertContent}>
                <span className={`${styles.alertTitle} ${styles.alertTitleSuccess}`}>Success</span>
                <span className={styles.alertMessage}>Report has been exported successfully.</span>
              </div>
            </div>
            <div className={`${styles.alert} ${styles.alertError}`}>
              <div className={`${styles.alertIcon} ${styles.alertIconError}`} />
              <div className={styles.alertContent}>
                <span className={`${styles.alertTitle} ${styles.alertTitleError}`}>Error</span>
                <span className={styles.alertMessage}>Unable to load patient data. Please try again.</span>
              </div>
            </div>
            <div className={`${styles.alert} ${styles.alertWarning}`}>
              <div className={`${styles.alertIcon} ${styles.alertIconWarning}`} />
              <div className={styles.alertContent}>
                <span className={`${styles.alertTitle} ${styles.alertTitleWarning}`}>Warning</span>
                <span className={styles.alertMessage}>Data refresh is delayed by 15 minutes.</span>
              </div>
            </div>
            <div className={`${styles.alert} ${styles.alertInfo}`}>
              <div className={`${styles.alertIcon} ${styles.alertIconInfo}`} />
              <div className={styles.alertContent}>
                <span className={`${styles.alertTitle} ${styles.alertTitleInfo}`}>Information</span>
                <span className={styles.alertMessage}>New dashboard features are available. View changelog.</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Badges ── */}
        <div className={styles.componentCard}>
          <h3 className={styles.componentName}>Badges</h3>
          <p className={styles.componentDesc}>
            Status indicators, labels, and the HSS Data brand attribution badge.
          </p>
          <div className={styles.componentRow}>
            <span className={`${styles.badge} ${styles.badgeDefault}`}>Default</span>
            <span className={`${styles.badge} ${styles.badgeSuccess}`}>Success</span>
            <span className={`${styles.badge} ${styles.badgeError}`}>Error</span>
            <span className={`${styles.badge} ${styles.badgeWarning}`}>Warning</span>
            <span className={`${styles.badge} ${styles.badgeInfo}`}>Info</span>
            <span className={`${styles.badge} ${styles.badgeBrand}`}>Brand</span>
            <span className={`${styles.badge} ${styles.badgeOutline}`}>Outline</span>
          </div>
        </div>

        {/* ── Data-Stat Cards ── */}
        <div className={styles.componentCard}>
          <h3 className={styles.componentName}>Card / Data-Stat</h3>
          <p className={styles.componentDesc}>
            Primary HSS Data component for KPI and metric display. Available in sm, md, and lg.
          </p>
          <div className={styles.componentRow} style={{ alignItems: 'flex-start' }}>
            <div className={`${styles.dataStatCard} ${styles.dataStatSm}`}>
              <div className={styles.dataStatHeader}>
                <span className={styles.dataStatLabel}>Total Cases</span>
                <span className={`${styles.badge} ${styles.badgeSuccess}`} style={{ fontSize: 10 }}>&#8593; 12.1%</span>
              </div>
              <span className={styles.dataStatValue}>1,247</span>
              <span className={styles.dataStatSub}>vs. 1,112 last month</span>
              <div className={styles.dataStatDivider} />
            </div>
            <div className={`${styles.dataStatCard} ${styles.dataStatMd}`}>
              <div className={styles.dataStatHeader}>
                <span className={styles.dataStatLabel}>Notes Created</span>
                <span className={`${styles.badge} ${styles.badgeSuccess}`} style={{ fontSize: 10 }}>&#8593; 8.4%</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <span className={styles.dataStatValue}>18,925</span>
                <span className={styles.dataStatUnit}>notes</span>
              </div>
              <span className={styles.dataStatSub}>17,462 last period</span>
              <div className={styles.dataStatSparkline} />
              <div className={styles.dataStatDivider} />
            </div>
            <div className={`${styles.dataStatCard} ${styles.dataStatLg}`}>
              <div className={styles.dataStatHeader}>
                <span className={styles.dataStatLabel}>Patient Satisfaction</span>
                <span className={`${styles.badge} ${styles.badgeSuccess}`} style={{ fontSize: 10 }}>&#8593; 6.5%</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span className={styles.dataStatValueLg}>4.6</span>
                <span className={styles.dataStatUnit}>/ 5.0</span>
              </div>
              <span className={styles.dataStatSub}>Based on 3,241 responses this quarter</span>
              <div className={styles.dataStatSparkline} />
              <div className={styles.dataStatDivider} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FEEDBACK & LOADING
          ═══════════════════════════════════════════════ */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Feedback &amp; Loading</h2>
        <p className={styles.sectionDesc}>
          Validation feedback and loading patterns used across the HSS Data platform.
        </p>

        {/* ── Feedback States ── */}
        <div className={styles.componentCard}>
          <h3 className={styles.componentName}>Feedback States</h3>
          <p className={styles.componentDesc}>
            System and validation feedback communicated through color and iconography.
          </p>
          <div className={styles.feedbackGrid}>
            <div className={styles.feedbackCard}>
              <div className={styles.feedbackDot} style={{ background: 'var(--success-text)' }} />
              <span className={styles.feedbackTitle} style={{ color: 'var(--success-text)' }}>Success</span>
              <input className={`${styles.feedbackField} ${styles.feedbackFieldSuccess}`} defaultValue="valid@email.com" />
              <span className={styles.feedbackHint} style={{ color: 'var(--success-text)' }}>&#10003; Email verified</span>
            </div>
            <div className={styles.feedbackCard}>
              <div className={styles.feedbackDot} style={{ background: 'var(--error-text)' }} />
              <span className={styles.feedbackTitle} style={{ color: 'var(--error-text)' }}>Error</span>
              <input className={`${styles.feedbackField} ${styles.feedbackFieldError}`} defaultValue="invalid-email" />
              <span className={styles.feedbackHint} style={{ color: 'var(--error-text)' }}>Please enter a valid email</span>
            </div>
            <div className={styles.feedbackCard}>
              <div className={styles.feedbackDot} style={{ background: 'var(--warning-text)' }} />
              <span className={styles.feedbackTitle} style={{ color: 'var(--warning-text)' }}>Warning</span>
              <input className={`${styles.feedbackField} ${styles.feedbackFieldWarning}`} defaultValue="weak-password" />
              <span className={styles.feedbackHint} style={{ color: 'var(--warning-text)' }}>Password strength: weak</span>
            </div>
            <div className={styles.feedbackCard}>
              <div className={styles.feedbackDot} style={{ background: 'var(--info-text)' }} />
              <span className={styles.feedbackTitle} style={{ color: 'var(--info-text)' }}>Info</span>
              <input className={`${styles.feedbackField} ${styles.feedbackFieldInfo}`} defaultValue="Optional field" />
              <span className={styles.feedbackHint} style={{ color: 'var(--info-text)' }}>This field is optional</span>
            </div>
          </div>
        </div>

        {/* ── Loading States ── */}
        <div className={styles.componentCard}>
          <h3 className={styles.componentName}>Loading States</h3>
          <p className={styles.componentDesc}>
            Visual indicators while data is being fetched or processed.
          </p>
          <div className={styles.loadingGrid}>
            <div className={styles.loadingCard}>
              <span className={styles.loadingCardTitle}>Skeleton</span>
              <div className={styles.skeletonBar} style={{ width: '100%' }} />
              <div className={styles.skeletonBar} style={{ width: '75%' }} />
              <div className={styles.skeletonBar} style={{ width: '50%' }} />
              <div className={styles.skeletonBar} style={{ width: '100%' }} />
            </div>
            <div className={styles.loadingCard}>
              <span className={styles.loadingCardTitle}>Spinner</span>
              <div className={styles.spinner} />
              <span className={styles.loadingText}>Loading data...</span>
            </div>
            <div className={styles.loadingCard}>
              <span className={styles.loadingCardTitle}>Progress Bar</span>
              <div className={styles.progressTrack}>
                <div className={styles.progressFill} />
              </div>
              <span className={styles.progressText}>67% complete</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
