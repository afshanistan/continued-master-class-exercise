import type { Meta, StoryObj } from '@storybook/react-vite';
import { Fragment } from 'react';
import { FilterDropdown } from './FilterDropdown';

const meta: Meta<typeof FilterDropdown> = { title: 'Atoms/Filter Dropdown', component: FilterDropdown, args: { label: 'Clinical area', count: 0, open: false } };
export default meta;
type Story = StoryObj<typeof FilterDropdown>;

export const Playground: Story = {};
const states = ['default', 'hover', 'pressed', 'focus', 'open'] as const;
export const States: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'auto repeat(5, auto)', gap: '16px 20px', alignItems: 'center' }}>
      <span />{states.map((s) => <span key={s} className="text-label">{s[0].toUpperCase() + s.slice(1)}</span>)}
      {[0, 1].map((n) => (
        <Fragment key={n}>
          <span className="text-label">{n ? 'Applied' : 'Not applied'}</span>
          {states.map((s) => (
            <FilterDropdown key={`${n}${s}`} label="Clinical area" count={n} open={s === 'open'}
              data-state={s === 'default' || s === 'open' ? undefined : s} />
          ))}
        </Fragment>
      ))}
    </div>
  ),
};
