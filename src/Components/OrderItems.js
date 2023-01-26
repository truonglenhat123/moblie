import { View } from "react-native";
import React from "react";
import {
  FlatList,
  HStack,
  Pressable,
  Box,
  Center,
  Image,
  VStack,
  Text,
  Button,
} from "native-base";
import products from "../data/products";
import { Colors } from "../Color";

const OrderItems = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable>
          <Box mb={3}>
            <HStack
              alignItems="center"
              bg={Colors.white}
              shadow={1}
              rounded={10}
              overflow="hidden"
            >
              <Center w="25%" bg={Colors.backgroundDark}>
                <Image
                  source={{ uri: item.productImage }}
                  alt={item.productName}
                  width="full"
                  resizeMode="contain"
                />
              </Center>
              <VStack w="60%" px={2}>
                <Text isTruncated color={Colors.red} bold fontSize={24}>
                  {item.productName}
                </Text>
                <Text isTruncated color={Colors.backgroundLight} mt={3} bold>
                  ${item.productPrice}
                </Text>
              </VStack>
              <Center>
                <Button
                  bg={Colors.green}
                  _pressed={{ bg: Colors.green }}
                  _text={{ color: Colors.white }}
                >
                  5
                </Button>
              </Center>
            </HStack>
          </Box>
        </Pressable>
      )}
      background="red.100"
    ></FlatList>
  );
};

export default OrderItems;
