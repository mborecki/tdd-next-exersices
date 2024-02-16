import type { Meta, StoryObj } from '@storybook/react';
import { userEvent } from '@storybook/testing-library';

import Search from './search';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Search',
  component: Search,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      type: 'string'
    },
    onSearch: {
      action: 'onSearch'
    }
  },

} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}

export const WithLabel: Story = {
  args: {
    label: 'Czego szukamy?'
  }
}

export const WithPlay: Story = {
  play: async ({args, canvasElement}: any) => {
    const input = canvasElement.querySelector('input');
    const button = canvasElement.querySelector('button');

    await userEvent.type(input!, 'foo', {
      delay: 300
    });
    await userEvent.click(button!);
  }
}
