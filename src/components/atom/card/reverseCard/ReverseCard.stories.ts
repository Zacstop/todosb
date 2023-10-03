import type { Meta, StoryObj } from '@storybook/react';

import { ReverseTextCard } from './ReverseCard';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'card/ReverseTextCard',
  component: ReverseTextCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ReverseTextCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    title: "MediXForm",
    des: "In traditional EDC systems, researchers' responses were accepted as-is, leading to the generation of Queries whenever there was a mismatch with DVP. The Validation system observes in real time whether the data aligns with the DVP category and guides the correct range value if a response falls outside the category, thus completely eliminating system Queries. This innovative approach removes the need for CRA's Query management tasks, making the entire process more efficient and rational.",
  },
};
