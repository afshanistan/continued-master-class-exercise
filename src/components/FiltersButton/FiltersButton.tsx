import { ListFilter } from 'lucide-react';
import type { ComponentPropsWithRef } from 'react';
import { CountBadge } from '../Badge/Badge';
import '../FilterDropdown/FilterDropdown.css';
import './FiltersButton.css';

export interface FiltersButtonProps extends Omit<ComponentPropsWithRef<'button'>, 'children'> {
  /** Total applied options across groups. */
  count?: number;
  expanded?: boolean;
  'data-state'?: 'hover' | 'pressed' | 'focus';
}

/** Mobile trigger for the Filter Drawer. Same control family as Filter Dropdown. */
export function FiltersButton({ count = 0, expanded = false, className, ...rest }: FiltersButtonProps) {
  return (
    <button type="button" aria-haspopup="dialog" aria-expanded={expanded} data-applied={count > 0 || undefined}
      className={['c-dropdown', 'c-filters-button', className].filter(Boolean).join(' ')} {...rest}>
      <ListFilter size={16} strokeWidth={2} aria-hidden="true" />
      <span>Filters</span>
      {count > 0 && <CountBadge count={count} />}
    </button>
  );
}
