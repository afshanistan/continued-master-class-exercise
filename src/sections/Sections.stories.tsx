import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type CSSProperties } from 'react';
import { Navigation } from './Navigation/Navigation';
import { Hero } from './Hero/Hero';
import { Catalog } from './Catalog/Catalog';
import { Join } from './Join/Join';
import { Footer } from './Footer/Footer';

const meta: Meta = { title: 'Sections', parameters: { layout: 'fullscreen' } };
export default meta;
type Story = StoryObj;

export const NavigationBar: Story = { name: 'Navigation', render: () => <Navigation /> };
export const HeroSection: Story = { name: 'Hero', render: () => <Hero /> };

/** Hero appear-on-load choreography. Replay reruns it; Speed slows it for review (timings scale, the sequence doesn't change). */
export const HeroAppear: StoryObj<{ speed: string }> = {
  name: 'Hero · appear',
  args: { speed: '1x' },
  argTypes: { speed: { control: 'inline-radio', options: ['1x', '0.5x', '0.25x'] } },
  render: function Render({ speed }) {
    const [run, setRun] = useState(0);
    const mult = { '1x': 1, '0.5x': 2, '0.25x': 4 }[speed] ?? 1;
    return (
      <div style={{ '--appear-speed': mult } as CSSProperties}>
        <div style={{ position: 'fixed', top: 12, right: 12, zIndex: 50, display: 'flex', gap: 8, alignItems: 'center' }}>
          <span className="text-label" style={{ color: 'var(--color-text-on-inverse-muted)' }}>{speed}</span>
          <button type="button" onClick={() => setRun((r) => r + 1)} style={{ padding: '6px 12px', borderRadius: 8, border: 0, cursor: 'pointer', font: 'inherit' }}>↻ Replay</button>
        </div>
        <Hero key={run} />
      </div>
    );
  },
};
export const CatalogSection: Story = { name: 'Catalog', render: () => <Catalog /> };
export const CatalogEmpty: Story = { name: 'Catalog · no results', render: () => <Catalog initialFilters={{ topic: ['dementia'], credit: ['5'], taughtWith: [] }} /> };
export const JoinSection: Story = { name: 'Join', render: () => <Join /> };
export const FooterBar: Story = { name: 'Footer', render: () => <Footer /> };
