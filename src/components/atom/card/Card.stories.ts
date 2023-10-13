import type { Meta, StoryObj } from '@storybook/react';

import { TextCard } from './Card';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'card/TextCard',
  component: TextCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    title: "XForm",
    des: "XForm, a patented technology by kubeCRO, revolutionizes clinical trials by allowing various data formats without CRF coding, simplifying the process. It enables anyone to transform CRF into ECRF, cutting preparation time by over 70%. The technology supports text, images, and videos in a user-friendly form, making it both intuitive and efficient.",
    imageTitle: "쉽고, 편리한 시스템 환경",
    imageSrc: 'http://placehold.it/260x200',
  },
};
