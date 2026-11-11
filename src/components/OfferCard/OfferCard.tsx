import { CheckItem } from '../CheckItem/CheckItem';
import { ActionGroup } from '../ActionGroup/ActionGroup';
import './OfferCard.css';

export interface OfferCardProps {
  /** auto = by the card's own width: Three zones ≥1000, Two column 520–999, Stacked <520. Others force a layout (stories). */
  layout?: 'auto' | 'three' | 'two' | 'stacked';
}

/** The offer bar at the bottom of the hero (dark surface). */
export function OfferCard({ layout = 'auto' }: OfferCardProps) {
  return (
    <div className="c-offer-wrap">
    <div className={`c-offer c-offer--${layout}`}>
      <p className="c-offer__price text-title-large">Unlimited access for <span className="nowrap">$129/year</span></p>
      <ul className="c-offer__proof">
        <CheckItem size="small" surface="dark">Every Master Class plus 450+ courses</CheckItem>
        <CheckItem size="small" surface="dark">ASHA Approved CE Provider</CheckItem>
      </ul>
      <ActionGroup className="c-offer__actions" />
    </div>
    </div>
  );
}
