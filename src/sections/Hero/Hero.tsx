import icon from '../../assets/master-class-icon.svg';
import { Stat } from '../../components/Stat/Stat';
import { OfferCard } from '../../components/OfferCard/OfferCard';
import './Hero.css';

const STATS = [
  { figure: '20+', label: 'Expert instructors' },
  { figure: '16', label: 'In-depth topics' },
  { figure: '0.3–0.5 CEUs', label: 'ASHA credit per class' },
];

/** Center-aligned on desktop and tablet; left-aligned on mobile (Figma: Alignment = Left). */
export function Hero() {
  return (
    <section className="s-hero" aria-labelledby="hero-title">
      <div className="s-hero__content">
        <div className="s-hero__intro">
          <div className="s-hero__message">
            <div className="s-hero__title-group">
              <div className="s-hero__mark">
                <span className="s-hero__tile" aria-hidden="true"><span className="s-hero__icon" style={{ maskImage: `url("${icon}")`, WebkitMaskImage: `url("${icon}")` }} /></span>
                <p className="s-hero__eyebrow text-eyebrow">Master Class series</p>
              </div>
              <h1 id="hero-title" className="s-hero__headline text-display">Learn from the best in speech-language pathology</h1>
            </div>
            <p className="s-hero__definition text-body-large">
              A Master Class is an in-depth, single-topic course for SLPs, taught by a leading expert and built around skills you can apply.
            </p>
          </div>
          <ul className="s-hero__stats">
            {STATS.map((s) => <li key={s.label} className="s-hero__stat"><Stat figure={s.figure} label={s.label} /></li>)}
          </ul>
        </div>
        <div className="s-hero__offer"><OfferCard /></div>
      </div>
    </section>
  );
}
