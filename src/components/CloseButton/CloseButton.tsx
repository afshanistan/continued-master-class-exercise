import { X } from 'lucide-react';
import type { ComponentPropsWithRef } from 'react';
import './CloseButton.css';

export interface CloseButtonProps extends Omit<ComponentPropsWithRef<'button'>, 'children'> {
  /** Accessible name, e.g., "Close filters". */
  label?: string;
  'data-state'?: 'hover' | 'pressed' | 'focus';
}

export function CloseButton({ label = 'Close', className, ...rest }: CloseButtonProps) {
  return (
    <button type="button" aria-label={label} className={['c-close', className].filter(Boolean).join(' ')} {...rest}>
      <X size={20} strokeWidth={2} aria-hidden="true" />
    </button>
  );
}
