import type { Meta, StoryObj } from '@storybook/react-vite';
import { SheetHandle } from './SheetHandle';
const meta: Meta<typeof SheetHandle> = { title: 'Atoms/Sheet Handle', component: SheetHandle, globals: { backgrounds: { value: 'card' } } };
export default meta;
export const Default: StoryObj<typeof SheetHandle> = {};
