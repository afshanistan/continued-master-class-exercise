import type { Meta, StoryObj } from '@storybook/react-vite';
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
export const CatalogSection: Story = { name: 'Catalog', render: () => <Catalog /> };
export const CatalogEmpty: Story = { name: 'Catalog · no results', render: () => <Catalog initialFilters={{ topic: ['dementia'], credit: ['5'], taughtWith: [] }} /> };
export const JoinSection: Story = { name: 'Join', render: () => <Join /> };
export const FooterBar: Story = { name: 'Footer', render: () => <Footer /> };
