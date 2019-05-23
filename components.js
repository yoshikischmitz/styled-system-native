import React from "react";
import { Text as NativeText, View, Dimensions } from "react-native";
import { systemize, spaces, fontSize, color } from "./styled-system-native";

export const Box = systemize(View, spaces);
export const Text = systemize(NativeText, color, fontSize);
