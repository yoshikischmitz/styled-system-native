import React, { Component } from "react";
import { Platform, StyleSheet, View, Image } from "react-native";
import { Box, Flex, Text, Span, Card } from "components";
import theme from "./theme";
import ThemeContext from "styled-system-native/theme-context";

const data = {
  cards: [
    {
      title: "Homes",
      image:
        "https://cdn.vox-cdn.com/thumbor/CTluvlc9kScZlylzsRR4QRCE4Gg=/6x0:641x423/1200x800/filters:focal(6x0:641x423)/cdn.vox-cdn.com/uploads/chorus_image/image/48767301/Screen_Shot_2016-02-09_at_9.08.28_AM.0.0.png"
    },
    {
      title: "Experiences",
      image:
        "https://cdn.vox-cdn.com/thumbor/CTluvlc9kScZlylzsRR4QRCE4Gg=/6x0:641x423/1200x800/filters:focal(6x0:641x423)/cdn.vox-cdn.com/uploads/chorus_image/image/48767301/Screen_Shot_2016-02-09_at_9.08.28_AM.0.0.png"
    },
    {
      title: "Resorts",
      image:
        "https://cdn.vox-cdn.com/thumbor/CTluvlc9kScZlylzsRR4QRCE4Gg=/6x0:641x423/1200x800/filters:focal(6x0:641x423)/cdn.vox-cdn.com/uploads/chorus_image/image/48767301/Screen_Shot_2016-02-09_at_9.08.28_AM.0.0.png"
    }
  ],
  homes: [
    {
      id: 0,
      label: "CAVE CHANIA",
      title: "Luxurious stone villa in Crete",
      price: "$99 per night",
      rating: 5,
      ratingMessage: "superhost"
    }
  ]
};

function AirCard({ title, image, ...rest }) {
  return (
    <Card
      shadow={1}
      borderRadius={0}
      border={2}
      backgroundColor="backgroundColor"
      {...rest}
    >
      <Image
        style={{ width: 8 * 18, height: 80 }}
        source={{
          uri: image
        }}
      />
      <Box pa={1} mb={2}>
        <Text fontWeight={1} fontSize={2}>
          {title}
        </Text>
      </Box>
    </Card>
  );
}

const HomeCard = ({ title, label, price, rating, ...rest }) => (
  <Card border={0} style={{ flex: 1, minWidth: "50%" }} {...rest}>
    <Text color="red" fontSize={1}>
      {label}
    </Text>
    <Box mv={1}>
      <Text fontSize={2}>{title}</Text>
    </Box>
    <Text fontSize={2}>{price}</Text>
    <Text fontSize={0}>{rating}</Text>
  </Card>
);

const Search = props => (
  <Card shadow={1} backgroundColor="backgroundColor" {...props}>
    <Text fontSize={1} color="gray0">
      Try <Span color="red">"Paris"</Span>
    </Text>
  </Card>
);

const Filter = ({ children }) => (
  <Card mr={1} pa={1} border={0} borderRadius={0}>
    <Text>{children}</Text>
  </Card>
);

export default class App extends Component<Props> {
  render() {
    return (
      <ThemeContext.Provider value={theme}>
        <Box mh={2} mt={3}>
          <Search pa={2} />
          <Flex mt={2} flexDirection="row">
            <Filter>Dates</Filter>
            <Filter>Guests</Filter>
          </Flex>
          <Box mv={3}>
            <Text fontSize={4} fontWeight={2}>
              What can we help you find, Yoshiki?
            </Text>
          </Box>
          <Flex flexDirection="row">
            {data.cards.map(({ title, image }) => (
              <AirCard mr={2} key={title} title={title} image={image} />
            ))}
          </Flex>
          <Box mt={3}>
            <Text fontSize={4} fontWeight={2}>
              Homes around the world
            </Text>
            <Flex mh={-8} flexDirection="row" flexWrap="wrap">
              {data.homes.map(
                ({ id, label, title, price, rating, ratingMessage }) => (
                  <HomeCard
                    key={id}
                    mt={1}
                    mh={1}
                    label="CAVE CHANIA"
                    title="Luxurious stone villa in Crete"
                    price="$99 per night"
                    rating={
                      <Text color="green">
                        {rating} - {ratingMessage}
                      </Text>
                    }
                  />
                )
              )}
            </Flex>
          </Box>
        </Box>
      </ThemeContext.Provider>
    );
  }
}
