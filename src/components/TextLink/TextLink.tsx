import type { AnchorHTMLAttributes, ReactNode } from 'react';
import './TextLink.css';

export interface TextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Default = action magenta. Subtle = burgundy + underline (inline links). */
  tone?: 'default' | 'subtle';
  surface?: 'light' | 'dark';
  children: ReactNode;
}

export function TextLink({ tone = 'default', surface = 'light', className, children, ...rest }: TextLinkProps) {
  return (
    <a className={['c-link', `c-link--${tone}`, `c-link--${surface}`, className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </a>
  );
}
