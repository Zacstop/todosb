import type { Meta, StoryObj } from "@storybook/react";
import LoginButton from "./LoginButton";

const meta = {
  title: "button/LoginButton",
  component: LoginButton,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof LoginButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "button",
    label: "login",
  },
};
