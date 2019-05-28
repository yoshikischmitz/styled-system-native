import React from "react";
import { Text as NativeText, View, Dimensions } from "react-native";
import {
  systemize,
  spaces,
  fontWeight,
  shadow,
  fontSize,
  color,
  borderRadius,
  flexDirection,
  flexWrap,
  alignItems,
  border,
  backgroundColor
} from "styled-system-native";

const boxArgs = [View, spaces];
export const Card = systemize(
  ...boxArgs,
  backgroundColor,
  shadow,
  border,
  borderRadius
);
export const Box = systemize(...boxArgs);
export const Flex = systemize(...boxArgs, flexDirection, alignItems, flexWrap);

const textArgs = [NativeText, color, fontSize, fontWeight];
export const Text = systemize(...textArgs);
export const Span = systemize(...textArgs);

Text.defaultProps = {
  fontSize: 0
};
