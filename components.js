import React from "react";
import { Text as NativeText, View, Dimensions } from "react-native";
import {
  systemize,
  spaces,
  shadow,
  fontSize,
  color
} from "./styled-system-native";

export const Card = systemize(View, spaces, shadow);
export const Box = systemize(View, spaces);
export const Text = systemize(NativeText, color, fontSize);
