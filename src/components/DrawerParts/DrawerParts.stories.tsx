import type { Meta, StoryObj } from '@storybook/react-vite';
import { DrawerHeader, DrawerFooter } from './DrawerParts';

const meta: Meta = { title: 'Molecules/Drawer Parts', globals: { backgrounds: { value: 'card' } } };
export default meta;
export const Header: StoryObj = { render: () => <div style={{ width: 390 }}><DrawerHeader onClose={() => {}} /></div> };
export const Footer: StoryObj = { render: () => <div style={{ width: 390 }}><DrawerFooter count={6} onClear={() => {}} onShow={() => {}} /></div> };
