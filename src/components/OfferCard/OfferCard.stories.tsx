import type { Meta, StoryObj } from '@storybook/react-vite';
import { OfferCard } from './OfferCard';

const meta: Meta<typeof OfferCard> = {
  title: 'Organisms/Offer Card',
  component: OfferCard,
  globals: { backgrounds: { value: 'inverse' } },
  argTypes: { layout: { control: 'inline-radio', options: ['auto', 'three', 'two', 'stacked'] } },
};
export default meta;
type Story = StoryObj<typeof OfferCard>;
const w = (px: number) => [(S: () => React.ReactNode) => <div style={{ width: px }}><S /></div>];

export const ThreeZones: Story = { args: { layout: 'three' }, decorators: w(1092) };
export const TwoColumn: Story = { args: { layout: 'two' }, decorators: w(704) };
export const Stacked: Story = { args: { layout: 'stacked' }, decorators: w(358) };
/** Resize the canvas (or use the viewport toolbar) to see it switch at 1200 and 768. */
export const Responsive: Story = { args: { layout: 'auto' }, parameters: { layout: 'padded' } };
