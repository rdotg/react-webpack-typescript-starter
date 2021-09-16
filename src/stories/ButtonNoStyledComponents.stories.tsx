import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, StyledButton } from "./Button";

export default {
  title: "Example/ButtonNoStyledComponents",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary = () => <Button label="Button" />;
