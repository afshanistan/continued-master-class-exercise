import type { Meta, StoryObj } from '@storybook/react-vite';
import { TrustRating } from './TrustRating';

const meta: Meta<typeof TrustRating> = {
  title: 'Molecules/Trust Rating',
  component: TrustRating,
  globals: { backgrounds: { value: 'card' } },
  decorators: [(S) => <div style={{ width: 544 }}><S /></div>],
};
export default meta;
export const Default: StoryObj<typeof TrustRating> = {};
