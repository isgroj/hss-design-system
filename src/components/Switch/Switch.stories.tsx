import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Core/Switch',
  component: Switch,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: { label: 'Enable feature' },
};

export const Checked: Story = {
  args: { label: 'Enabled', defaultChecked: true },
};

export const Disabled: Story = {
  args: { label: 'Disabled option', disabled: true },
};

export const WithoutLabel: Story = {
  args: {},
};
