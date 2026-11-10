import { ListFilter } from 'lucide-react';
import { CountBadge } from '../Badge/Badge';
import './FilterBy.css';

/** Label that leads the desktop filter bar, with the total applied count. Not interactive. */
export function FilterBy({ count = 0 }: { count?: number }) {
  return (
    <span className="c-filter-by">
      <ListFilter size={16} strokeWidth={2} aria-hidden="true" />
      <span>Filter by</span>
      {count > 0 && <CountBadge count={count} label="filters applied" />}
    </span>
  );
}
