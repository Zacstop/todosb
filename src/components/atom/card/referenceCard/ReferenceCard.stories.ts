import type { Meta, StoryObj } from '@storybook/react';

import { ReferenceCard } from './ReferenceCard';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'card/ReferenceCard',
  component: ReferenceCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ReferenceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    title: "Don’t Miss The 100% Discount if You register Today",
    imageSrc: "",
  },
};
