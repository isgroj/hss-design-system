import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Core/Card',
  component: Card,
  argTypes: {
    elevated: { control: 'boolean' },
    padding: { control: 'select', options: ['none', 'sm', 'md', 'lg'] },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'Card content goes here. This is a basic surface container.',
    padding: 'md',
  },
};

export const Elevated: Story = {
  args: {
    children: 'Elevated card with shadow.',
    elevated: true,
    padding: 'md',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <Card padding="sm" style={{ width: 200 }}>Small padding</Card>
      <Card padding="md" style={{ width: 200 }}>Medium padding</Card>
      <Card padding="lg" style={{ width: 200 }}>Large padding</Card>
      <Card elevated padding="md" style={{ width: 200 }}>Elevated</Card>
    </div>
  ),
};
