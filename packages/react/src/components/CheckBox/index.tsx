/* eslint-disable prettier/prettier */
import { Check } from "phosphor-react";
import React, { ComponentProps } from "react";
import { CheckBoxContainer, CheckBoxIndicator } from "./styles";

export interface CheckBoxProps
  extends ComponentProps<typeof CheckBoxContainer> {}

export function Checkbox(props: CheckBoxProps) {
  return (
    <CheckBoxContainer {...props}>
      <CheckBoxIndicator asChild>
        <Check weight="bold" />
      </CheckBoxIndicator>
    </CheckBoxContainer>
  );
}
