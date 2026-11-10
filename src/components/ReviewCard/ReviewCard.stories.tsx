import type { Meta, StoryObj } from '@storybook/react-vite';
import { ReviewCard } from './ReviewCard';

const meta: Meta<typeof ReviewCard> = { title: 'Organisms/Review Card', component: ReviewCard, globals: { backgrounds: { value: 'card' } } };
export default meta;
export const Desktop: StoryObj<typeof ReviewCard> = { decorators: [(S) => <div style={{ width: 560 }}><S /></div>] };
export const Mobile: StoryObj<typeof ReviewCard> = { decorators: [(S) => <div style={{ width: 358 }}><S /></div>] };
