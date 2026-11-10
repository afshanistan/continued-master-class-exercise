import { TextLink } from '../TextLink/TextLink';
import logo from '../../assets/trustpilot-logo.svg';
import './TrustRating.css';

export interface TrustRatingProps {
  /** Placeholder values; in production these come live from Trustpilot's TrustBox. */
  score?: string;
  reviewCount?: number;
  href?: string;
}

export function TrustRating({ score = '4.6', reviewCount = 850, href = 'https://www.trustpilot.com/review/continued.com' }: TrustRatingProps) {
  return (
    <div className="c-trust">
      <span className="c-trust__label">Rated Excellent</span>
      <img className="c-trust__logo" src={logo} alt="Trustpilot" width={66} height={16} />
      <span className="c-trust__count">
        TrustScore {score} ·{' '}
        <TextLink tone="subtle" href={href}>{reviewCount.toLocaleString('en-US')} reviews</TextLink>
      </span>
    </div>
  );
}
