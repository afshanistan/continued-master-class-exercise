import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta = { title: 'Foundations', parameters: { layout: 'padded' } };
export default meta;

const Swatch = ({ token }: { token: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 320 }}>
    <div style={{ width: 40, height: 40, borderRadius: 8, background: `var(${token})`, boxShadow: 'inset 0 0 0 1px rgb(0 0 0 / 0.08)' }} />
    <code className="text-body-small">{token}</code>
  </div>
);

const Group = ({ title, tokens }: { title: string; tokens: string[] }) => (
  <section style={{ marginBottom: 32 }}>
    <h2 className="text-title" style={{ marginBottom: 12 }}>{title}</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 12 }}>
      {tokens.map((t) => <Swatch key={t} token={t} />)}
    </div>
  </section>
);

export const Colors: StoryObj = {
  render: () => (
    <div>
      <Group title="Surfaces" tokens={['--color-surface-page', '--color-surface-card', '--color-surface-subtle', '--color-surface-inverse']} />
      <Group title="Text" tokens={['--color-text-primary', '--color-text-secondary', '--color-text-secondary-on-subtle', '--color-text-on-inverse', '--color-text-on-inverse-muted', '--color-text-accent-on-inverse', '--color-text-link-subtle']} />
      <Group title="Action" tokens={['--color-action-primary', '--color-action-primary-hover', '--color-action-primary-pressed', '--color-action-primary-on-inverse', '--color-action-primary-on-inverse-hover', '--color-action-primary-on-inverse-pressed']} />
      <Group title="Selection + controls" tokens={['--color-selection-bg', '--color-selection-bg-hover', '--color-selection-text', '--color-control-border', '--color-control-border-interactive', '--color-control-active', '--color-badge-count-bg']} />
      <Group title="Focus" tokens={['--color-focus-ring', '--color-focus-ring-on-inverse']} />
      <Group title="Topics (pill bg · tint · text)" tokens={['neuro', 'dysphagia', 'aac', 'language', 'early-intervention', 'dementia'].flatMap((t) => [`--color-topic-${t}-pill-bg`, `--color-topic-${t}-tint`, `--color-topic-${t}-pill-text`])} />
    </div>
  ),
};

const styles = ['display', 'display-small', 'heading', 'title-large', 'title', 'quote', 'body-large', 'body', 'body-small', 'button', 'label', 'label-strong', 'eyebrow'];

export const Typography: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: 20 }}>
      {styles.map((s) => (
        <div key={s} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', alignItems: 'baseline', gap: 16 }}>
          <code className="text-body-small" style={{ color: 'var(--color-text-secondary)' }}>.text-{s}</code>
          <span className={`text-${s}`}>Learn from the best in speech-language pathology</span>
        </div>
      ))}
    </div>
  ),
};

export const Elevation: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: 32 }}>
      {[1, 2, 3].map((n) => (
        <div key={n} style={{ width: 160, height: 100, borderRadius: 16, background: 'var(--color-surface-card)', boxShadow: `var(--shadow-${n})`, display: 'grid', placeItems: 'center' }}>
          <span className="text-label">--shadow-{n}</span>
        </div>
      ))}
    </div>
  ),
};
