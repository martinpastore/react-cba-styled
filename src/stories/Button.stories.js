import React from "react";
import { StyledButton as Button } from "../components/Button";
import { CustomButton } from "../components/CustomButton";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Button",
  component: Button,
  decorators: [withKnobs],
};

const state = () =>
  select("State", ["none", "primary", "success", "error"], "none");
const rounded = () => boolean("Rounded", false);
const placeholder = () => text("Text", "Placeholder");

export const Default = () => (
  <Button state={state()} rounded={rounded()}>
    {placeholder()}
  </Button>
);

export const Custom = () => (
  <CustomButton state={state()} rounded={rounded()}>
    {placeholder()}
  </CustomButton>
);
