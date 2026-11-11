import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  args: { children: 'Join now', surface: 'light', size: 'large' },
  argTypes: { surface: { control: 'inline-radio', options: ['light', 'dark'] }, size: { control: 'inline-radio', options: ['large', 'medium'] } },
};
export default meta;
type Story = StoryObj<typeof Button>;

const states = ['default', 'hover', 'pressed', 'focus'] as const;
const Row = ({ surface, size }: { surface: 'light' | 'dark'; size: 'large' | 'medium' }) => (
  <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
    {states.map((s) => (
      <div key={s} style={{ display: 'grid', gap: 8, justifyItems: 'center' }}>
        <Button surface={surface} size={size} data-state={s === 'default' ? undefined : s}>Join now</Button>
        <span className="text-label" style={{ color: surface === 'dark' ? 'var(--color-text-on-inverse-muted)' : 'var(--color-text-secondary)' }}>{s}</span>
      </div>
    ))}
  </div>
);

export const Playground: Story = {};
export const OnLight: Story = { render: () => <div style={{ display: 'grid', gap: 24 }}><Row surface="light" size="large" /><Row surface="light" size="medium" /></div> };
export const OnDark: Story = {
  parameters: { backgrounds: { value: 'inverse' } },
  globals: { backgrounds: { value: 'inverse' } },
  render: () => <div style={{ display: 'grid', gap: 24 }}><Row surface="dark" size="large" /><Row surface="dark" size="medium" /></div>,
};
export const FullWidth: Story = { args: { fullWidth: true, children: 'View course' }, decorators: [(S) => <div style={{ width: 320 }}><S /></div>] };

/** Navigating actions (Join now, View course) render a real link with the same look. */
export const AsLink: Story = { args: { href: '#', children: 'View course' } };

/** Tertiary text button, shown with its primary partner (Filter Menu footer). */
export const TextVariant: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      {(['default', 'hover', 'pressed', 'focus'] as const).map((st) => (
        <div key={st} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <span className="text-label" style={{ width: 64 }}>{st}</span>
          <Button variant="text" size="medium" data-state={st === 'default' ? undefined : st}>Clear</Button>
          <Button size="medium">Apply</Button>
        </div>
      ))}
    </div>
  ),
};
