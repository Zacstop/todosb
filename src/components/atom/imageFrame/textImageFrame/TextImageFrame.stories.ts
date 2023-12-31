import type { Meta, StoryObj } from '@storybook/react';

import { TextImageFrame } from './TextImageFrame';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'imageFrame/TextImageFrame',
  component: TextImageFrame,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextImageFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    descripsion: "쉽고, 편리한 시스템 환경",
    imageSrc: "http://placehold.it/200x200"
  },
};
