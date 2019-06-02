import React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Airbnbish from "./Airbnbish";
import Spaces from "./spaces";
import Text from "./text";

storiesOf("System", module)
  .add("Spaces", () => <Spaces />)
  .add("Text", () => <Text />);

storiesOf("Examples", module).add("Airbnbish", () => <Airbnbish />);
