/* eslint-disable prettier/prettier */
import type { StoryObj, Meta } from "@storybook/react";
import { Box, BoxProps, Text } from "@design-ui/react";

export default {
  title: "Surfaces/Box",
  component: Box,

  args: {
    children: <Text>Testando o elemento props</Text>,
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
