import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { FilterBlock } from './FilterBlock';
import { courses, matches, EMPTY_FILTERS, type Filters } from '../../data/courses';

const meta: Meta<typeof FilterBlock> = { title: 'Organisms/Filter Block', component: FilterBlock, parameters: { layout: 'padded' } };
export default meta;
type Story = StoryObj<typeof FilterBlock>;

function Live({ initial = EMPTY_FILTERS }: { initial?: Filters }) {
  const [f, setF] = useState<Filters>(initial);
  const shown = courses.filter((c) => matches(c, f)).length;
  return (
    <div style={{ minHeight: 440 }}>
      <FilterBlock filters={f} onChange={setF} shown={shown} />
      <p className="text-body-small" style={{ marginTop: 24, color: 'var(--color-text-secondary)' }}>
        Matching: {courses.filter((c) => matches(c, f)).map((c) => c.title).join(' · ')}
      </p>
    </div>
  );
}

/** Desktop/tablet bar. Fully live: dropdowns, pills, Clear all, result count. */
export const Desktop: Story = { render: () => <Live /> };
export const DesktopApplied: Story = { render: () => <Live initial={{ topic: ['neuro', 'aac'], credit: [], taughtWith: ['OT'] }} /> };
/** Mobile: Filters button opens the drawer. */
export const Mobile: Story = { globals: { viewport: { value: 'mobile2', isRotated: false } }, render: () => <Live /> };
export const MobileApplied: Story = { globals: { viewport: { value: 'mobile2', isRotated: false } }, render: () => <Live initial={{ topic: ['neuro', 'aac'], credit: [], taughtWith: [] }} /> };
