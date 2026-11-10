import type { Meta, StoryObj } from '@storybook/react-vite';
import { CourseCard } from './CourseCard';
import { courses } from '../../data/courses';

const meta: Meta<typeof CourseCard> = { title: 'Organisms/Course Card', component: CourseCard };
export default meta;
type Story = StoryObj<typeof CourseCard>;

const byId = (id: string) => courses.find((c) => c.id === id)!;
const width = (w: number) => [(S: () => React.ReactNode) => <div style={{ width: w }}><S /></div>];

export const Default: Story = { args: { course: byId('parkinsons-amplitude') }, decorators: width(432) };
export const New: Story = { args: { course: byId('picu-rehabilitation-trends') }, decorators: width(432) };
export const Mobile: Story = { args: { course: byId('lewy-body-dementia') }, decorators: width(358) };

/** Different text lengths in one row: cards match heights and the buttons line up. */
export const EqualHeights: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 432px)', gap: 24 }}>
      {['clinical-topics-dysphagia', 'parkinsons-amplitude', 'adult-aac-implementation'].map((id) => <CourseCard key={id} course={byId(id)} />)}
    </div>
  ),
};

/** All 16 real courses. */
export const AllCourses: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
      {courses.map((c) => <CourseCard key={c.id} course={c} />)}
    </div>
  ),
};
