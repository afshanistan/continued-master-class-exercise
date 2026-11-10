import type { Meta, StoryObj } from '@storybook/react-vite';
import { CloseButton } from './CloseButton';

const meta: Meta<typeof CloseButton> = { title: 'Atoms/Close Button', component: CloseButton, globals: { backgrounds: { value: 'card' } } };
export default meta;
export const States: StoryObj<typeof CloseButton> = {
  render: () => (
    <div style={{ display: 'flex', gap: 24 }}>
      {(['default', 'hover', 'pressed', 'focus'] as const).map((s) => (
        <div key={s} style={{ display: 'grid', gap: 8, justifyItems: 'center' }}>
          <CloseButton label="Close filters" data-state={s === 'default' ? undefined : s} />
          <span className="text-label">{s}</span>
        </div>
      ))}
    </div>
  ),
};
