import React from "react";
import { Text as NativeText, View, Dimensions } from "react-native";
import { systemize, spaces, fontSize, color } from "./styled-system-native";

export const Box = systemize(View, spaces);
export const Text = systemize(NativeText, color, fontSize);

/*
export const Box = ({ style: viewStyle, ...rest }) => {
  const { style, props } = spaces(theme, rest);
  return <View style={[viewStyle, style]} {...props} />;
};

export const Text = ({ style: textStyle, ...rest }) => {
  const { style: fontSizeStyle, props } = fontSize(theme, rest);
  const { style: colorStyle, props: props2 } = color(theme, props);
  return (
    <NativeText
      style={[{ fontWeight: "bold" }, fontSizeStyle, colorStyle, textStyle]}
      {...props2}
    />
  );
};
*/
