import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { ToggleChip } from './ToggleChip';

const meta: Meta<typeof ToggleChip> = {
  title: 'Atoms/Toggle Chip',
  component: ToggleChip,
  args: { label: 'Neuro', count: 3, selected: false },
};
export default meta;
type Story = StoryObj<typeof ToggleChip>;

const states = ['default', 'hover', 'pressed', 'focus'] as const;
export const States: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      {[false, true].map((sel) => (
        <div key={String(sel)} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <span className="text-label" style={{ width: 80 }}>{sel ? 'Selected' : 'Unselected'}</span>
          {states.map((s) => <ToggleChip key={s} label="Neuro" count={3} selected={sel} data-state={s === 'default' ? undefined : s} />)}
        </div>
      ))}
    </div>
  ),
};

export const Interactive: Story = {
  render: function Render() {
    const [on, setOn] = useState(false);
    return <ToggleChip label="Early Intervention" count={3} selected={on} onClick={() => setOn(!on)} />;
  },
};
