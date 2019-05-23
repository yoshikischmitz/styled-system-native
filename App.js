/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Box, Text } from "./components";
import ThemeContext from "./theme-context";

const theme = {
  spaces: [4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  breakPoints: [375, 414, 768],
  colors: {
    orange: "blue"
  }
};

export default class App extends Component<Props> {
  render() {
    return (
      <ThemeContext.Provider value={theme}>
        <Box
          mt={6}
          mh={[1, 4, 5]}
          pa={3}
          style={{ borderWidth: 1, borderColor: "grey", borderRadius: 3 }}
        >
          <Text fontSize={4} color="orange">
            What's up
          </Text>
        </Box>
      </ThemeContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
