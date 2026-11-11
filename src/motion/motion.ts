/**
 * Motion library for the catalog (Nov 10). Every timing lives here so any part can be tweaked in one place.
 * Curves mirror tokens.css: out = movement (quint), inOut = things that start and end at rest (FLIP, sheet),
 * appear = entrances (from willnorris.design), color = fades.
 */
export const EASE = {
  out: 'cubic-bezier(0.22, 1, 0.36, 1)',
  inOut: 'cubic-bezier(0.65, 0, 0.35, 1)',
  appear: 'cubic-bezier(0.12, 0.23, 0.5, 1)',
  color: 'cubic-bezier(0.37, 0, 0.63, 1)',
} as const;

export const T = {
  // Grid reflow (FLIP)
  cardLeave: 150, cardLeaveScale: 0.98,
  cardMove: 300,
  cardEnter: 300, cardEnterY: 9, cardStagger: 30, cardStaggerMax: 240,
  // Applied-filters row
  rowOpen: 220, rowPillsOut: 100, rowClose: 180,
  // Pills
  pillEnter: 150, pillEnterScale: 0.92, pillLeave: 120, pillLeaveScale: 0.9, pillMove: 200,
  // Drawer
  sheetOut: 220, sheetSnapBack: 200, sheetFadeReduced: 150, swipeCloseRatio: 0.3, swipeCloseVelocity: 0.5,
  // Misc
  scrollOffset: 16,
} as const;

export const reducedMotion = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── FLIP for keyed lists: snapshot before a change, play after the DOM updates. ───────────────
   Items carry data-flip-key. Staying items slide from their old spot; new items enter; removed items
   leave as inert clones (ghosts) at their old spot, so React never has to keep them around. */
type Box = { x: number; y: number; w: number; h: number; node: HTMLElement };
export type FlipSnapshot = Map<string, Box>;

const items = (container: HTMLElement, selector: string) =>
  [...container.querySelectorAll<HTMLElement>(selector)].filter((el) => !el.dataset.flipGhost && el.dataset.flipKey);

export function flipSnapshot(container: HTMLElement | null, selector: string): FlipSnapshot | null {
  if (!container || reducedMotion()) return null;
  const snap: FlipSnapshot = new Map();
  for (const el of items(container, selector)) {
    const r = el.getBoundingClientRect();
    snap.set(el.dataset.flipKey!, { x: r.left + scrollX, y: r.top + scrollY, w: r.width, h: r.height, node: el.cloneNode(true) as HTMLElement });
  }
  return snap;
}

export interface FlipOptions {
  move: number;
  enter: { keyframes: Keyframe[]; duration: number; easing: string; stagger?: number; staggerMax?: number };
  leave: { duration: number; scale: number };
  ghostParent?: HTMLElement;
}

export function flipPlay(container: HTMLElement | null, selector: string, before: FlipSnapshot | null, o: FlipOptions) {
  if (!container || !before || reducedMotion()) return;
  const c = container.getBoundingClientRect();
  const cx = c.left + scrollX, cy = c.top + scrollY;
  const now = new Map(items(container, selector).map((el) => [el.dataset.flipKey!, el]));
  let entering = 0;
  now.forEach((el, key) => {
    const b = before.get(key);
    if (b) {
      const r = el.getBoundingClientRect();
      const dx = b.x - (r.left + scrollX), dy = b.y - (r.top + scrollY);
      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        el.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: 'none' }], { duration: o.move, easing: EASE.inOut });
      }
    } else {
      const delay = Math.min(entering++ * (o.enter.stagger ?? 0), o.enter.staggerMax ?? 0);
      el.animate(o.enter.keyframes, { duration: o.enter.duration, easing: o.enter.easing, delay, fill: 'backwards' });
    }
  });
  before.forEach((b, key) => {
    if (now.has(key)) return;
    const g = b.node;
    g.dataset.flipGhost = '1';
    g.setAttribute('aria-hidden', 'true');
    g.inert = true;
    Object.assign(g.style, { position: 'absolute', left: `${b.x - cx}px`, top: `${b.y - cy}px`, width: `${b.w}px`, height: `${b.h}px`, margin: '0', pointerEvents: 'none', zIndex: '0' });
    (o.ghostParent ?? container).appendChild(g);
    const a = g.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: `scale(${o.leave.scale})` }], { duration: o.leave.duration, easing: EASE.out, fill: 'forwards' });
    a.finished.then(() => g.remove(), () => g.remove());
  });
}

/* ── Height open/close for a block inside a flex column with `gap`.
   Animates height and a negative margin-top equal to the parent's gap, so the gap opens too (no 16px jump). */
const parentGap = (el: HTMLElement) => parseFloat(getComputedStyle(el.parentElement!).rowGap) || 0;

export function heightOpen(el: HTMLElement | null, duration: number) {
  if (!el || reducedMotion()) return;
  const h = el.offsetHeight, gap = parentGap(el);
  el.style.overflow = 'hidden';
  const a = el.animate([{ height: '0px', marginTop: `${-gap}px` }, { height: `${h}px`, marginTop: '0px' }], { duration, easing: EASE.out });
  a.finished.finally(() => { el.style.overflow = ''; }).catch(() => {});
}

export function heightClose(el: HTMLElement | null, fadeFirst: number, duration: number): Promise<void> {
  if (!el || reducedMotion()) return Promise.resolve();
  const h = el.offsetHeight, gap = parentGap(el);
  el.style.overflow = 'hidden';
  el.animate([{ opacity: 1 }, { opacity: 0 }], { duration: fadeFirst, easing: EASE.color, fill: 'forwards' });
  const a = el.animate([{ height: `${h}px`, marginTop: '0px' }, { height: '0px', marginTop: `${-gap}px` }], { duration, delay: fadeFirst, easing: EASE.inOut, fill: 'forwards' });
  return a.finished.then(() => undefined, () => undefined);
}
