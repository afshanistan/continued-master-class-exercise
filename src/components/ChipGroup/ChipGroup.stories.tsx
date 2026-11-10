import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { ChipGroup } from './ChipGroup';
import { filterGroups } from '../../data/courses';

const meta: Meta<typeof ChipGroup> = { title: 'Molecules/Chip Group', component: ChipGroup, globals: { backgrounds: { value: 'card' } } };
export default meta;
export const ClinicalArea: StoryObj<typeof ChipGroup> = {
  render: function Render() {
    const [sel, setSel] = useState<string[]>(['neuro']);
    return (
      <div style={{ width: 358 }}>
        <ChipGroup heading="Clinical area" options={filterGroups.topic} selected={sel} onToggle={(v) => setSel(sel.includes(v) ? sel.filter((x) => x !== v) : [...sel, v])} />
      </div>
    );
  },
};
