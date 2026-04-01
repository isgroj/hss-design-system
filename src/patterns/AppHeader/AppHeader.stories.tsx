import type { Meta, StoryObj } from '@storybook/react';
import { AppHeader } from './AppHeader';
import { Button } from '../../components/Button/Button';

const meta: Meta<typeof AppHeader> = {
  title: 'Patterns/AppHeader',
  component: AppHeader,
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj<typeof AppHeader>;

export const Default: Story = {
  args: {
    navItems: [
      { label: 'Dashboard', active: true },
      { label: 'Workbooks' },
      { label: 'Reports' },
      { label: 'Settings' },
    ],
    actions: <Button size="sm">New Workbook</Button>,
  },
};

export const Minimal: Story = {
  args: {
    title: 'HSS Data',
  },
};
