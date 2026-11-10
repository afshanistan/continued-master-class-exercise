import type { Meta, StoryObj } from '@storybook/react-vite';
import { FilterBy } from './FilterBy';
const meta: Meta<typeof FilterBy> = { title: 'Molecules/Filter By', component: FilterBy };
export default meta;
export const None: StoryObj<typeof FilterBy> = { args: { count: 0 } };
export const Applied: StoryObj<typeof FilterBy> = { args: { count: 3 } };
