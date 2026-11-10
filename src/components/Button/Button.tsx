import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Light = magenta 700 on light surfaces. Dark = magenta 300 on dark teal. */
  surface?: 'light' | 'dark';
  size?: 'large' | 'medium';
  fullWidth?: boolean;
  children: ReactNode;
}

export function Button({ surface = 'light', size = 'large', fullWidth, className, children, type = 'button', ...rest }: ButtonProps) {
  return (
    <button
      type={type}
      className={['c-button', `c-button--${surface}`, `c-button--${size}`, fullWidth && 'c-button--full', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </button>
  );
}
