import type { Ref } from 'react';
import { SheetHandle } from '../SheetHandle/SheetHandle';
import { CloseButton } from '../CloseButton/CloseButton';
import { TextLink } from '../TextLink/TextLink';
import { Button } from '../Button/Button';
import './DrawerParts.css';

export function DrawerHeader({ title = 'Filters', titleId, titleRef, onClose }: { title?: string; titleId?: string; titleRef?: Ref<HTMLHeadingElement>; onClose: () => void }) {
  return (
    <div className="c-drawer-header">
      <SheetHandle />
      <div className="c-drawer-header__row">
        {/* tabIndex -1: the drawer moves focus here on open */}
        <h2 id={titleId} ref={titleRef} tabIndex={-1} className="c-drawer-header__title text-title-large">{title}</h2>
        <CloseButton label={`Close ${title.toLowerCase()}`} onClick={onClose} />
      </div>
    </div>
  );
}

export function DrawerFooter({ count, onClear, onShow }: { count: number; onClear: () => void; onShow: () => void }) {
  return (
    <div className="c-drawer-footer">
      <TextLink as="button" tone="subtle" onClick={onClear}>Clear all</TextLink>
      <Button className="c-drawer-footer__show" onClick={onShow}>Show {count} {count === 1 ? 'course' : 'courses'}</Button>
    </div>
  );
}
