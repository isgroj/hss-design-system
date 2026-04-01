import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Core/Alert',
  component: Alert,
  argTypes: {
    variant: { control: 'select', options: ['success', 'error', 'warning', 'info'] },
    dismissible: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: { children: 'This is an informational alert message.', variant: 'info' },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 400 }}>
      <Alert variant="success">Operation completed successfully.</Alert>
      <Alert variant="error">Something went wrong. Please try again.</Alert>
      <Alert variant="warning">Please review before proceeding.</Alert>
      <Alert variant="info">New updates are available.</Alert>
    </div>
  ),
};

export const Dismissible: Story = {
  args: { children: 'This alert can be dismissed.', variant: 'info', dismissible: true },
};
