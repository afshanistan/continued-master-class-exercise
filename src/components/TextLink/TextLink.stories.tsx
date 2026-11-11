import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextLink } from './TextLink';

const meta: Meta<typeof TextLink> = {
  title: 'Atoms/Text Link',
  component: TextLink,
  args: { children: 'Log in', href: '#', tone: 'default', surface: 'light' },
};
export default meta;
type Story = StoryObj<typeof TextLink>;

const states = ['default', 'hover', 'focus'] as const;
const Row = (p: { tone: 'default' | 'subtle'; surface: 'light' | 'dark'; label: string }) => (
  <div style={{ display: 'flex', gap: 32 }}>
    {states.map((s) => (
      <div key={s} style={{ display: 'grid', gap: 8 }}>
        <TextLink href="#" tone={p.tone} surface={p.surface} data-state={s === 'default' ? undefined : s}>{p.label}</TextLink>
        <span className="text-label" style={{ color: p.surface === 'dark' ? 'var(--color-text-on-inverse-muted)' : 'var(--color-text-secondary)' }}>{s}</span>
      </div>
    ))}
  </div>
);

export const Playground: Story = {};
export const Default: Story = { render: () => <Row tone="default" surface="light" label="Log in" /> };
export const Subtle: Story = { render: () => <Row tone="subtle" surface="light" label="850 reviews" /> };
export const OnDark: Story = { globals: { backgrounds: { value: 'inverse' } }, render: () => <Row tone="default" surface="dark" label="Log in" /> };

/** Hover: color + underline thickens. Second example: a link inline in a sentence that wraps (every line is underlined). */
export const Inline: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 24, width: 220 }}>
      <TextLink href="#">Clear all</TextLink>
      <p className="text-body-small" style={{ margin: 0 }}>
        Read what members say: <TextLink href="#" tone="subtle">TrustScore details and all 850 reviews on Trustpilot</TextLink>, updated weekly.
      </p>
    </div>
  ),
};
