import type { ReactNode } from 'react';
import styles from './AppHeader.module.css';

export interface AppHeaderProps {
  logo?: ReactNode;
  title?: string;
  navItems?: { label: string; href?: string; active?: boolean }[];
  actions?: ReactNode;
  onMenuToggle?: () => void;
}

export function AppHeader({ logo, title = 'HSS Data', navItems = [], actions, onMenuToggle }: AppHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button className={styles.hamburger} onClick={onMenuToggle} aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="5" width="18" height="2" rx="1" fill="currentColor" />
            <rect x="3" y="11" width="18" height="2" rx="1" fill="currentColor" />
            <rect x="3" y="17" width="18" height="2" rx="1" fill="currentColor" />
          </svg>
        </button>
        {logo || <div className={styles.logoMark} />}
        <span className={styles.title}>{title}</span>
      </div>
      {navItems.length > 0 && (
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href || '#'}
              className={`${styles.navItem} ${item.active ? styles.navActive : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
      {actions && <div className={styles.actions}>{actions}</div>}
    </header>
  );
}
