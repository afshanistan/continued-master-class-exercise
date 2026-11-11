import type { ChangeEventHandler } from 'react';
import { Checkbox } from '../Checkbox/Checkbox';
import './MenuOption.css';

export interface MenuOptionProps {
  label: string;
  /** Optional. The filter menus don't show it (a fixed per-tag total contradicts the live result count). */
  count?: number;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  name?: string;
  value?: string;
  'data-state'?: 'hover';
}

/** One row in the desktop Filter Menu. The whole row is the <label>, so it's one large target. */
export function MenuOption({ label, count, checked, onChange, name, value, 'data-state': forced }: MenuOptionProps) {
  return (
    <label className="c-menu-option" data-state={forced}>
      <Checkbox checked={checked} onChange={onChange} name={name} value={value} />
      <span className="c-menu-option__label">{label}</span>
      {count !== undefined && <span className="c-menu-option__count">{count}<span className="visually-hidden"> courses</span></span>}
    </label>
  );
}
