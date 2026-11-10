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
        {/* Single path, drawn short leg → long leg. pathLength=1 makes the dash math size-independent. */}
        <svg className="c-checkbox__check" width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M5 12.5l4.5 4.5L19 7" pathLength={1} stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </span>
  );
}
