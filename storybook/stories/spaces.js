import React from "react";
import { ScrollView } from "react-native";
import { Box, Flex, Text } from "components";

const BlackBox = ({ ...props }) => <Box backgroundColor="black" {...props} />;
export default function Spaces() {
  let ls = [];
  for (let i = 0; i < 9; i++) {
    ls.push(
      <Flex
        key={i}
        mb={3}
        flexDirection="row"
        style={{ alignItems: "flex-start" }}
      >
        <Box mr={2}>
          <Text fontSize={1} fontWeight="bold">
            {i}
          </Text>
        </Box>
        <BlackBox pt={i} style={{ flex: 1 }} />
      </Flex>
    );
  }

  return (
    <ScrollView>
      <Box mh={2} mt={6}>
        <Text fontSize={6} fontWeight="bold" style={{ lineHeight: 90 }}>
          Spacing
        </Text>
        <Text fontSize={1}>[0, 4, 8, 16, 32, 64, 128, 256, 512]</Text>
        <Box mt={3}>{ls}</Box>
      </Box>
    </ScrollView>
  );
}
