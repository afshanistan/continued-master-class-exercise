import type { Meta, StoryObj } from '@storybook/react-vite';
import { CourseImage } from './CourseImage';
import { NewTag } from '../Badge/Badge';
import { courses, TOPIC_LABELS, type Topic } from '../../data/courses';
import { CourseCard } from '../CourseCard/CourseCard';
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

const pick = (id: string) => courses.find((c) => c.id === id)!;
const CARDS = ['adult-aac-implementation', 'picu-rehabilitation-trends', 'lewy-body-dementia'];

/** E vs. current (D), in real cards. E: squared badge + filled sparkle at the right end of the tag row. */
export const CardsDvsE: StoryObj = {
  name: 'Cards: D vs E (chosen)',
  render: () => (
    <div style={{ display: 'grid', gap: 32 }}>
      {(['photo', 'row'] as const).map((placement) => (
        <div key={placement} style={{ display: 'grid', gap: 12 }}>
          <span className="text-label-strong">{placement === 'photo' ? 'D · Pill on photo (explored)' : 'E · Squared badge + sparkle, right of tag row (chosen)'}</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 318px)', gap: 24 }}>
            {CARDS.map((id) => <CourseCard key={id} course={pick(id)} newPlacement={placement} />)}
          </div>
        </div>
      ))}
    </div>
  ),
};
