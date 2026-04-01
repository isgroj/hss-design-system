import styles from './WorkbookSettings.module.css';
import { Input } from '../../components/Input/Input';
import { Switch } from '../../components/Switch/Switch';
import { Button } from '../../components/Button/Button';
import { Card } from '../../components/Card/Card';

export interface WorkbookSettingsProps {
  name?: string;
  description?: string;
  isPublic?: boolean;
  autoRefresh?: boolean;
  onSave?: () => void;
}

export function WorkbookSettings({
  name = '',
  description = '',
  isPublic = false,
  autoRefresh = true,
  onSave,
}: WorkbookSettingsProps) {
  return (
    <Card padding="lg" className={styles.panel}>
      <h3 className={styles.heading}>Workbook Settings</h3>
      <div className={styles.fields}>
        <Input label="Workbook Name" defaultValue={name} placeholder="My Workbook" />
        <Input label="Description" defaultValue={description} placeholder="Optional description..." />
        <div className={styles.toggleRow}>
          <Switch label="Public access" defaultChecked={isPublic} />
        </div>
        <div className={styles.toggleRow}>
          <Switch label="Auto-refresh data" defaultChecked={autoRefresh} />
        </div>
      </div>
      <div className={styles.actions}>
        <Button variant="secondary">Cancel</Button>
        <Button onClick={onSave}>Save Settings</Button>
      </div>
    </Card>
  );
}
