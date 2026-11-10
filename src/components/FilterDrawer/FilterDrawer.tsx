import { useEffect, useId, useRef, useState } from 'react';
import { courses, matches, type Filters } from '../../data/courses';
import { DrawerHeader, DrawerFooter } from '../DrawerParts/DrawerParts';
import { ChipGroup } from '../ChipGroup/ChipGroup';
import { GROUPS, OPTIONS, setGroup, toggle } from '../FilterBlock/groups';
import { EMPTY_FILTERS } from '../../data/courses';
import './FilterDrawer.css';

export interface FilterDrawerProps {
  open: boolean;
  applied: Filters;
  onApply: (f: Filters) => void;
  /** Called whenever the drawer closes (×, scrim, Esc, or after Show). */
  onClose: () => void;
}

/**
 * Mobile bottom sheet, built on a native modal <dialog>: the page behind is inert,
 * Esc closes, and focus returns to the trigger. Chips edit a draft; "Show N courses"
 * applies it. Any other way out discards the draft.
 */
export function FilterDrawer({ open, applied, onApply, onClose }: FilterDrawerProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const titleId = useId();
  const [draft, setDraft] = useState<Filters>(applied);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open && !d.open) {
      setDraft(applied);
      d.showModal();
      document.documentElement.classList.add('is-scroll-locked');
      title.current?.focus();
    } else if (!open && d.open) {
      d.close();
    }
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const d = dialog.current;
    const handle = () => { document.documentElement.classList.remove('is-scroll-locked'); onClose(); };
    d?.addEventListener('close', handle);
    return () => d?.removeEventListener('close', handle);
  }, [onClose]);

  const count = courses.filter((c) => matches(c, draft)).length;
  const close = () => dialog.current?.close();

  return (
    <dialog ref={dialog} className="c-drawer" aria-labelledby={titleId}
      onClick={(e) => { if (e.target === e.currentTarget) close(); /* scrim */ }}>
      <DrawerHeader titleId={titleId} titleRef={title} onClose={close} />
      <div className="c-drawer__body">
        {GROUPS.map((g) => (
          <ChipGroup key={g.key} heading={g.label} options={OPTIONS[g.key]} selected={draft[g.key]}
            onToggle={(v) => setDraft((d) => setGroup(d, g.key, toggle(d[g.key], v)))} />
        ))}
      </div>
      <p className="visually-hidden" aria-live="polite">{count} {count === 1 ? 'course matches' : 'courses match'}</p>
      <DrawerFooter count={count} onClear={() => setDraft(EMPTY_FILTERS)} onShow={() => { onApply(draft); close(); }} />
    </dialog>
  );
}
