import type { HTMLAttributes } from 'react';
import styles from './DataStat.module.css';

export interface DataStatProps extends HTMLAttributes<HTMLDivElement> {
  value: string | number;
  label: string;
  trend?: { value: number; direction: 'up' | 'down' | 'flat' };
  size?: 'sm' | 'md' | 'lg';
}

export function DataStat({
  value,
  label,
  trend,
  size = 'md',
  className,
  ...props
}: DataStatProps) {
  return (
    <div className={`${styles.stat} ${styles[size]} ${className || ''}`} {...props}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value}</span>
      {trend && (
        <span
          className={`${styles.trend} ${
            trend.direction === 'up'
              ? styles.trendUp
              : trend.direction === 'down'
              ? styles.trendDown
              : styles.trendFlat
          }`}
        >
          {trend.direction === 'up' ? '↑' : trend.direction === 'down' ? '↓' : '→'}
          {' '}{Math.abs(trend.value)}%
        </span>
      )}
    </div>
  );
}
