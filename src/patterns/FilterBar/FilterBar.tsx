import styles from './FilterBar.module.css';
import { Chip } from '../../components/Chip/Chip';
import { Input } from '../../components/Input/Input';

export interface FilterBarProps {
  filters?: { label: string; active?: boolean }[];
  onFilterClick?: (label: string) => void;
  showSearch?: boolean;
  searchPlaceholder?: string;
}

export function FilterBar({
  filters = [],
  onFilterClick,
  showSearch = true,
  searchPlaceholder = 'Search...',
}: FilterBarProps) {
  return (
    <div className={styles.bar}>
      {showSearch && (
        <div className={styles.search}>
          <Input inputSize="sm" placeholder={searchPlaceholder} type="search" />
        </div>
      )}
      {filters.length > 0 && (
        <div className={styles.filters}>
          {filters.map((f) => (
            <Chip
              key={f.label}
              variant="filter"
              active={f.active}
              onClick={() => onFilterClick?.(f.label)}
            >
              {f.label}
            </Chip>
          ))}
        </div>
      )}
    </div>
  );
}
