import { useRef } from 'react';
import { ReviewCard } from '../../components/ReviewCard/ReviewCard';
import { useAppearOnScroll } from '../../hooks/useAppearOnScroll';
import { MembershipCard } from '../../components/MembershipCard/MembershipCard';
import './Join.css';

/** Case (lead + review) and Membership Card. Two columns on desktop; the card wraps below on tablet/mobile. */
export function Join() {
  const ref = useRef<HTMLElement>(null);
  useAppearOnScroll(ref, '.s-join__heading, .s-join__body, .s-join .c-review, .s-join .c-membership');
  return (
    <section ref={ref} className="s-join" aria-labelledby="join-title">
      <div className="s-join__content">
        <div className="s-join__case">
          <div className="s-join__lead">
            <h2 id="join-title" className="s-join__heading text-display-small">Cover your ASHA requirement</h2>
            <p className="s-join__body text-body-large">
              You need 30 hours every 3 years. Two or three Master Classes a year gets you there, with 450+ more courses for everything else.
            </p>
          </div>
          <ReviewCard />
        </div>
        <MembershipCard />
      </div>
    </section>
  );
}
