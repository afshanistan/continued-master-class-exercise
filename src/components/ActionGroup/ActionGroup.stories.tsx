import type { Meta, StoryObj } from '@storybook/react-vite';
import { ActionGroup } from './ActionGroup';

const meta: Meta<typeof ActionGroup> = { title: 'Molecules/Action Group', component: ActionGroup, globals: { backgrounds: { value: 'inverse' } } };
export default meta;
type Story = StoryObj<typeof ActionGroup>;
export const Inline: Story = { args: { layout: 'inline' } };
export const Stacked: Story = { args: { layout: 'stacked' }, decorators: [(S) => <div style={{ width: 358 }}><S /></div>] };
