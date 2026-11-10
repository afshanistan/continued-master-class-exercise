import type { Meta, StoryObj } from '@storybook/react-vite';
import { Clock, Award, MessageSquare } from 'lucide-react';
import { MetaItem } from './MetaItem';

const meta: Meta<typeof MetaItem> = { title: 'Molecules/Meta Item', component: MetaItem, parameters: { backgrounds: { value: 'card' } } };
export default meta;

export const Row: StoryObj = {
  globals: { backgrounds: { value: 'card' } },
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <MetaItem icon={Clock}>4 hrs</MetaItem>
      <MetaItem icon={Award}>0.4 CEUs</MetaItem>
      <MetaItem icon={MessageSquare}>2,642 reviews</MetaItem>
    </div>
  ),
};
