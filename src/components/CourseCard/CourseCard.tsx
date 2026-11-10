import { Clock, Award, MessageSquare } from 'lucide-react';
import type { Course } from '../../data/courses';
import { formatHours, formatCeus, formatReviews, taughtByLabel } from '../../data/courses';
import { CourseImage } from '../CourseImage/CourseImage';
import { TopicPill } from '../TopicPill/TopicPill';
import { NewTag } from '../Badge/Badge';
import { MetaItem } from '../MetaItem/MetaItem';
import { Button } from '../Button/Button';
import './CourseCard.css';

/**
 * Course card. The title is the course link and View course is the explicit CTA.
 * No whole-card click and no card hover (deliberate). Equal heights come from the grid.
 */
export function CourseCard({ course: c, headingLevel = 3 }: { course: Course; headingLevel?: 2 | 3 | 4 }) {
  const H = `h${headingLevel}` as 'h3';
  const longer = c.fullTitle !== c.title;
  return (
    <article className="c-course-card">
      <CourseImage src={c.image} topic={c.topic} />
      <div className="c-course-card__content">
        <div className="c-course-card__body">
          <div className="c-course-card__labels">
            <div className="c-course-card__tags">
              <TopicPill topic={c.topic} />
              {c.isNew && <NewTag />}
            </div>
            <div className="c-course-card__meta">
              <MetaItem icon={Clock}>{formatHours(c.hours)}</MetaItem>
              <MetaItem icon={Award}>{formatCeus(c.hours)}</MetaItem>
              {c.reviews > 0 && <MetaItem icon={MessageSquare}>{formatReviews(c.reviews)}</MetaItem>}
            </div>
          </div>
          <div className="c-course-card__heading">
            <H className="c-course-card__title text-title">
              <a href={c.url}>
                {c.title}
                {/* Short title is visible; the full title follows for screen readers.
                    Keeps the visible words in the accessible name (WCAG 2.5.3). */}
                {longer && <span className="visually-hidden">. Full title: {c.fullTitle}</span>}
              </a>
            </H>
            <p className="c-course-card__taught text-label">{taughtByLabel(c)}</p>
          </div>
          <p className="c-course-card__outcome text-body">You'll learn to {c.outcome}</p>
        </div>
        <Button href={c.url} fullWidth className="c-course-card__cta" aria-label={`View course: ${c.title}`}>View course</Button>
      </div>
    </article>
  );
}
