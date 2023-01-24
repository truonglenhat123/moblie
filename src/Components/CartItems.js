import { Box, Center, HStack, Image, Pressable, Text } from "native-base";
import React from "react";
import { SwipeListView } from "react-native-swipe-list-view";
import { Colors } from "../Color";
import products from "../data/products";
import { MaterialIcons } from "@expo/vector-icons";

const Swiper = () => {
  <SwipeListView
    rightOpenValue={-50}
    previewRowKey="0"
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={products.slice(0, 2)}
    renderItem={renderItems}
    renderHiddenItem={HiddenItems}
    showsVerticalScrollIndicator={false}
  />;
};
const renderItems = (data) => {
  <Pressable>
    <Box ml={6} mb={3}>
      <HStack
        alignItems="center"
        bg={Colors.red}
        shadow={1}
        rounded={10}
        overflow="hidden"
      >
        <Center w="25%" bg={Colors.backgroundDark}>
          {/* <Image
            source={{ uri: data.productImage }}
            alt={data.productName}
            w="full"
            h={24}
          /> */}
        </Center>
      </HStack>
    </Box>
  </Pressable>;
};

const HiddenItems = () => {
  <Pressable
    w={50}
    roundedTopRight={10}
    roundedBottomRight={10}
    height="88%"
    ml="auto"
    justifyContent="center"
    bg={Colors.red}
  >
    <Center alignItems="center" space={2}>
      <MaterialIcons name="trash" size={24} color={Colors.white} />
    </Center>
  </Pressable>;
};

const CartItems = () => {
  return (
    <Box mr={6}>
      <Swiper />
      {/* <Text>aaa</Text> */}
    </Box>
  );
};

export default CartItems;
