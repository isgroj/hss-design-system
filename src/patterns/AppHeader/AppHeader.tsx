import type { ReactNode } from 'react';
import styles from './AppHeader.module.css';

export interface AppHeaderProps {
  logo?: ReactNode;
  title?: string;
  navItems?: { label: string; href?: string; active?: boolean }[];
  actions?: ReactNode;
}

export function AppHeader({ logo, title = 'HSS Data', navItems = [], actions }: AppHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
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
