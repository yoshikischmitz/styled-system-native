import React from "react";
import { ScrollView } from "react-native";
import { Box, Flex, Text } from "components";

export default function TextStory() {
  let ls = [];
  const fontScale = [12, 14, 16, 20, 24, 32, 48, 64, 72];

  for (let i = 0; i < fontScale.length; i++) {
    ls.push(
      <Flex
        key={i}
        mb={3}
        flexDirection="row"
        style={{ alignItems: "flex-start" }}
      >
        <Box mr={2}>
          <Text color="darkGray" fontSize={1}>
            {i}
          </Text>
        </Box>
        <Text
          fontSize={i}
          fontWeight="bold"
          style={{ lineHeight: fontScale[i] }}
        >
          Lorem Ipsum Dolor Sit Amet
        </Text>
      </Flex>
    );
  }

  return (
    <ScrollView>
      <Box mh={2} mt={6}>
        <Text fontSize={6} fontWeight="bold" style={{ lineHeight: 90 }}>
          Text
        </Text>
        <Text fontSize={1}>{JSON.stringify(fontScale)}</Text>
        <Box mt={3}>{ls}</Box>
      </Box>
    </ScrollView>
  );
}
