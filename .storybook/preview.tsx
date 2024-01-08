import React from 'react'

import type { Preview } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { initialize, mswLoader } from 'msw-storybook-addon';

initialize();

const queryClient = new QueryClient();

const preview: Preview = {
  loaders: [mswLoader],
  decorators: [
    (story) => (
      <QueryClientProvider client={queryClient}>
        <div style={{ outline: '1px red solid' }}>
          {story()}

        </div>
      </QueryClientProvider>
    )
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
