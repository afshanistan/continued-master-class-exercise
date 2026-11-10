import './Stat.css';

/**
 * Hero stat: figure + label. Stacked on desktop/tablet, inline (shared baseline)
 * on mobile. Icons are off by design decision.
 */
export function Stat({ figure, label, layout = 'auto' }: { figure: string; label: string; layout?: 'auto' | 'stacked' | 'inline' }) {
  return (
    <div className={`c-stat c-stat--${layout}`}>
      <span className="c-stat__figure">{figure}</span>
      <span className="c-stat__label">{label}</span>
    </div>
  );
}
