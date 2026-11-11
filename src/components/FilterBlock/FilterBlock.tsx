import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { Filters } from '../../data/courses';
import { courses, EMPTY_FILTERS } from '../../data/courses';
import { FilterBy } from '../FilterBy/FilterBy';
import { FilterSelect } from '../FilterMenu/FilterMenu';
import { FiltersButton } from '../FiltersButton/FiltersButton';
import { FilterPill } from '../FilterPill/FilterPill';
import { TextLink } from '../TextLink/TextLink';
import { FilterDrawer } from '../FilterDrawer/FilterDrawer';
import { GROUPS, OPTIONS, LABELS, setGroup, totalApplied } from './groups';
import { EASE, T, flipPlay, flipSnapshot, heightClose, heightOpen, reducedMotion, type FlipSnapshot } from '../../motion/motion';
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
  const pillsKey = pills.map((p) => `${p.key}:${p.value}`).join('|');

  // ── Row state: 'closing' keeps the last pills on screen (inert) while the row collapses.
  const hasPills = pills.length > 0;
  const lastPills = useRef(pills);
  if (hasPills) lastPills.current = pills;
  const [rowState, setRowState] = useState<'open' | 'closing' | 'closed'>(hasPills ? 'open' : 'closed');
  if (hasPills && rowState !== 'open') setRowState('open');
  if (!hasPills && rowState === 'open') setRowState(reducedMotion() ? 'closed' : 'closing');
  const row = useRef<HTMLDivElement>(null);
  const prevRow = useRef(rowState);
  useLayoutEffect(() => {
    const was = prevRow.current; prevRow.current = rowState;
    if (was === rowState) return;
    if (rowState === 'open' && was === 'closed') heightOpen(row.current, T.rowOpen);
    if (rowState === 'open' && was === 'closing') row.current?.getAnimations().forEach((a) => a.cancel());
    if (rowState === 'closing') heightClose(row.current, T.rowPillsOut, T.rowClose).then(() => setRowState((r) => (r === 'closing' ? 'closed' : r)));
  }, [rowState]);

  // ── Pills FLIP: snapshot before any change (every change goes through commit), play after.
  const pillSnap = useRef<FlipSnapshot | null>(null);
  const PILL = ':scope > ul > li';
  const commit = (f: Filters) => { pillSnap.current = flipSnapshot(row.current, PILL); onChange(f); };
  useLayoutEffect(() => {
    const before = pillSnap.current; pillSnap.current = null;
    if (rowState !== 'open') return; // a closing row fades as a whole
    flipPlay(row.current, PILL, before ?? new Map(), {
      move: T.pillMove,
      enter: { keyframes: [{ opacity: 0, transform: `scale(${T.pillEnterScale})` }, { opacity: 1, transform: 'none' }], duration: T.pillEnter, easing: EASE.out },
      leave: { duration: T.pillLeave, scale: T.pillLeaveScale },
      ghostParent: row.current?.querySelector('ul') ?? undefined,
    });
  }, [pillsKey]); // eslint-disable-line react-hooks/exhaustive-deps

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
    commit(setGroup(filters, p.key, filters[p.key].filter((x) => x !== p.value)));
    setFocusAfter(i);
  };
  const clearAll = () => { commit(EMPTY_FILTERS); requestAnimationFrame(fallbackFocus); };

  return (
    <div ref={root} className="c-filter-block">
      <div className="c-filter-block__bar c-filter-block__bar--wide">
        <FilterBy count={applied} />
        {GROUPS.map((g) => (
          <FilterSelect key={g.key} label={g.label} options={OPTIONS[g.key]} applied={filters[g.key]}
            onApply={(v) => commit(setGroup(filters, g.key, v))} />
        ))}
      </div>

      <div className="c-filter-block__bar c-filter-block__bar--narrow">
        <FiltersButton count={applied} expanded={drawerOpen} onClick={() => setDrawerOpen(true)} />
      </div>

      {rowState !== 'closed' && (
        <div ref={row} className="c-filter-block__active" inert={rowState === 'closing' || undefined} aria-hidden={rowState === 'closing' || undefined}>
          <ul className="c-filter-block__pills" aria-label="Applied filters">
            {(rowState === 'closing' ? lastPills.current : pills).map((p, i) => (
              <li key={`${p.key}:${p.value}`} data-flip-key={`${p.key}:${p.value}`}>
                <FilterPill ref={rowState === 'open' ? (el) => { pillRefs.current[i] = el; } : undefined} label={p.label} onClick={() => remove(i)} />
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

      <FilterDrawer open={drawerOpen} applied={filters} onApply={commit} onClose={() => setDrawerOpen(false)} />
    </div>
  );
}
