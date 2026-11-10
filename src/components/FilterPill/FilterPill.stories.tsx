import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { FilterPill } from './FilterPill';

const meta: Meta<typeof FilterPill> = { title: 'Molecules/Filter Pill', component: FilterPill, args: { label: 'Occupational therapist' } };
export default meta;
type Story = StoryObj<typeof FilterPill>;

export const Playground: Story = {};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      {(['default', 'hover', 'pressed', 'focus'] as const).map((s) => (
        <div key={s} style={{ display: 'grid', gap: 8, justifyItems: 'start' }}>
          <span className="text-label">{s[0].toUpperCase() + s.slice(1)}</span>
          <FilterPill label="Occupational therapist" data-state={s === 'default' ? undefined : s} />
        </div>
      ))}
    </div>
  ),
};

export const Truncated: Story = { args: { label: 'A very long applied filter label that should truncate with an ellipsis' } };

/** Click a pill to remove it. Exit animation comes in Phase 6. */
export const RemoveRow: Story = {
  render: function Render() {
    const [pills, setPills] = useState(['Neuro', 'AAC', '4–4.5 hrs', 'Occupational therapist']);
    return (
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', maxWidth: 520 }}>
        {pills.map((p) => <FilterPill key={p} label={p} onClick={() => setPills(pills.filter((x) => x !== p))} />)}
        {pills.length === 0 && <span className="text-body-small">All removed. Reload the story to reset.</span>}
      </div>
    );
  },
};
