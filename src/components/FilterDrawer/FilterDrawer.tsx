import { useEffect, useId, useRef, useState } from 'react';
import { courses, matches, type Filters } from '../../data/courses';
import { DrawerHeader, DrawerFooter } from '../DrawerParts/DrawerParts';
import { ChipGroup } from '../ChipGroup/ChipGroup';
import { GROUPS, OPTIONS, setGroup, toggle } from '../FilterBlock/groups';
import { EMPTY_FILTERS } from '../../data/courses';
import { EASE, T, reducedMotion } from '../../motion/motion';
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
 * Motion: opens sliding up (CSS); closes sliding down 220ms with the scrim fading (×, scrim, Esc, Show).
 * Swipe down on the header: the sheet follows the finger; release past 30% of its height (or a quick
 * flick) closes it, otherwise it eases back. Reduced motion: fades.
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

  // Animated close from wherever the sheet currently is (0 normally; the drag offset after a swipe).
  const closing = useRef(false);
  const close = (fromY = 0) => {
    const d = dialog.current;
    if (!d || !d.open || closing.current) return;
    closing.current = true;
    const done = () => { closing.current = false; d.style.transform = ''; d.close(); d.getAnimations({ subtree: false }).forEach((a) => a.cancel()); };
    if (reducedMotion()) {
      d.animate([{ opacity: 1 }, { opacity: 0 }], { duration: T.sheetFadeReduced, easing: EASE.color, fill: 'forwards' }).finished.then(done, done);
      return;
    }
    const a = d.animate([{ transform: `translateY(${fromY}px)` }, { transform: 'translateY(100%)' }], { duration: T.sheetOut, easing: EASE.inOut, fill: 'forwards' });
    try { d.animate([{ opacity: 1 }, { opacity: 0 }], { duration: T.sheetOut, easing: EASE.color, fill: 'forwards', pseudoElement: '::backdrop' }); } catch { /* no ::backdrop animation support */ }
    a.finished.then(done, done);
  };

  // Esc: animate instead of the native instant close.
  useEffect(() => {
    const d = dialog.current;
    const onCancel = (e: Event) => { e.preventDefault(); close(); };
    d?.addEventListener('cancel', onCancel);
    return () => d?.removeEventListener('cancel', onCancel);
  }); // eslint-disable-line react-hooks/exhaustive-deps

  // Swipe to dismiss (header area).
  const drag = useRef<{ start: number; y: number; t: number; v: number } | null>(null);
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 || (e.target as HTMLElement).closest('button')) return;
    drag.current = { start: e.clientY, y: 0, t: e.timeStamp, v: 0 };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const g = drag.current, d = dialog.current;
    if (!g || !d) return;
    const y = Math.max(0, e.clientY - g.start);
    g.v = (y - g.y) / Math.max(1, e.timeStamp - g.t); g.y = y; g.t = e.timeStamp;
    d.style.transform = `translateY(${y}px)`;
  };
  const onPointerUp = () => {
    const g = drag.current, d = dialog.current; drag.current = null;
    if (!g || !d || g.y === 0) return;
    if (g.y > d.offsetHeight * T.swipeCloseRatio || g.v > T.swipeCloseVelocity) { close(g.y); return; }
    d.style.transform = '';
    if (!reducedMotion()) d.animate([{ transform: `translateY(${g.y}px)` }, { transform: 'none' }], { duration: T.sheetSnapBack, easing: EASE.out });
  };

  return (
    <dialog ref={dialog} className="c-drawer" aria-labelledby={titleId}
      onClick={(e) => { if (e.target === e.currentTarget) close(); /* scrim */ }}>
      <div className="c-drawer__grab" onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerUp}>
        <DrawerHeader titleId={titleId} titleRef={title} onClose={() => close()} />
      </div>
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
