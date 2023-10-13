import type { Meta, StoryObj } from '@storybook/react';

import { Banner } from './Banner';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'banner/Banner',
  component: Banner,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    title: "Don’t Miss The 100% Discount if You register Today",
    imageSrc: "",
  },
};
