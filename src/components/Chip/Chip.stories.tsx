import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Core/Chip',
  component: Chip,
  argTypes: {
    variant: { control: 'select', options: ['filter', 'status'] },
    active: { control: 'boolean' },
    removable: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: { children: 'Filter chip' },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Chip variant="filter">Inactive</Chip>
      <Chip variant="filter" active>Active</Chip>
      <Chip variant="filter" removable>Removable</Chip>
      <Chip variant="status">Status</Chip>
    </div>
  ),
};
