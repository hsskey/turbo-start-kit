import React from 'react'
import type { Preview, StoryFn } from '@storybook/react'
import { initialize, mswLoader } from 'msw-storybook-addon'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

// Initialize MSW
initialize()

const queryClient = new QueryClient()

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  loaders: [mswLoader],
  decorators: [
    (Story: StoryFn) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    )
  ]
}

export default preview
