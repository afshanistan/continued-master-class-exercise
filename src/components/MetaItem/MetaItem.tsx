import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import './MetaItem.css';

/** Icon + short value on a course card (hours, CEUs, review count). Icon is decorative. */
export function MetaItem({ icon: Icon, children }: { icon: LucideIcon; children: ReactNode }) {
  return (
    <span className="c-meta">
      <Icon className="c-meta__icon" size={16} strokeWidth={2} aria-hidden="true" />
      <span className="c-meta__value">{children}</span>
    </span>
  );
}
