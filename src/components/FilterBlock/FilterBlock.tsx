import { useEffect, useRef, useState } from 'react';
import type { Filters } from '../../data/courses';
import { courses, EMPTY_FILTERS } from '../../data/courses';
import { FilterBy } from '../FilterBy/FilterBy';
import { FilterSelect } from '../FilterMenu/FilterMenu';
import { FiltersButton } from '../FiltersButton/FiltersButton';
import { FilterPill } from '../FilterPill/FilterPill';
import { TextLink } from '../TextLink/TextLink';
import { FilterDrawer } from '../FilterDrawer/FilterDrawer';
import { GROUPS, OPTIONS, LABELS, setGroup, totalApplied } from './groups';
import './FilterBlock.css';

export interface FilterBlockProps {
  filters: Filters;
  onChange: (f: Filters) => void;
  /** Courses matching the current filters. */
  shown: number;
  total?: number;
}

/**
 * The catalog filter bar. Desktop/tablet: Filter by + three Filter Selects. Mobile (<768): Filters button
 * (opens the drawer). Both: removable pills + Clear all, then the result count on its own line above the grid.
 */
export function FilterBlock({ filters, onChange, shown, total = courses.length }: FilterBlockProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [focusAfter, setFocusAfter] = useState<number | null>(null);

  const pills = GROUPS.flatMap((g) => filters[g.key].map((v) => ({ key: g.key, value: v as string, label: LABELS[g.key][v] })));
  const applied = totalApplied(filters);

  /** When no pill is left to focus, go to the first visible control: the first dropdown or the Filters button. */
  const fallbackFocus = () => {
    const el = [...(root.current?.querySelectorAll<HTMLElement>('.c-dropdown') ?? [])].find((e) => e.offsetParent !== null);
    el?.focus();
  };

  // After a pill is removed: focus the next pill, else the previous, else the fallback.
  useEffect(() => {
    if (focusAfter === null) return;
    const list = pillRefs.current.slice(0, pills.length);
    const target = list[focusAfter] ?? list[focusAfter - 1];
    if (target) target.focus(); else fallbackFocus();
    setFocusAfter(null);
  }, [pills.length]); // eslint-disable-line react-hooks/exhaustive-deps

  // R5: the drawer is a phone pattern; if the screen widens past 768 (rotation, resize) while it's open, close it.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = (e: MediaQueryListEvent) => { if (e.matches) setDrawerOpen(false); };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const remove = (i: number) => {
    const p = pills[i];
    onChange(setGroup(filters, p.key, filters[p.key].filter((x) => x !== p.value)));
    setFocusAfter(i);
  };
  const clearAll = () => { onChange(EMPTY_FILTERS); requestAnimationFrame(fallbackFocus); };

  return (
    <div ref={root} className="c-filter-block">
      <div className="c-filter-block__bar c-filter-block__bar--wide">
        <FilterBy count={applied} />
        {GROUPS.map((g) => (
          <FilterSelect key={g.key} label={g.label} options={OPTIONS[g.key]} applied={filters[g.key]}
            onApply={(v) => onChange(setGroup(filters, g.key, v))} />
        ))}
      </div>

      <div className="c-filter-block__bar c-filter-block__bar--narrow">
        <FiltersButton count={applied} expanded={drawerOpen} onClick={() => setDrawerOpen(true)} />
      </div>

      {pills.length > 0 && (
        <div className="c-filter-block__active">
          <ul className="c-filter-block__pills" aria-label="Applied filters">
            {pills.map((p, i) => (
              <li key={`${p.key}:${p.value}`}>
                <FilterPill ref={(el) => { pillRefs.current[i] = el; }} label={p.label} onClick={() => remove(i)} />
              </li>
            ))}
          </ul>
          <TextLink as="button" tone="subtle" onClick={clearAll}>Clear all</TextLink>
        </div>
      )}

      {/* Result count: its own line, left-aligned, directly above the grid (one live region for both layouts). */}
      <p className="c-filter-block__count" aria-live="polite">
        Showing <strong>{shown}</strong> of <strong>{total}</strong> {total === 1 ? 'course' : 'courses'}
      </p>

      <FilterDrawer open={drawerOpen} applied={filters} onApply={onChange} onClose={() => setDrawerOpen(false)} />
    </div>
  );
}
