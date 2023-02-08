import React, { useEffect, useState } from "react";
import {
  Flex,
  ScrollView,
  Pressable,
  Heading,
  Box,
  Text,
  Image,
  View,
  Center,
} from "native-base";
// import { Image } from "react-native";
import { Colors } from "../Color";
import products from "../data/products";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";

function HomeProduct() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    getListProduct();
    return () => {};
  });
  const getListProduct = () => {
    const apiURL = "http://103.116.107.230:8081/api/product";
    fetch(apiURL)
      .then((res) => res.json())
      .then((resJson) => {
        setData(resJson);
      })
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };

  const renderItem = () => {
    return (
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
      >
        {data.map((product) => (
          <Pressable
            onPress={() => navigation.navigate("Single", product)}
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
              source={{
                uri: `http://103.116.107.230:8081/image/Asset/${product.image}`,
              }}
              alt={product.productName}
              w="full"
              h={24}
              resizeMode="contain"
            />
            <Box px={4} pt={1}>
              <Heading size="sm" bold>
                đ{product.newPrice}
              </Heading>
              <Text fontSize={15} mt={1} isTruncated w="full">
                {product.productName}
              </Text>
            </Box>
          </Pressable>
        ))}
      </Flex>
    );
  };
  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      {isLoading ? <ActivityIndicator /> : renderItem()}
    </ScrollView>
  );
}

export default HomeProduct;
