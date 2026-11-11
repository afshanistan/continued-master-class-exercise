import { useLayoutEffect, useRef, useState } from 'react';
import { courses, matches, EMPTY_FILTERS, type Filters } from '../../data/courses';
import { FilterBlock } from '../../components/FilterBlock/FilterBlock';
import { CourseCard } from '../../components/CourseCard/CourseCard';
import { Button } from '../../components/Button/Button';
import { EASE, T, flipPlay, flipSnapshot, reducedMotion, type FlipSnapshot } from '../../motion/motion';
import { useAppearOnScroll } from '../../hooks/useAppearOnScroll';
import './Catalog.css';

const CARD = ':scope > li';

/**
 * Heading + Filter Block + course grid. Owns the filter state.
 * Motion: on every filter change the grid reflows with FLIP (leaving cards fade out, staying cards
 * slide to their new spot, new cards rise in with a small stagger); if the grid's top has scrolled
 * above the viewport, the page eases back to the filter bar. Reduced motion: instant.
 */
export function Catalog({ initialFilters = EMPTY_FILTERS }: { initialFilters?: Filters }) {
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const shown = courses.filter((c) => matches(c, filters));
  const section = useRef<HTMLElement>(null);
  const grid = useRef<HTMLUListElement>(null);
  const snap = useRef<FlipSnapshot | null>(null);

  useAppearOnScroll(section, '.s-catalog__heading, .c-filter-block', { rootMargin: '0px 0px 15% 0px' });

  const change = (f: Filters) => { snap.current = flipSnapshot(grid.current, CARD); setFilters(f); };

  useLayoutEffect(() => {
    const before = snap.current; snap.current = null;
    if (!before) return;
    flipPlay(grid.current, CARD, before, {
      move: T.cardMove,
      enter: { keyframes: [{ opacity: 0, transform: `translateY(${T.cardEnterY}px)` }, { opacity: 1, transform: 'none' }], duration: T.cardEnter, easing: EASE.appear, stagger: T.cardStagger, staggerMax: T.cardStaggerMax },
      leave: { duration: T.cardLeave, scale: T.cardLeaveScale },
    });
    // M9: if the grid's top is above the viewport, bring the filter bar back into view.
    const g = grid.current?.getBoundingClientRect();
    const bar = section.current?.querySelector('.c-filter-block');
    if (g && bar && g.top < 0) {
      scrollTo({ top: bar.getBoundingClientRect().top + scrollY - T.scrollOffset, behavior: reducedMotion() ? 'auto' : 'smooth' });
    }
  }, [filters]);

  return (
    <section ref={section} className="s-catalog" id="catalog" aria-labelledby="catalog-title">
      <div className="s-catalog__content">
        <h2 id="catalog-title" className="s-catalog__heading text-display-small">Browse Master Classes</h2>
        <FilterBlock filters={filters} onChange={change} shown={shown.length} />
        {/* The list stays mounted (even when empty) so leaving cards can fade out in place. */}
        <ul ref={grid} className="s-catalog__grid">
          {shown.map((c) => <li key={c.id} data-flip-key={c.id}><CourseCard course={c} /></li>)}
        </ul>
        {shown.length === 0 && (
          <div className="s-catalog__empty">
            <p className="text-title">No courses match these filters</p>
            <p className="text-body">Try removing a filter, or start over.</p>
            <Button size="medium" onClick={() => change(EMPTY_FILTERS)}>Clear all filters</Button>
          </div>
        )}
      </div>
    </section>
  );
}
