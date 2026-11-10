import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { FilterMenu, FilterSelect } from './FilterMenu';
import { filterGroups } from '../../data/courses';

const meta: Meta<typeof FilterMenu> = { title: 'Organisms/Filter Menu', component: FilterMenu };
export default meta;
type Story = StoryObj<typeof FilterMenu>;

/** The panel on its own. */
export const Panel: Story = {
  render: function Render() {
    const [sel, setSel] = useState<string[]>(['neuro', 'aac']);
    return <FilterMenu legend="Clinical area" options={filterGroups.topic} selected={sel}
      onToggle={(v) => setSel(sel.includes(v) ? sel.filter((x) => x !== v) : [...sel, v])} onClear={() => setSel([])} onApply={() => {}} />;
  },
};

/** Full flow: open, check, Apply (or Esc / click outside to discard). */
export const DropdownFlow: Story = {
  parameters: { layout: 'padded' },
  render: function Render() {
    const [topic, setTopic] = useState<string[]>([]);
    const [credit, setCredit] = useState<string[]>([]);
    return (
      <div style={{ minHeight: 420 }}>
        <div style={{ display: 'flex', gap: 12 }}>
          <FilterSelect label="Clinical area" options={filterGroups.topic} applied={topic} onApply={setTopic} />
          <FilterSelect label="Credits" options={filterGroups.credit} applied={credit} onApply={setCredit} />
        </div>
        <p className="text-body-small" style={{ marginTop: 340 }}>Applied: {[...topic, ...credit].join(', ') || 'none'}</p>
      </div>
    );
  },
};
