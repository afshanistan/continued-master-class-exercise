import type { Preview } from '@storybook/react-vite';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    backgrounds: {
      options: {
        page: { name: 'Page', value: '#f3f8f7' },
        card: { name: 'White', value: '#ffffff' },
        inverse: { name: 'Dark teal', value: '#0f3a3d' },
      },
    },
    controls: { matchers: { color: /(background|color)$/i } },
    a11y: { test: 'todo' },
  },
  initialGlobals: { backgrounds: { value: 'page' } },
};

export default preview;
