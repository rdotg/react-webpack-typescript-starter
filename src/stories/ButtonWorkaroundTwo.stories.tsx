import React from "react";
import { Story, Meta } from "@storybook/react";

import { StyledButton, ButtonProps } from "./Button";

export default {
  title: "Example/StyledButtonManualTypes",
  component: StyledButton,
} as Meta<ButtonProps>;
export const StyledButtonManual = (args: ButtonProps) => (
  <StyledButton {...args} label="button" />
);
