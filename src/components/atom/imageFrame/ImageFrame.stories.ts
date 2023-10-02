import type { Meta, StoryObj } from '@storybook/react';

import { ImageFrame } from './ImageFrame';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'imageFrame/ImageFrame',
  component: ImageFrame,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ImageFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    title: "MediXForm",
    menu: "Aspiration",
  },
};
