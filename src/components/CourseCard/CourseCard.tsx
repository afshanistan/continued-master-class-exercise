import { Clock, Award } from 'lucide-react';
import type { Course } from '../../data/courses';
import { formatHours, formatCeus, taughtByLabel } from '../../data/courses';
import { CourseImage } from '../CourseImage/CourseImage';
import { TopicPill } from '../TopicPill/TopicPill';
import { NewTag } from '../Badge/Badge';
import { Button } from '../Button/Button';
import { MetaItem } from '../MetaItem/MetaItem';
import './CourseCard.css';

/**
 * Course card: topic → title → taught by → outcome, then a footer pinned to the bottom
 * (hours + CEUs with icons, then View course) so footers line up across a row.
 * The title is the course link and View course is the explicit CTA.
 * No whole-card click and no card hover (deliberate). Reviews are not shown on the card.
 */
export function CourseCard({ course: c, headingLevel = 3, newPlacement = 'row' }: {
  course: Course; headingLevel?: 2 | 3 | 4;
  /** 'row' (default) = squared sparkle badge at the right of the tag row. 'photo' = earlier pill-on-image exploration (D). */
  newPlacement?: 'photo' | 'row';
}) {
  const H = `h${headingLevel}` as 'h3';
  const longer = c.fullTitle !== c.title;
  return (
    <article className="c-course-card">
      <div className="c-course-card__media">
        {c.isNew && newPlacement === 'photo' && <NewTag />}
        <CourseImage src={c.image} topic={c.topic} />
      </div>
      <div className="c-course-card__content">
        <div className="c-course-card__tags">
          <TopicPill topic={c.topic} />
          {c.isNew && newPlacement === 'row' && <NewTag variant="badge" />}
        </div>
        <div className="c-course-card__heading">
          <H className="c-course-card__title">
            <a href={c.url}>
              {c.title}
              {/* Short title is visible; the full title follows for screen readers.
                  Keeps the visible words in the accessible name (WCAG 2.5.3). */}
              {longer && <span className="visually-hidden">. Full title: {c.fullTitle}</span>}
            </a>
          </H>
          <p className="c-course-card__taught text-label">{taughtByLabel(c)}</p>
        </div>
        <p className="c-course-card__outcome text-body">{c.outcome}</p>
        <div className="c-course-card__footer">
          <p className="c-course-card__meta">
            <MetaItem icon={Clock}>{formatHours(c.hours)}</MetaItem>
            <MetaItem icon={Award}>{formatCeus(c.hours)}</MetaItem>
          </p>
          <Button href={c.url} fullWidth aria-label={`View course: ${c.title}`}>View course</Button>
        </div>
      </div>
    </article>
  );
}
