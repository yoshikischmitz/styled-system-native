import React from "react";
import { Dimensions } from "react-native";
import ThemeContext from "./theme-context";

export const systemize = (Component, ...styleProviders) => {
  return ({ style: userStyle, ...rest }) => (
    <ThemeContext.Consumer>
      {theme => {
        //return (theme = defaultTheme) => {
        // pipe the {style, props} object through each function
        // which each takes just the props it needs
        // the final object returned from reduce
        // represents the total style and unused props
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

        console.log(style, props);

        return <Component style={[style, userStyle]} {...props} />;
      }}
    </ThemeContext.Consumer>
  );
};

const { width, height } = Dimensions.get("screen");

const dimensionsSelect = breakPoints => {
  for (index in breakPoints) {
    if (width < breakPoints[index]) {
      return index;
    }
  }
  return breakPoints.length - 1;
};

export const color = (theme, { color: colorProp, ...rest }) => ({
  style: {
    color:
      typeof colorProp === "object" && colorProp.constructor === Array
        ? theme.colors[colorProp[dimensionsSelect(theme.breakPoints)]] ||
          colorProp[dimensionsSelect(theme.breakPoints)]
        : theme.colors[colorProp] || colorProp
  },
  props: rest
});

export const fontSize = (theme, { fontSize: fontSizeProp, ...rest }) => ({
  style: { fontSize: theme.fontSizes[fontSizeProp] },
  props: rest
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
      marginBottom: getSpace(theme, mr),
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
