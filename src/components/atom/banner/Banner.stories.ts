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
    imageSrc: "https://s3-alpha-sig.figma.com/img/71c4/2139/5fc25bf9d27ea1b1bec2a63b1da5233d?Expires=1698624000&Signature=jESKHqjmL0zF0fUirCTFZCJtvwZ7JvrPlyST2rEVTdHmuibrxPEb5ceNLbgvTHx6KnA~4GZd-2xjHe1eVd8-3nNg0HBCablYz3xG09X1JDAIzEC2MxaJILnsvTvJ-pUdHdtmMy1cIldQV12PlL88655k4xF9TR02YpPBeCTkGabdwEbKEyUQ18ssFxFdbK5YvpB9u~nXt2rkA5GdNN0QNkymx5uO3j8skzj0C2mlOjURkCVjPSmU5F4ruX2UV7sfGsD0o1SP~8GjWG~N0CHUIqQNKFb4GO2UDPMgl4I4~j9UUgBKmqd0OylotL3yXVfrtEursaWqmXzKZL7gtBKqng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
};
