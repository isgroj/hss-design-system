import type { Meta, StoryObj } from '@storybook/react';
import { DataStat } from './DataStat';

const meta: Meta<typeof DataStat> = {
  title: 'Core/DataStat',
  component: DataStat,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};
export default meta;

type Story = StoryObj<typeof DataStat>;

export const Default: Story = {
  args: { value: '12,847', label: 'Total Records', trend: { value: 12.5, direction: 'up' } },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 32 }}>
      <DataStat size="sm" value="847" label="Small" trend={{ value: 5, direction: 'up' }} />
      <DataStat size="md" value="12,847" label="Medium" trend={{ value: 3.2, direction: 'down' }} />
      <DataStat size="lg" value="1.2M" label="Large" trend={{ value: 0, direction: 'flat' }} />
    </div>
  ),
};

export const WithoutTrend: Story = {
  args: { value: '98.6%', label: 'Accuracy' },
};
