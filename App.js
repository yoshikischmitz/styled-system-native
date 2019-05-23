/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Box, Text, Card } from "./components";
import ThemeContext from "./theme-context";

const theme = {
  spaces: [4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  breakPoints: [375, 414, 768],
  shadows: [
    {
      elevation: 1,
      shadowColor: "black",
      shadowOpacity: 0.3,
      shadowRadius: 3,
      shadowOffset: {
        width: 0,
        height: 2
      }
    },
    {
      elevation: 5,
      shadowColor: "black",
      shadowOpacity: 0.2,
      shadowRadius: 8,
      shadowOffset: {
        width: 0,
        height: 5
      }
    },
    {
      elevation: 5,
      shadowColor: "black",
      shadowOpacity: 0.14,
      shadowRadius: 20,
      shadowOffset: {
        width: 0,
        height: 10
      }
    }
  ],
  colors: {
    orange: "blue"
  }
};

export default class App extends Component<Props> {
  render() {
    return (
      <ThemeContext.Provider value={theme}>
        <Box mh={3} mt={5}>
          <Card
            shadow={0}
            mh={2}
            pa={3}
            style={{
              borderWidth: 1,
              backgroundColor: "white",
              borderColor: "grey",
              borderRadius: 3
            }}
          >
            <Text fontSize={4} color="orange">
              What's up
            </Text>
          </Card>
          <Card
            shadow={1}
            mt={3}
            mh={2}
            pa={3}
            style={{
              borderWidth: 1,
              backgroundColor: "white",
              borderColor: "grey",
              borderRadius: 3
            }}
          >
            <Text fontSize={4} color="orange">
              What's up
            </Text>
          </Card>
          <Card
            shadow={2}
            mt={3}
            mh={2}
            pa={3}
            style={{
              borderWidth: 1,
              backgroundColor: "white",
              borderColor: "grey",
              borderRadius: 3
            }}
          >
            <Text fontSize={4} color="orange">
              What's up
            </Text>
          </Card>
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
