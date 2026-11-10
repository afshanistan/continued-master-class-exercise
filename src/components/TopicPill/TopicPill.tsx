import type { Topic } from '../../data/courses';
import { TOPIC_LABELS } from '../../data/courses';
import './TopicPill.css';

export function TopicPill({ topic }: { topic: Topic }) {
  return <span className={`c-topic-pill c-topic-pill--${topic}`}>{TOPIC_LABELS[topic]}</span>;
}
