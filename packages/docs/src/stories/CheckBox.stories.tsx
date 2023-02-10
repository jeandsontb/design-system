/* eslint-disable prettier/prettier */
import type { StoryObj, Meta } from "@storybook/react";
import { Box, Text, Checkbox, CheckBoxProps } from "@design-ui/react";

export default {
  title: "Form/CheckBox",
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "row", gap: "$2" }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      );
    },
  ],
} as Meta<CheckBoxProps>;

export const Primary: StoryObj<CheckBoxProps> = {};
