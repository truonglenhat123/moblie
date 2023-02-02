import React, { useEffect, useState } from "react";
import {
  Flex,
  ScrollView,
  Pressable,
  Heading,
  Box,
  Text,
  Image,
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
    const apiURL = "http://192.168.1.250:8083/api/Product";
    fetch(apiURL)
      .then((res) => res.json())
      .then((resJson) => {
        setData(resJson);
      })
      .catch((error) => {
        console.log("error", error);
      })
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
        {data.slice(0, 10).map((product) => (
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
              source={{ uri: `http://192.168.1.250:8083/image/Asset/${product.image}` }}
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
