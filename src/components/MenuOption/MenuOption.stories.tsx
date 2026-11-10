import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { MenuOption } from './MenuOption';
import { filterGroups } from '../../data/courses';

const meta: Meta<typeof MenuOption> = {
  title: 'Molecules/Menu Option',
  component: MenuOption,
  globals: { backgrounds: { value: 'card' } },
};
export default meta;
type Story = StoryObj<typeof MenuOption>;

const noop = () => {};
export const States: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 264px)', gap: 16 }}>
      <MenuOption label="Neuro" count={4} checked={false} onChange={noop} />
      <MenuOption label="Neuro" count={4} checked={false} onChange={noop} data-state="hover" />
      <MenuOption label="Neuro" count={4} checked onChange={noop} />
      <MenuOption label="Neuro" count={4} checked onChange={noop} data-state="hover" />
    </div>
  ),
};

/** The Clinical area list with real counts. Check and uncheck. */
export const Interactive: Story = {
  render: function Render() {
    const [sel, setSel] = useState<string[]>([]);
    return (
      <fieldset style={{ border: 0, padding: 0, margin: 0, width: 264 }}>
        <legend className="visually-hidden">Clinical area</legend>
        {filterGroups.topic.map((o) => (
          <MenuOption key={o.value} label={o.label} count={o.count} checked={sel.includes(o.value)}
            onChange={() => setSel(sel.includes(o.value) ? sel.filter((x) => x !== o.value) : [...sel, o.value])} />
        ))}
      </fieldset>
    );
  },
};
