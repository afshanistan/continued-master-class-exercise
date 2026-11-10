import './Badge.css';

/** Gold "New" tag for recently added courses (gold = celebration). */
export function NewTag() {
  return <span className="c-new-tag">New</span>;
}

/** Solid magenta count, e.g., number of applied filters. */
export function CountBadge({ count, label }: { count: number; label?: string }) {
  return (
    <span className="c-count-badge" aria-label={label ?? `${count} applied`}>
      {count}
    </span>
  );
}
