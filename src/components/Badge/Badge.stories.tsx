import type { Meta, StoryObj } from '@storybook/react-vite';
import { NewTag, CountBadge } from './Badge';

const meta: Meta = { title: 'Atoms/Badges' };
export default meta;

export const New: StoryObj = { render: () => <NewTag /> };
export const Count: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <CountBadge count={1} /><CountBadge count={2} /><CountBadge count={12} />
    </div>
  ),
};
