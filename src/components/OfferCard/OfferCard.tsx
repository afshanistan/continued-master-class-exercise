import { CheckItem } from '../CheckItem/CheckItem';
import { ActionGroup } from '../ActionGroup/ActionGroup';
import './OfferCard.css';

export interface OfferCardProps {
  /** auto = Three zones ≥1200, Two column 768–1199, Stacked <768. Others force a layout (stories). */
  layout?: 'auto' | 'three' | 'two' | 'stacked';
}

/** The offer bar at the bottom of the hero (dark surface). */
export function OfferCard({ layout = 'auto' }: OfferCardProps) {
  return (
    <div className={`c-offer c-offer--${layout}`}>
      <p className="c-offer__price text-title-large">Unlimited access for <span className="nowrap">$129/year</span></p>
      <ul className="c-offer__proof">
        <CheckItem size="small" surface="dark">Every Master Class plus 450+ courses</CheckItem>
        <CheckItem size="small" surface="dark">ASHA Approved CE Provider</CheckItem>
      </ul>
      <ActionGroup className="c-offer__actions" />
    </div>
  );
}
