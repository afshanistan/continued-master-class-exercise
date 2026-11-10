import { Check } from 'lucide-react';
import type { InputHTMLAttributes } from 'react';
import './Checkbox.css';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** For stories: force a visual state. */
  'data-state'?: 'hover' | 'focus';
}

/**
 * A real <input type="checkbox"> with a custom box. Wrap it in a <label>
 * (as Menu Option does) so the whole row is the target.
 */
export function Checkbox({ className, 'data-state': forced, ...rest }: CheckboxProps) {
  return (
    <span className={['c-checkbox', className].filter(Boolean).join(' ')} data-state={forced}>
      <input type="checkbox" className="c-checkbox__input" {...rest} />
      <span className="c-checkbox__box" aria-hidden="true">
        <Check className="c-checkbox__check" size={14} strokeWidth={3} />
      </span>
    </span>
  );
}
