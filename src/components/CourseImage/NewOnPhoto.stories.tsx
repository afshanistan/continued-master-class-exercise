import type { Meta, StoryObj } from '@storybook/react-vite';
import { CourseImage } from './CourseImage';
import { NewTag } from '../Badge/Badge';
import { courses, TOPIC_LABELS, type Topic } from '../../data/courses';
import './explore-new-on-photo.css';

const meta: Meta = { title: 'Explorations/New pill on photo', parameters: { layout: 'padded' }, globals: { backgrounds: { value: 'card' } } };
export default meta;

const VARIANTS = [
  { key: 'plain', label: 'A · Plain' },
  { key: 'shadow', label: 'B · + Shadow (Elevation/1)' },
  { key: 'edge', label: 'C · + Shadow + 2px white edge' },
  { key: 'gold', label: 'D · Gold 400 + Shadow' },
] as const;

/** The gold New pill on every topic tint, four treatments. Watch Language (tan). */
export const Comparison: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'auto repeat(4, 318px)', gap: '20px 24px', alignItems: 'center' }}>
      <span />
      {VARIANTS.map((v) => <span key={v.key} className="text-label-strong">{v.label}</span>)}
      {(Object.keys(TOPIC_LABELS) as Topic[]).map((t) => {
        const c = courses.find((x) => x.topic === t)!;
        return [
          <span key={`${t}-l`} className="text-label">{TOPIC_LABELS[t]}</span>,
          ...VARIANTS.map((v) => (
            <div key={`${t}-${v.key}`} className={`x-photo x-photo--${v.key}`}>
              <NewTag />
              <CourseImage src={c.image} topic={t} />
            </div>
          )),
        ];
      })}
    </div>
  ),
};
