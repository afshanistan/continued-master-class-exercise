import type { Meta, StoryObj } from '@storybook/react-vite';
import { TopicPill } from './TopicPill';
import { TOPIC_LABELS, type Topic } from '../../data/courses';

const meta: Meta<typeof TopicPill> = {
  title: 'Atoms/Topic Pill',
  component: TopicPill,
  args: { topic: 'neuro' },
  argTypes: { topic: { control: 'select', options: Object.keys(TOPIC_LABELS) } },
};
export default meta;
type Story = StoryObj<typeof TopicPill>;

export const Playground: Story = {};
export const AllTopics: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      {(Object.keys(TOPIC_LABELS) as Topic[]).map((t) => <TopicPill key={t} topic={t} />)}
    </div>
  ),
};
