import { View, Text, Pressable } from "react-native";
import React from "react";
import { HStack, Input,Box } from "native-base";
import { Colors } from "../Color";
import {  FontAwesome5 } from "@expo/vector-icons";

const HomeSearch = () => {
  return (
    <HStack
      space={3}
      w="full"
      bg={Colors.backgroundDark}
      px={6}
      py={7}
      alignItems="center"
      safeAreaTop
    
    >
      <Input
        placeholder="Tìm kiếm ...."
        w="85%"
        bg={Colors.white}
        type="search"
        borderWidth={0}
        _focus={{
            bg:Colors.backgroundLight
        }}
        variant="filled"
      />
      <Pressable ml={3}>
      <FontAwesome5 name="shopping-cart" size={30} color={Colors.white} />
      <Box px={1} rounded="full" position="absolute" top={-13} left={7} bg={Colors.red} _text={{
        color:Colors.white ,fontSize:"11px",
      }} >
        5
      </Box>
      </Pressable>
    </HStack>
  );
};

export default HomeSearch;
