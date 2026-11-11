import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';
import './explore-join.css';

const meta: Meta = { title: 'Explorations/Join now hover', parameters: { layout: 'padded' }, globals: { backgrounds: { value: 'inverse' } } };
export default meta;

const OPTIONS = [
  { k: 'a', name: 'A · Glow', note: 'Color holds; a magenta halo blooms. Press: halo tightens, color lighter.' },
  { k: 'b', name: 'B · Neon', note: 'Richer core (400) + halo. Press: deeper (500), halo tightens.' },
  { k: 'c', name: 'C · Glow + arrow', note: 'A, plus an arrow (visible at rest) that nudges right on hover.' },
  { k: 'd', name: 'D · Lift', note: 'Rises 2px on a deep shadow (lift and land, like the light buttons). Press lands, lighter.' },
  { k: 'e', name: 'E · Wipe, lighter (soft)', note: 'Lighter magenta (200) fills left → right, softer timing (380ms in / 250 out). Press: lighter still (100).' },
  { k: 'f', name: 'F · Wipe, deeper + arrow', note: 'Richer magenta (400) fills left → right; the arrow nudges as the fill lands. Press: holds 400, pressed-in shadow.' },
  { k: 'g', name: 'G · Wipe, deeper', note: 'F without the arrow.' },
] as const;

const Label = ({ k }: { k: string }) => (k === 'c' || k === 'f' ? <>Join now<ArrowRight className="x-arrow" size={18} strokeWidth={2.25} aria-hidden="true" /></> : <>Join now</>);
const muted = { color: 'var(--color-text-on-inverse-muted)' } as const;

/** Hover and press the "Live" button in each row. The three columns on the right are forced states for comparison. */
export const Options: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '260px repeat(4, 160px)', gap: '28px 24px', alignItems: 'center', color: 'var(--color-text-on-inverse)' }}>
      <span />
      {['Live (try it)', 'Default', 'Hover', 'Pressed'].map((h) => <span key={h} className="text-label-strong" style={muted}>{h}</span>)}
      {OPTIONS.map((o) => [
        <div key={`${o.k}-n`} style={{ display: 'grid', gap: 4 }}>
          <span className="text-label-strong">{o.name}</span>
          <span className="text-body-small" style={muted}>{o.note}</span>
        </div>,
        ...([undefined, undefined, 'hover', 'pressed'] as const).map((st, i) => (
          <div key={`${o.k}-${i}`} className={`x-join x-join--${o.k}`}>
            <Button surface="dark" href="#join" data-state={st} onClick={(e) => e.preventDefault()}><Label k={o.k} /></Button>
          </div>
        )),
      ])}
    </div>
  ),
};
