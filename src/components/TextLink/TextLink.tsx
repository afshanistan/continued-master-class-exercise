import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import './TextLink.css';

interface Common {
  /** Default = action magenta. Subtle = burgundy + underline (inline links). */
  tone?: 'default' | 'subtle';
  surface?: 'light' | 'dark';
  children: ReactNode;
}
type AsLink = Common & AnchorHTMLAttributes<HTMLAnchorElement> & { as?: 'a' };
/** Use as="button" for actions that don't navigate (Clear, Clear all). Same look. */
type AsButton = Common & ButtonHTMLAttributes<HTMLButtonElement> & { as: 'button' };
export type TextLinkProps = AsLink | AsButton;

export function TextLink(props: TextLinkProps) {
  const { tone = 'default', surface = 'light', className, children } = props;
  const cls = ['c-link', `c-link--${tone}`, `c-link--${surface}`, className].filter(Boolean).join(' ');
  if (props.as === 'button') {
    const { as: _a, tone: _t, surface: _s, className: _c, children: _ch, type = 'button', ...rest } = props;
    return <button type={type} className={cls} {...rest}>{children}</button>;
  }
  const { as: _a, tone: _t, surface: _s, className: _c, children: _ch, ...rest } = props;
  return <a className={cls} {...rest}>{children}</a>;
}
