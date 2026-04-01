import styles from './MetricCardRow.module.css';
import { Card } from '../../components/Card/Card';
import { DataStat } from '../../components/DataStat/DataStat';

export interface Metric {
  label: string;
  value: string | number;
  trend?: { value: number; direction: 'up' | 'down' | 'flat' };
}

export interface MetricCardRowProps {
  metrics: Metric[];
  size?: 'sm' | 'md' | 'lg';
}

export function MetricCardRow({ metrics, size = 'md' }: MetricCardRowProps) {
  return (
    <div className={styles.row}>
      {metrics.map((m) => (
        <Card key={m.label} padding="md" className={styles.card}>
          <DataStat value={m.value} label={m.label} trend={m.trend} size={size} />
        </Card>
      ))}
    </div>
  );
}
