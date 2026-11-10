import type { Meta, StoryObj } from '@storybook/react-vite';
import { CourseImage } from './CourseImage';
import { courses, TOPIC_LABELS, type Topic } from '../../data/courses';

const meta: Meta<typeof CourseImage> = { title: 'Molecules/Course Image', component: CourseImage };
export default meta;

/** One real course photo per topic. */
export const AllTopics: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 280px)', gap: 16 }}>
      {(Object.keys(TOPIC_LABELS) as Topic[]).map((t) => {
        const c = courses.find((x) => x.topic === t)!;
        return (
          <figure key={t} style={{ margin: 0 }}>
            <CourseImage src={c.image} topic={t} />
            <figcaption className="text-label" style={{ marginTop: 8 }}>{TOPIC_LABELS[t]}</figcaption>
          </figure>
        );
      })}
    </div>
  ),
};
