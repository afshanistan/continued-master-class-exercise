import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { FilterDrawer } from './FilterDrawer';
import { FiltersButton } from '../FiltersButton/FiltersButton';
import { EMPTY_FILTERS, type Filters } from '../../data/courses';
import { totalApplied } from '../FilterBlock/groups';

const meta: Meta<typeof FilterDrawer> = { title: 'Organisms/Filter Drawer', component: FilterDrawer, globals: { viewport: { value: 'mobile2', isRotated: false } } };
export default meta;

/** Tap Filters to open. Toggle chips (the button count updates live), then Show. ×, scrim, or Esc discards. */
export const Flow: StoryObj<typeof FilterDrawer> = {
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [applied, setApplied] = useState<Filters>(EMPTY_FILTERS);
    return (
      <div style={{ display: 'grid', gap: 16, justifyItems: 'start' }}>
        <FiltersButton count={totalApplied(applied)} expanded={open} onClick={() => setOpen(true)} />
        <p className="text-body-small" style={{ margin: 0 }}>Applied: {[...applied.topic, ...applied.credit, ...applied.taughtWith].join(', ') || 'none'}</p>
        <FilterDrawer open={open} applied={applied} onApply={setApplied} onClose={() => setOpen(false)} />
      </div>
    );
  },
};
