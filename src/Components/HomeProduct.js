import React from "react";
import {
  Flex,
  ScrollView,
  Pressable,
  Image,
  Heading,
  Box,
  Text,
} from "native-base";
import { Colors } from "../Color";
import products from "../data/products";
import { useNavigation } from "@react-navigation/native";

function HomeProduct() {
  const navigation = useNavigation();
  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
      >
        {products.map((product) => (
          <Pressable
          onPress={()=>navigation.navigate("Single",product)}
            key={product.id}
            w="47%"
            bg={Colors.white}
            rounded="md"
            shadow={2}
            pt={0.3}
            my={3}
            pb={2}
            overflow="hidden"
          >
            <Image
              source={{ uri: product.productImage }}
              alt={product.productName}
              w="full"
              h={24}
              resizeMode="contain"
            />
            <Box px={4} pt={1}>
              <Heading size="sm" bold>
                đ{product.productPrice}
              </Heading>
              <Text fontSize={15} mt={1} isTruncated w="full">
                {product.productName}
              </Text>
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
}

export default HomeProduct;
