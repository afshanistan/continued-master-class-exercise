import './SheetHandle.css';
/** Visual grabber at the top of the bottom sheet. Decorative; swipe-to-dismiss is wired in Phase 6. */
export function SheetHandle() {
  return <span className="c-sheet-handle" aria-hidden="true" />;
}
