import { TrustRating } from '../TrustRating/TrustRating';
import './ReviewCard.css';

export interface ReviewCardProps {
  quote?: string;
  attribution?: string;
}

/** Member quote + Trustpilot rating. Quote and attribution are placeholders until verified. */
export function ReviewCard({
  quote = 'The dysphagia Master Class changed how I run bedside swallow evals. I used it with a patient the next morning.',
  attribution = 'Dana Scully, MS · Rush Medical',
}: ReviewCardProps) {
  return (
    <figure className="c-review">
      <blockquote className="c-review__quote text-quote"><p>“{quote}”</p></blockquote>
      <figcaption className="c-review__by text-label">{attribution}</figcaption>
      <TrustRating />
    </figure>
  );
}
