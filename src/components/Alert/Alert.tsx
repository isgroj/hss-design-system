import { useState, type HTMLAttributes, type ReactNode } from 'react';
import styles from './Alert.module.css';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'success' | 'error' | 'warning' | 'info';
  dismissible?: boolean;
  children: ReactNode;
}

const icons: Record<string, string> = {
  success: '\u2713',
  error: '\u2715',
  warning: '\u26A0',
  info: '\u2139',
};

export function Alert({
  variant = 'info',
  dismissible = false,
  className,
  children,
  ...props
}: AlertProps) {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div
      role="alert"
      className={`${styles.alert} ${styles[variant]} ${className || ''}`}
      {...props}
    >
      <span className={styles.icon}>{icons[variant]}</span>
      <div className={styles.content}>{children}</div>
      {dismissible && (
        <button
          className={styles.dismiss}
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
        >
          \u2715
        </button>
      )}
    </div>
  );
}
