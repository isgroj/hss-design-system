import type { Meta, StoryObj } from '@storybook/react';
import { WorkbookSettings } from './WorkbookSettings';

const meta: Meta<typeof WorkbookSettings> = {
  title: 'Patterns/WorkbookSettings',
  component: WorkbookSettings,
};
export default meta;

type Story = StoryObj<typeof WorkbookSettings>;

export const Default: Story = {
  args: {
    name: 'Q4 Revenue Analysis',
    description: 'Quarterly revenue breakdown by region',
    isPublic: false,
    autoRefresh: true,
  },
};

export const Empty: Story = {
  args: {},
};
