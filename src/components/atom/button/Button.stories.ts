import type { Meta, StoryObj } from "@storybook/react";
import { Info } from "../../../assets/icons/info-svgrepo-com.svg";
// import { ReactComponent as Info } from "../../../assets/icons/info-svgrepo-com.svg";
import Button from "./Button";

const meta = {
  title: "button/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "submit",
    Icon: Info,
    label: "Button",
  },
};
