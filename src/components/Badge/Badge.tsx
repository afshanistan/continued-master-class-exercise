import { Sparkles } from 'lucide-react';
import './Badge.css';

/**
 * Gold "New" for recently added courses (gold = celebration).
 * badge = squared, filled sparkle + text, at the right end of the card's tag row (the default; filled = celebration).
 * pill  = rounded, text only (earlier pill-on-photo exploration).
 */
export function NewTag({ variant = 'pill' }: { variant?: 'pill' | 'badge' }) {
  if (variant === 'badge') {
    return (
      <span className="c-new-tag c-new-tag--badge">
        <Sparkles size={16} strokeWidth={1.5} fill="currentColor" aria-hidden="true" />New
      </span>
    );
  }
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
