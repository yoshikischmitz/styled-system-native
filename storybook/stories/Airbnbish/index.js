import React, { Component } from "react";
import { Platform, StyleSheet, ScrollView, Image } from "react-native";
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
      label: "entire apartment",
      title: "Luxurious Apartment in City",
      price: "$125 per night",
      rating: "★★★★★",
      ratingMessage: "superhost",
      image: "https://i.imgur.com/6oD3BKN.jpg"
    },
    {
      id: 1,
      label: "medieval dwelling",
      title: "#4 Monastic Chamber",
      price: "$44 per night",
      rating: "★★★★★",
      ratingMessage: "superhost",
      image: "https://i.imgur.com/I0dLxPP.jpg"
    },
    {
      id: 2,
      label: "entire tent",
      title: "Mountaintop tent with a view!",
      price: "$109 per night",
      rating: "★★★★★",
      ratingMessage: "superhost",
      image: "https://i.imgur.com/E1Pn0Mk.jpg"
    },
    {
      id: 3,
      label: "basement",
      title: "Rustic boiler room",
      price: "$5 per night",
      rating: "★★★★★",
      ratingMessage: "superhost",
      image: "https://i.imgur.com/4rm98Ii.jpg"
    }
  ]
};

function AirCard({ title, image, ...rest }) {
  return (
    <Card
      shadow={0}
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

const HomeCard = ({ title, label, price, rating, image, ...rest }) => (
  <Card style={{ flex: 1, minWidth: "50%" }} {...rest}>
    <Image
      source={{ uri: image }}
      style={{ width: "100%", height: 100, borderRadius: 2 }}
    />
    <Box mv={0}>
      <Text color="red" fontSize={0}>
        {label.toUpperCase()}
      </Text>
    </Box>
    <Box mb={1}>
      <Text fontSize={1} fontWeight={1}>
        {title}
      </Text>
    </Box>
    <Box mb={0}>
      <Text fontSize={0}>{price}</Text>
    </Box>
    <Text fontSize={0}>{rating}</Text>
  </Card>
);

const Search = props => (
  <Card shadow={1} backgroundColor="backgroundColor" {...props}>
    <Text fontSize={1} color="gray0">
      Try "Paris"
    </Text>
  </Card>
);

const Filter = ({ children, ...props }) => (
  <Card pa={1} border={0} borderRadius={0} {...props}>
    <Text>{children}</Text>
  </Card>
);

export default class App extends Component<Props> {
  render() {
    return (
      <ThemeContext.Provider value={theme}>
        <ScrollView>
          <Box mh={2} mt={3}>
            <Search pa={2} />
            <Flex mt={2} flexDirection="row">
              <Filter mr={1}>Dates</Filter>
              <Filter>Guests</Filter>
            </Flex>
            <Box mv={3}>
              <Text fontSize={4} fontWeight={2}>
                What can we help you find, Yoshiki?
              </Text>
            </Box>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{
                marginHorizontal: -16,
                paddingLeft: 16,
                overflow: "visible"
              }}
            >
              <Flex flexDirection="row">
                {data.cards.map(({ title, image }) => (
                  <AirCard mr={2} key={title} title={title} image={image} />
                ))}
              </Flex>
            </ScrollView>
            <Box mt={3}>
              <Text fontSize={4} fontWeight={2}>
                Homes around the world
              </Text>
              <Flex mt={1} mh={-8} flexDirection="row" flexWrap="wrap">
                {data.homes.map(
                  ({
                    id,
                    label,
                    image,
                    title,
                    price,
                    rating,
                    ratingMessage
                  }) => (
                    <Box key={id} ph={1} mb={1} width="50%">
                      <HomeCard
                        mt={1}
                        label={label}
                        title={title}
                        price={price}
                        image={image}
                        rating={
                          <Text color="green">
                            {rating} · {ratingMessage}
                          </Text>
                        }
                      />
                    </Box>
                  )
                )}
              </Flex>
            </Box>
          </Box>
        </ScrollView>
      </ThemeContext.Provider>
    );
  }
}
