import './Badge.css';

/** Gold "New" tag for recently added courses (gold = celebration). */
export function NewTag() {
  return <span className="c-new-tag">New</span>;
}

/** Solid magenta count, e.g., number of applied filters. */
export function CountBadge({ count, label }: { count: number; label?: string }) {
  return (
    <span className="c-count-badge">
      {count}<span className="visually-hidden"> {label ?? 'applied'}</span>
    </span>
  );
}
