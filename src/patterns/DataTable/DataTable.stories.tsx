import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './DataTable';
import { Badge } from '../../components/Badge/Badge';

interface Row {
  name: string;
  status: string;
  records: number;
  lastUpdated: string;
}

const meta: Meta<typeof DataTable<Row>> = {
  title: 'Patterns/DataTable',
  component: DataTable,
  parameters: { layout: 'padded' },
};
export default meta;

type Story = StoryObj<typeof DataTable<Row>>;

const sampleData: Row[] = [
  { name: 'Patient Demographics', status: 'Active', records: 45200, lastUpdated: '2 hours ago' },
  { name: 'Claims History', status: 'Active', records: 128400, lastUpdated: '1 hour ago' },
  { name: 'Provider Network', status: 'Syncing', records: 8920, lastUpdated: '15 min ago' },
  { name: 'Lab Results Archive', status: 'Archived', records: 892100, lastUpdated: '3 days ago' },
  { name: 'Rx Transactions', status: 'Active', records: 234500, lastUpdated: '30 min ago' },
];

export const Default: Story = {
  args: {
    columns: [
      { key: 'name', header: 'Dataset', sortable: true },
      {
        key: 'status',
        header: 'Status',
        render: (value) => {
          const variant = value === 'Active' ? 'success' : value === 'Syncing' ? 'info' : 'default';
          return <Badge variant={variant} size="sm">{String(value)}</Badge>;
        },
      },
      {
        key: 'records',
        header: 'Records',
        sortable: true,
        render: (value) => Number(value).toLocaleString(),
      },
      { key: 'lastUpdated', header: 'Last Updated', sortable: true },
    ],
    data: sampleData,
  },
};
