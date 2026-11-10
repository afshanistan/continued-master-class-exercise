import { Check } from 'lucide-react';
import type { ButtonHTMLAttributes } from 'react';
import './ToggleChip.css';

export interface ToggleChipProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  label: string;
  count?: number;
  selected: boolean;
}

/** Selectable option in the mobile filter drawer. A toggle button (aria-pressed), never a remove control. */
export function ToggleChip({ label, count, selected, className, ...rest }: ToggleChipProps) {
  return (
    <button type="button" aria-pressed={selected} className={['c-chip', className].filter(Boolean).join(' ')} {...rest}>
      {selected && <Check className="c-chip__check" size={16} strokeWidth={2.5} aria-hidden="true" />}
      <span className="c-chip__label">{label}</span>
      {count !== undefined && <span className="c-chip__count">{count}<span className="visually-hidden"> courses</span></span>}
    </button>
  );
}
