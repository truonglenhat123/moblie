import { View, Text } from "react-native";
import React from "react";
import { FlatList, HStack, Pressable ,Box, Center, Image} from "native-base";
import products from "../data/products";
import { Colors } from "../Color";

const OrderItems = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={products.slice(0, 3)}
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
                    <Image source={{uri:item.Image}}
                    alt={item.productName}
                    width="full"
                    resizeMode="contain"/>
                </Center>
            </HStack>
          </Box>
        </Pressable>
      )}
    ></FlatList>
  );
};

export default OrderItems;
