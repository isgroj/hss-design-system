import styles from './AppFooter.module.css';

export interface AppFooterProps {
  supportUrl?: string;
  year?: number;
}

export function AppFooter({
  supportUrl = '#',
  year = new Date().getFullYear(),
}: AppFooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.poweredBy}>
        <svg className={styles.icon} width="16" height="16" viewBox="0 0 22 22" fill="none">
          <rect x="0" y="0" width="6" height="6" rx="1" fill="#0074BC" />
          <rect x="8" y="0" width="6" height="6" rx="1" fill="#0074BC" />
          <rect x="16" y="0" width="6" height="6" rx="1" fill="#0074BC" />
          <rect x="0" y="8" width="6" height="6" rx="1" fill="#0074BC" />
          <rect x="8" y="8" width="6" height="6" rx="1" fill="#0074BC" />
          <rect x="16" y="8" width="6" height="6" rx="1" fill="#0074BC" />
          <rect x="0" y="16" width="6" height="6" rx="1" fill="#0074BC" />
          <rect x="8" y="16" width="6" height="6" rx="1" fill="#0074BC" />
          <rect x="16" y="16" width="6" height="6" rx="1" fill="#0074BC" />
        </svg>
        <span className={styles.poweredByLabel}>POWERED BY</span>
        <span className={styles.brandName}>HSS Data</span>
      </div>
      <a href={supportUrl} className={styles.supportBtn}>
        Support &amp; Feedback
      </a>
      <span className={styles.copyright}>&copy; {year} HSS</span>
    </footer>
  );
}
