import { useEffect, type RefObject } from 'react';

/**
 * Appear-on-scroll for a section. Marks the section ready (so CSS may hide items), then adds
 * `is-in` to each matching item the first time it comes within 15% of the viewport's bottom edge (M1: starts
 * just before it's on screen, so fast scrollers never wait). Plays once; never on scroll-back.
 * Safe by default: nothing is hidden unless motion is allowed and IntersectionObserver exists,
 * so if anything fails the content simply shows.
 */
export function useAppearOnScroll(root: RefObject<HTMLElement | null>, itemSelector: string, options: IntersectionObserverInit = { rootMargin: '0px 0px 15% 0px', threshold: 0 }) {
  useEffect(() => {
    const el = root.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const items = [...el.querySelectorAll<HTMLElement>(itemSelector)];
    el.setAttribute('data-appear-ready', '');
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    }, { threshold: 0, ...options });
    items.forEach((i) => io.observe(i));
    return () => { io.disconnect(); el.removeAttribute('data-appear-ready'); items.forEach((i) => i.classList.remove('is-in')); };
  }, [root, itemSelector]);
}
