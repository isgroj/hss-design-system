import type { HTMLAttributes, ReactNode } from 'react';
import styles from './Card.module.css';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export function Card({
  elevated = false,
  padding = 'md',
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={`${styles.card} ${elevated ? styles.elevated : ''} ${styles[`pad-${padding}`]} ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
}
