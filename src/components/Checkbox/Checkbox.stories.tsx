import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = { title: 'Atoms/Checkbox', component: Checkbox, args: { 'aria-label': 'Example' } };
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Playground: Story = {};
export const States: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, auto)', gap: '16px 32px', alignItems: 'center' }}>
      <span /> <span className="text-label">Default</span> <span className="text-label">Hover</span> <span className="text-label">Focus</span>
      <span className="text-label">Unchecked</span>
      <Checkbox aria-label="Unchecked" readOnly /> <Checkbox aria-label="Unchecked hover" data-state="hover" readOnly /> <Checkbox aria-label="Unchecked focus" data-state="focus" readOnly />
      <span className="text-label">Checked</span>
      <Checkbox aria-label="Checked" checked readOnly /> <Checkbox aria-label="Checked hover" checked data-state="hover" readOnly /> <Checkbox aria-label="Checked focus" checked data-state="focus" readOnly />
    </div>
  ),
};
