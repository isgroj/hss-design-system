import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../../components/Button/Button';

const meta: Meta<typeof Modal> = {
  title: 'Patterns/Modal',
  component: Modal,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          title="Confirm Action"
          footer={
            <>
              <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => setOpen(false)}>Confirm</Button>
            </>
          }
        >
          <p>Are you sure you want to proceed? This action will update the workbook configuration.</p>
        </Modal>
      </>
    );
  },
};

export const LargeModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Large Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Dataset Configuration"
          size="lg"
          footer={
            <>
              <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => setOpen(false)}>Save Changes</Button>
            </>
          }
        >
          <p>Configure your dataset settings here. This modal can hold complex forms and content that requires more horizontal space.</p>
          <p style={{ marginTop: 16 }}>Additional configuration options would appear below with form fields, toggles, and dropdowns.</p>
        </Modal>
      </>
    );
  },
};
