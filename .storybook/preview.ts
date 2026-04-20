import '../src/app/globals.css'

import type { Decorator, Preview } from '@storybook/nextjs-vite'

const applyFontVariables: Decorator = (Story) => {
  if (typeof document !== 'undefined') {
    const root = document.documentElement

    root.style.setProperty('--font-sans', '"Geist", sans-serif')
    root.style.setProperty('--font-inter', '"Inter", sans-serif')
    root.style.setProperty('--font-manrope', '"Manrope", sans-serif')
    root.classList.add('font-sans')
  }

  return Story()
}

const preview: Preview = {
  decorators: [applyFontVariables],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;