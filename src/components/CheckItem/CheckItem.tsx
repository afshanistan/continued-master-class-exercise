import type { ReactNode } from 'react';
import { Check } from 'lucide-react';
import './CheckItem.css';

/** A benefit line with a check. Renders an <li>; wrap a set in a <ul>. */
export function CheckItem({ children, size = 'default', surface = 'light' }: { children: ReactNode; size?: 'default' | 'small'; surface?: 'light' | 'dark' }) {
  return (
    <li className={`c-check-item c-check-item--${size} c-check-item--${surface}`}>
      <Check className="c-check-item__icon" size={size === 'small' ? 16 : 20} strokeWidth={3} aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}
