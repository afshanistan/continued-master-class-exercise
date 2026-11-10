import { ChevronDown } from 'lucide-react';
import type { ComponentPropsWithRef } from 'react';
import './FilterDropdown.css';

export interface FilterDropdownProps extends Omit<ComponentPropsWithRef<'button'>, 'children'> {
  label: string;
  /** Applied options in this group. 0 = not applied. */
  count?: number;
  open?: boolean;
  'data-state'?: 'hover' | 'pressed' | 'focus';
}

/**
 * Trigger for a Filter Menu. Disclosure pattern: aria-expanded + aria-controls.
 * (No aria-haspopup: the panel is a group of checkboxes, not an ARIA menu.)
 */
export function FilterDropdown({ label, count = 0, open = false, className, ...rest }: FilterDropdownProps) {
  const applied = count > 0;
  return (
    <button type="button" aria-expanded={open} data-applied={applied || undefined}
      className={['c-dropdown', className].filter(Boolean).join(' ')} {...rest}>
      <span>{label}</span>
      {applied && <span className="c-dropdown__count">· {count}<span className="visually-hidden"> applied</span></span>}
      <ChevronDown className="c-dropdown__chevron" size={16} strokeWidth={2} aria-hidden="true" />
    </button>
  );
}
