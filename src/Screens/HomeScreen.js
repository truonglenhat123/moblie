import { View, Text } from "react-native";
import { Box } from "native-base";
import React from "react";
import { Colors } from "../Color";
import HomeSearch from "../Components/HomeSearch";
import HomeProduct from "../Components/HomeProduct";

const HomeScreen = () => {
  return (
    <Box flex={1} bg={Colors.green}>
      <HomeSearch/>
      <HomeProduct/>
      
    </Box>
  );
};

export default HomeScreen;
