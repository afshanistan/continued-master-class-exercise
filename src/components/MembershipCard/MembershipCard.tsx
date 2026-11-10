import { CheckItem } from '../CheckItem/CheckItem';
import { ActionGroup } from '../ActionGroup/ActionGroup';
import './MembershipCard.css';

const BENEFITS = [
  '450+ courses in 30+ topic areas',
  'New live webinars every week',
  'Video, audio, and text, available 24/7',
  'A certificate for every course',
];

export function MembershipCard() {
  return (
    <div className="c-membership">
      <div className="c-membership__header">
        <h3 className="c-membership__eyebrow text-eyebrow">Annual membership</h3>
        <p className="c-membership__price">
          <span className="text-heading">$129/year</span>
          <span className="c-membership__monthly text-body">≈ $10.75/month</span>
        </p>
        <p className="c-membership__includes text-body-large">Unlimited access to every Master Class, plus:</p>
      </div>
      <ul className="c-membership__benefits">
        {BENEFITS.map((b) => <CheckItem key={b} surface="dark">{b}</CheckItem>)}
      </ul>
      <ActionGroup layout="stacked" />
    </div>
  );
}
