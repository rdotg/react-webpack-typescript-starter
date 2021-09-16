import React from "react";
import { Meta } from "@storybook/react";

import { StyledButton, ButtonProps } from "./Button";

export default {
  title: "Example/ButtonWorkAroundOne",
  component: StyledButton,
} as Meta;

export const StyledButtonWrapper = (args: ButtonProps) => (
  <StyledButton {...args} label="button" />
);
