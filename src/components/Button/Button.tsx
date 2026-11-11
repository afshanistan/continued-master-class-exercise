import { ArrowRight } from 'lucide-react';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

interface Common {
  /** Light = magenta 700 on light surfaces. Dark = magenta 300 on dark teal. */
  surface?: 'light' | 'dark';
  size?: 'large' | 'medium';
  /** primary = filled. text = tertiary: no fill/border at rest, tint on hover (e.g., Clear next to Apply). Light surface only. */
  variant?: 'primary' | 'text';
  fullWidth?: boolean;
  /** Trailing arrow that nudges right on hover. For conversion CTAs (Join now). */
  arrow?: boolean;
  children: ReactNode;
}
type AsButton = Common & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
/** Pass href when the action navigates (Join now, View course): renders a real <a>. */
type AsLink = Common & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
export type ButtonProps = AsButton | AsLink;

export function Button(props: ButtonProps) {
  const { surface = 'light', size = 'large', variant = 'primary', fullWidth, arrow, className, children } = props;
  const content = arrow ? <>{children}<ArrowRight className="c-button__arrow" size={18} strokeWidth={2.25} aria-hidden="true" /></> : children;
  const cls = ['c-button', variant === 'text' ? 'c-button--text' : `c-button--${surface}`, `c-button--${size}`, fullWidth && 'c-button--full', className].filter(Boolean).join(' ');
  if (props.href !== undefined) {
    const { surface: _s, size: _z, variant: _v, fullWidth: _f, arrow: _ar, className: _c, children: _ch, ...rest } = props;
    return <a className={cls} {...rest}>{content}</a>;
  }
  const { surface: _s, size: _z, variant: _v, fullWidth: _f, arrow: _ar, className: _c, children: _ch, type = 'button', ...rest } = props;
  return <button type={type} className={cls} {...rest}>{content}</button>;
}
