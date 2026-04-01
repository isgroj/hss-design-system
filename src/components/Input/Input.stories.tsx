import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Core/Input',
  component: Input,
  argTypes: {
    inputSize: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { placeholder: 'Enter text...', label: 'Label' },
};

export const WithError: Story = {
  args: { placeholder: 'Enter email', label: 'Email', error: 'Invalid email address', type: 'email' },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 300 }}>
      <Input inputSize="sm" placeholder="Small" label="Small" />
      <Input inputSize="md" placeholder="Medium" label="Medium" />
      <Input inputSize="lg" placeholder="Large" label="Large" />
    </div>
  ),
};

export const Disabled: Story = {
  args: { placeholder: 'Disabled', label: 'Disabled', disabled: true },
};
