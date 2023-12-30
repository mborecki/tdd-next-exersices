import type { Meta, StoryObj } from '@storybook/react';

import Search from './search';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}

export const WithLabel: Story = {
  args: {
    label: 'Czego szukamy?'
  }
}
