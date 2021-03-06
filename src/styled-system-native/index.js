import React from "react";
import { Dimensions } from "react-native";
import ThemeContext from "./theme-context";

const spaceScale = [0, 4, 8, 16, 32, 64, 128, 256, 512];

const { width: screenWidth } = Dimensions.get("screen");

const dimensionsSelect = breakPoints => {
  for (index in breakPoints) {
    if (screenWidth < breakPoints[index]) {
      return index;
    }
  }
  return breakPoints.length - 1;
};

const getValueFromTheme = (themeObj = {}, prop) => {
  const isArray = typeof prop === "object" && prop.constructor === Array;

  if (isArray) {
    const breakPointIndex = dimensionsSelect(theme.breakPoints);
    const themeValue = themeObj[breakPointIndex];
    return themeObj[breakPointIndex] || prop[breakPointIndex];
  } else {
    let themeValue;
    if (prop < 0) {
      themeValue = themeObj[prop * -1];
      if (themeValue) {
        return themeValue * -1;
      }
    } else {
      themeValue = themeObj[prop];
    }
    return themeValue || prop;
  }
};

// returns a function that builds a style value from the theme and the user props:
const makeProvider = ({
  propName, // name of the prop to be passed in, e.g.: `fontSize` or `color` */
  themePath, // path into the theme object to access the style value for the prop
  exportObject, // used for style values like shadow which have multiple style attributes
  defaultScale
}) => (theme, { [propName]: prop, ...rest }) => {
  const style = getValueFromTheme(theme[themePath] || defaultScale, prop);
  return {
    style: exportObject ? style : { [propName]: style },
    props: rest
  };
};

export const color = makeProvider({ propName: "color", themePath: "colors" });

export const flexDirection = makeProvider({
  propName: "flexDirection"
});

export const alignItems = makeProvider({
  propName: "alignItems"
});

export const justifyContent = makeProvider({
  propName: "justifyContent"
});

export const flexWrap = makeProvider({
  propName: "flexWrap"
});

export const fontWeight = makeProvider({
  propName: "fontWeight",
  themePath: "fontWeights"
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
  themePath: "fontSizes",
  defaultScale: [12, 14, 16, 20, 24, 32, 48, 64, 72]
});

export const backgroundColor = makeProvider({
  propName: "backgroundColor",
  themePath: "colors"
});

export const width = makeProvider({
  propName: "width"
});

export const height = makeProvider({
  propName: "width"
});

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
  const themeSpaces = theme.spaces || spaceScale;
  return {
    style: {
      marginLeft: getValueFromTheme(themeSpaces, ml),
      marginTop: getValueFromTheme(themeSpaces, mt),
      marginBottom: getValueFromTheme(themeSpaces, mb),
      marginRight: getValueFromTheme(themeSpaces, mr),
      marginHorizontal: getValueFromTheme(themeSpaces, mh),
      marginVertical: getValueFromTheme(themeSpaces, mv),
      margin: getValueFromTheme(themeSpaces, ma),
      paddingLeft: getValueFromTheme(themeSpaces, pl),
      paddingTop: getValueFromTheme(themeSpaces, pt),
      paddingBottom: getValueFromTheme(themeSpaces, pb),
      paddingRight: getValueFromTheme(themeSpaces, pr),
      paddingHorizontal: getValueFromTheme(themeSpaces, ph),
      paddingVertical: getValueFromTheme(themeSpaces, pv),
      padding: getValueFromTheme(themeSpaces, pa)
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
