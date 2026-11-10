import { X } from 'lucide-react';
import type { ButtonHTMLAttributes } from 'react';
import './FilterPill.css';

export interface FilterPillProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  label: string;
  'data-state'?: 'hover' | 'pressed' | 'focus';
}

/** An applied filter. The whole pill is one button that removes it. */
export function FilterPill({ label, className, ...rest }: FilterPillProps) {
  return (
    <button type="button" aria-label={`Remove filter: ${label}`} className={['c-filter-pill', className].filter(Boolean).join(' ')} {...rest}>
      <span className="c-filter-pill__label">{label}</span>
      <span className="c-filter-pill__close" aria-hidden="true"><X size={12} strokeWidth={2.5} /></span>
    </button>
  );
}
