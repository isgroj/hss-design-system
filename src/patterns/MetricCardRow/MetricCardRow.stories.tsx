import type { Meta, StoryObj } from '@storybook/react';
import { MetricCardRow } from './MetricCardRow';

const meta: Meta<typeof MetricCardRow> = {
  title: 'Patterns/MetricCardRow',
  component: MetricCardRow,
  parameters: { layout: 'padded' },
};
export default meta;

type Story = StoryObj<typeof MetricCardRow>;

export const Default: Story = {
  args: {
    metrics: [
      { label: 'Total Records', value: '12,847', trend: { value: 12.5, direction: 'up' } },
      { label: 'Active Users', value: '3,291', trend: { value: 4.2, direction: 'up' } },
      { label: 'Error Rate', value: '0.3%', trend: { value: 1.1, direction: 'down' } },
      { label: 'Avg Latency', value: '142ms', trend: { value: 0, direction: 'flat' } },
    ],
  },
};
