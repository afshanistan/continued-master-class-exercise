import { useEffect, useId, useRef, useState } from 'react';
import { MenuOption } from '../MenuOption/MenuOption';
import { Button } from '../Button/Button';
import { FilterDropdown } from '../FilterDropdown/FilterDropdown';
import { toggle } from '../FilterBlock/groups';
import { reducedMotion } from '../../motion/motion';
import './FilterMenu.css';

export interface MenuOptionData { value: string; label: string; count: number }

export interface FilterMenuProps {
  id?: string;
  inert?: boolean;
  onAnimationEnd?: React.AnimationEventHandler<HTMLDivElement>;
  legend: string;
  options: MenuOptionData[];
  selected: string[];
  onToggle: (value: string) => void;
  onClear: () => void;
  onApply: () => void;
  className?: string;
}

/** The panel: checkbox list + Clear / Apply. Presentational; Filter Select owns the behavior. */
export function FilterMenu({ id, legend, options, selected, onToggle, onClear, onApply, className, inert, onAnimationEnd }: FilterMenuProps) {
  return (
    <div id={id} className={['c-menu', className].filter(Boolean).join(' ')} inert={inert || undefined} onAnimationEnd={onAnimationEnd}>
      <fieldset className="c-menu__options">
        <legend className="visually-hidden">{legend}</legend>
        {options.map((o) => (
          <MenuOption key={o.value} label={o.label} count={o.count} checked={selected.includes(o.value)} onChange={() => onToggle(o.value)} name={id} value={o.value} />
        ))}
      </fieldset>
      <div className="c-menu__footer">
        <Button variant="text" size="medium" onClick={onClear}>Clear</Button>
        <Button size="medium" onClick={onApply}>Apply</Button>
      </div>
    </div>
  );
}

export interface FilterSelectProps {
  label: string;
  options: MenuOptionData[];
  /** Applied values (committed). */
  applied: string[];
  onApply: (values: string[]) => void;
}

/**
 * Filter Dropdown + Filter Menu with the Apply model:
 * - Opening copies the applied values into a draft; checking only changes the draft.
 * - Apply commits the draft and closes. Clear commits nothing applied and closes.
 * - Esc, clicking outside, tabbing away, or clicking the trigger again closes and discards the draft.
 * - Opened from the keyboard, focus goes to the first option (no stray ring for mouse users);
 *   focus returns to the trigger on Esc / Apply / Clear.
 */
export function FilterSelect({ label, options, applied, onApply }: FilterSelectProps) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<string[]>(applied);
  const wrap = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const viaKeyboard = useRef(false);

  // M3: closing keeps the menu mounted (inert) for a 100ms fade-out; reopening cancels it.
  const [closing, setClosing] = useState(false);
  const openMenu = (keyboard: boolean) => { viaKeyboard.current = keyboard; setDraft(applied); setClosing(false); setOpen(true); };
  const close = (returnFocus = false) => { setOpen(false); if (!reducedMotion()) setClosing(true); if (returnFocus) trigger.current?.focus(); };

  useEffect(() => {
    if (!open) return;
    if (viaKeyboard.current) wrap.current?.querySelector<HTMLInputElement>('.c-menu input')?.focus();
    const onPointer = (e: PointerEvent) => { if (!wrap.current?.contains(e.target as Node)) close(); };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { e.preventDefault(); close(true); } };
    const onFocusOut = (e: FocusEvent) => { const to = e.relatedTarget as Node | null; if (to && !wrap.current?.contains(to)) close(); };
    const el = wrap.current;
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    el?.addEventListener('focusout', onFocusOut);
    return () => { document.removeEventListener('pointerdown', onPointer); document.removeEventListener('keydown', onKey); el?.removeEventListener('focusout', onFocusOut); };
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div ref={wrap} className="c-filter-select">
      <FilterDropdown ref={trigger} label={label} count={applied.length} open={open} aria-controls={open ? menuId : undefined}
        onClick={(e) => (open ? close() : openMenu(e.detail === 0 /* Enter/Space */))} />
      {(open || closing) && (
        <FilterMenu id={menuId} legend={label} options={options} selected={draft}
          className={`c-filter-select__menu${!open ? ' is-closing' : ''}`} inert={!open} onAnimationEnd={(e) => { if (!open && e.animationName === 'c-menu-out') setClosing(false); }}
          onToggle={(v) => setDraft((d) => toggle(d, v))}
          onClear={() => { onApply([]); close(true); }}
          onApply={() => { onApply(draft); close(true); }} />
      )}
    </div>
  );
}
