import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stat } from './Stat';

const meta: Meta<typeof Stat> = {
  title: 'Molecules/Stat',
  component: Stat,
  args: { figure: '20+', label: 'Expert instructors' },
  globals: { backgrounds: { value: 'inverse' } },
};
export default meta;
type Story = StoryObj<typeof Stat>;

export const Playground: Story = {};
export const Stacked: Story = { args: { layout: 'stacked' } };
export const Inline: Story = { args: { layout: 'inline' } };
/** Placeholder figures; the hero row is finalized in Phase 5. */
export const HeroRow: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
      <Stat figure="16" label="In-depth topics" />
      <Stat figure="20+" label="Expert instructors" />
      <Stat figure="3–5" label="Hours each" />
    </div>
  ),
};
