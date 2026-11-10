import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckItem } from './CheckItem';

const meta: Meta<typeof CheckItem> = { title: 'Molecules/Check Item', component: CheckItem };
export default meta;

const list = (surface: 'light' | 'dark', size: 'default' | 'small') => (
  <ul style={{ display: 'grid', gap: 12, padding: 0, margin: 0 }}>
    <CheckItem surface={surface} size={size}>ASHA Approved CE Provider</CheckItem>
    <CheckItem surface={surface} size={size}>Unlimited courses for one year</CheckItem>
  </ul>
);

export const OnLight: StoryObj = {
  globals: { backgrounds: { value: 'card' } },
  render: () => <div style={{ display: 'flex', gap: 48 }}>{list('light', 'default')}{list('light', 'small')}</div>,
};
export const OnDark: StoryObj = {
  globals: { backgrounds: { value: 'inverse' } },
  render: () => <div style={{ display: 'flex', gap: 48 }}>{list('dark', 'default')}{list('dark', 'small')}</div>,
};
