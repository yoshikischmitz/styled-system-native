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
  border
} from "styled-system-native";

export const Card = systemize(View, spaces, shadow, border, borderRadius);
export const Box = systemize(View, spaces, border, borderRadius);

const textArgs = [NativeText, color, fontSize, fontWeight];
export const Text = systemize(...textArgs);
export const Span = systemize(...textArgs);

Text.defaultProps = {
  fontSize: 0
};
