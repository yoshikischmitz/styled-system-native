import React from "react";
import { Dimensions } from "react-native";
import ThemeContext from "./theme-context";

const { width, height } = Dimensions.get("screen");

const dimensionsSelect = breakPoints => {
  for (index in breakPoints) {
    if (width < breakPoints[index]) {
      return index;
    }
  }
  return breakPoints.length - 1;
};

const makeProvider = ({ propName, themePath, exportObject }) => (
  theme,
  { [propName]: prop, ...rest }
) => {
  const isArray = typeof prop === "object" && prop.constructor === Array;
  let style = {};

  if (isArray) {
    const breakPointIndex = dimensionsSelect(theme.breakPoints);
    style = theme[themePath][breakPointIndex] || prop[breakPointIndex];
  } else {
    style = theme[themePath][prop] || prop;
  }

  return {
    style: exportObject ? style : { [propName]: style },
    props: rest
  };
};

export const color = makeProvider({ propName: "color", themePath: "colors" });

export const fontWeight = (theme, { fontWeight: fontWeightProp, ...rest }) => ({
  style: { fontWeight: theme.fontWeights[fontWeightProp] },
  props: rest
});

export const borderRadius = makeProvider({
  propName: "borderRadius",
  themePath: "borderRadii"
});

export const border = makeProvider({
  propName: "border",
  themePath: "borders",
  exportObject: true
});

export const shadow = makeProvider({
  propName: "shadow",
  themePath: "shadows",
  exportObject: true
});

export const fontSize = makeProvider({
  propName: "fontSize",
  themePath: "fontSizes"
});

const getSpace = (theme, index) =>
  typeof index === "object" && index.constructor === Array
    ? theme.spaces[index[dimensionsSelect(theme.breakPoints)]]
    : theme.spaces[index] || index;

export const spaces = (
  theme,
  {
    // margin
    ml,
    mt,
    mr,
    mb,
    mh,
    mv,
    ma,
    // padding
    pl,
    pt,
    pr,
    pb,
    ph,
    pv,
    pa,
    ...rest
  }
) => {
  return {
    style: {
      marginLeft: getSpace(theme, ml),
      marginTop: getSpace(theme, mt),
      marginBottom: getSpace(theme, mb),
      marginRight: getSpace(theme, mr),
      marginHorizontal: getSpace(theme, mh),
      marginVertical: getSpace(theme, mv),
      margin: getSpace(theme, ma),
      paddingLeft: getSpace(theme, pl),
      paddingTop: getSpace(theme, pt),
      paddingBottom: getSpace(theme, pr),
      paddingHorizontal: getSpace(theme, ph),
      paddingVertical: getSpace(theme, pv),
      padding: getSpace(theme, pa)
    },
    props: rest
  };
};

export const systemize = (Component, ...styleProviders) => {
  // take the style prop so users can pass it in without
  // overriding our styles, collect remaining styles
  return ({ style: userStyle, ...rest }) => (
    <ThemeContext.Consumer>
      {theme => {
        // pipe the {style, props} object through each function, where each function
        // such that the final props object doesn't have any styled-system props
        const { style, props } = styleProviders.reduce(
          ({ style, props }, styleFn) => {
            const { style: newStyle, props: unusedProps } = styleFn(
              theme,
              props
            );
            return { style: { ...style, ...newStyle }, props: unusedProps };
          },
          { style: {}, props: rest }
        );

        // let user override styles, forward remaining props to object
        return <Component style={[style, userStyle]} {...props} />;
      }}
    </ThemeContext.Consumer>
  );
};
