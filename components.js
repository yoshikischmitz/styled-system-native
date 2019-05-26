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
} from "./styled-system-native";

export const Card = systemize(View, spaces, shadow, border, borderRadius);
export const Box = systemize(View, spaces, border, borderRadius);
export const Text = systemize(NativeText, color, fontSize, fontWeight);
export const Span = systemize(NativeText, color, fontSize, fontWeight);

Text.defaultProps = {
  fontSize: 0
};
