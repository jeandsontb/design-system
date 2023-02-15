/* eslint-disable prettier/prettier */
import type { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@design-ui/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,

  args: {
    src: "https://avatars.githubusercontent.com/u/53402919?v=4",
    alt: "Jeandson Tenorio",
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
