import type { Meta, StoryObj } from '@storybook/react-vite';
import { MembershipCard } from './MembershipCard';

const meta: Meta<typeof MembershipCard> = { title: 'Organisms/Membership Card', component: MembershipCard };
export default meta;
export const Desktop: StoryObj<typeof MembershipCard> = { decorators: [(S) => <div style={{ width: 640 }}><S /></div>] };
export const Mobile: StoryObj<typeof MembershipCard> = { decorators: [(S) => <div style={{ width: 358 }}><S /></div>] };
