/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View, Image } from "react-native";
import { Box, Text, Span, Card } from "./components";
import ThemeContext from "./theme-context";

const theme = {
  spaces: [4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  breakPoints: [375, 414, 768],
  fontWeights: ["400", "600", "bold"],
  borders: [
    {
      borderWidth: 1,
      borderColor: "rgba(0, 0, 0, 0.12)"
    },
    {
      borderWidth: 1,
      borderColor: "rgba(0, 0, 0, 0.24)"
    },
    {
      borderWidth: 1,
      borderColor: "rgba(0, 0, 0, 0.36)"
    }
  ],
  borderRadii: [4, 8, 16, 32, 999999],
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
    orange: "blue",
    green: "#46BB7C",
    gray0: "rgba(0, 0, 0, 0.5)"
  }
};

function AirCard({ name }) {
  return (
    <Card
      shadow={1}
      borderRadius={0}
      border={2}
      style={{
        backgroundColor: "white"
      }}
      mr={2}
    >
      <Image
        style={{ width: 8 * 18, height: 80 }}
        source={{
          uri:
            "https://cdn.vox-cdn.com/thumbor/CTluvlc9kScZlylzsRR4QRCE4Gg=/6x0:641x423/1200x800/filters:focal(6x0:641x423)/cdn.vox-cdn.com/uploads/chorus_image/image/48767301/Screen_Shot_2016-02-09_at_9.08.28_AM.0.0.png"
        }}
      />
      <Box pa={1} mb={2}>
        <Text fontWeight={1} fontSize={2}>
          {name}
        </Text>
      </Box>
    </Card>
  );
}

const HomeCard = ({ name, label, price, rating }) => (
  <Card mt={1} mh={1} border={0} style={{ flex: 1, minWidth: "50%" }}>
    <Text color="red" fontSize={1}>
      {label}
    </Text>
    <Box mv={1}>
      <Text fontSize={2}>{name}</Text>
    </Box>
    <Text fontSize={2}>{price}</Text>
    <Text fontSize={0}>{rating}</Text>
  </Card>
);

export default class App extends Component<Props> {
  render() {
    return (
      <ThemeContext.Provider value={theme}>
        <Box mh={2} mt={3}>
          <Card pa={2} shadow={1} style={{ backgroundColor: "white" }}>
            <Text fontSize={1} color="gray0">
              Try <Span color="red">"Paris"</Span>
            </Text>
          </Card>
          <Box mt={2} style={{ flexDirection: "row" }}>
            <Card mr={1} pa={1} border={0} borderRadius={0}>
              <Text>Dates</Text>
            </Card>
            <Card pa={1} border={0} borderRadius={0}>
              <Text>Guests</Text>
            </Card>
          </Box>
          <Box mv={3}>
            <Text fontSize={4} fontWeight={2}>
              What can we help you find, Yoshiki?
            </Text>
          </Box>
          <Box style={{ flexDirection: "row" }}>
            <AirCard name="homes" />
            <AirCard name="Experiences" />
            <AirCard name="Restaurants" />
          </Box>
          <Box mt={3}>
            <Text fontSize={4} fontWeight={2}>
              Homes around the world
            </Text>
            <Box
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                marginHorizontal: -8
              }}
            >
              <HomeCard
                label="CAVE CHANIA"
                name="Luxurious stone villa in Crete"
                price="$99 per night"
                rating={<Text color="green">xxxxx - 551 superhost</Text>}
              />
              <HomeCard
                label="CAVE CHANIA"
                name="Luxurious stone villa in Crete"
                price="$99 per night"
                rating={<Text color="green">xxxxx - 551 superhost</Text>}
              />
              <HomeCard
                label="CAVE CHANIA"
                name="Luxurious stone villa in Crete"
                price="$99 per night"
                rating={<Text color="green">xxxxx - 551 superhost</Text>}
              />
            </Box>
          </Box>
        </Box>
      </ThemeContext.Provider>
    );
  }
}
