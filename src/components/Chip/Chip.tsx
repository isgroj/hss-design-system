import type { HTMLAttributes, ReactNode } from 'react';
import styles from './Chip.module.css';

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'filter' | 'status';
  active?: boolean;
  removable?: boolean;
  onRemove?: () => void;
  children: ReactNode;
}

export function Chip({
  variant = 'filter',
  active = false,
  removable = false,
  onRemove,
  className,
  children,
  ...props
}: ChipProps) {
  return (
    <span
      className={`${styles.chip} ${styles[variant]} ${active ? styles.active : ''} ${className || ''}`}
      {...props}
    >
      {children}
      {removable && (
        <button className={styles.remove} onClick={onRemove} aria-label="Remove">
          ✕
        </button>
      )}
    </span>
  );
}
