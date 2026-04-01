import type { Meta, StoryObj } from '@storybook/react';
import { FilterBar } from './FilterBar';

const meta: Meta<typeof FilterBar> = {
  title: 'Patterns/FilterBar',
  component: FilterBar,
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj<typeof FilterBar>;

export const Default: Story = {
  args: {
    filters: [
      { label: 'All', active: true },
      { label: 'Active' },
      { label: 'Archived' },
      { label: 'Drafts' },
    ],
    showSearch: true,
  },
};

export const FiltersOnly: Story = {
  args: {
    filters: [
      { label: 'Revenue', active: true },
      { label: 'Users' },
      { label: 'Retention' },
    ],
    showSearch: false,
  },
};
