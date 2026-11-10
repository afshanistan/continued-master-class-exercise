import { useState } from 'react';
import { courses, matches, EMPTY_FILTERS, type Filters } from '../../data/courses';
import { FilterBlock } from '../../components/FilterBlock/FilterBlock';
import { CourseCard } from '../../components/CourseCard/CourseCard';
import { Button } from '../../components/Button/Button';
import './Catalog.css';

/** Heading + Filter Block + course grid. Owns the filter state. (Grid motion: Phase 6.) */
export function Catalog({ initialFilters = EMPTY_FILTERS }: { initialFilters?: Filters }) {
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const shown = courses.filter((c) => matches(c, filters));
  return (
    <section className="s-catalog" id="catalog" aria-labelledby="catalog-title">
      <div className="s-catalog__content">
        <h2 id="catalog-title" className="s-catalog__heading text-display-small">Browse Master Classes</h2>
        <FilterBlock filters={filters} onChange={setFilters} shown={shown.length} />
        {shown.length > 0 ? (
          <ul className="s-catalog__grid">
            {shown.map((c) => <li key={c.id}><CourseCard course={c} /></li>)}
          </ul>
        ) : (
          <div className="s-catalog__empty">
            <p className="text-title">No courses match these filters</p>
            <p className="text-body">Try removing a filter, or start over.</p>
            <Button size="medium" onClick={() => setFilters(EMPTY_FILTERS)}>Clear all filters</Button>
          </div>
        )}
      </div>
    </section>
  );
}
