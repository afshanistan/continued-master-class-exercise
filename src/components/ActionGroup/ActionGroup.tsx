import { Button } from '../Button/Button';
import { TextLink } from '../TextLink/TextLink';
import './ActionGroup.css';

export interface ActionGroupProps {
  layout?: 'inline' | 'stacked';
  joinHref?: string;
  loginHref?: string;
  className?: string;
}

/** Join now + "Already a member? Log in", on dark surfaces. */
export function ActionGroup({ layout = 'inline', joinHref = '#join', loginHref = '#login', className }: ActionGroupProps) {
  return (
    <div className={['c-actions', `c-actions--${layout}`, className].filter(Boolean).join(' ')}>
      <Button surface="dark" href={joinHref} arrow className="c-actions__join">Join now</Button>
      <p className="c-actions__login">Already a member? <TextLink surface="dark" href={loginHref}>Log in</TextLink></p>
    </div>
  );
}
