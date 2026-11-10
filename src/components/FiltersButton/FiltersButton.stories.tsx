import type { Meta, StoryObj } from '@storybook/react-vite';
import { Fragment } from 'react';
import { FiltersButton } from './FiltersButton';

const meta: Meta<typeof FiltersButton> = { title: 'Atoms/Filters Button', component: FiltersButton, args: { count: 0 } };
export default meta;
type Story = StoryObj<typeof FiltersButton>;
export const Playground: Story = {};
const states = ['default', 'hover', 'pressed', 'focus'] as const;
export const States: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'auto repeat(4, auto)', gap: '16px 20px', alignItems: 'center' }}>
      <span />{states.map((s) => <span key={s} className="text-label">{s[0].toUpperCase() + s.slice(1)}</span>)}
      {[0, 2].map((n) => (
        <Fragment key={n}>
          <span className="text-label">{n ? 'Applied' : 'Not applied'}</span>
          {states.map((s) => <FiltersButton key={`${n}${s}`} count={n} data-state={s === 'default' ? undefined : s} />)}
        </Fragment>
      ))}
    </div>
  ),
};
