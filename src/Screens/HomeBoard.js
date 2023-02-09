import React, { useEffect, useState } from "react";
import { Colors } from "../Color";
import {
  ScrollView,
  StatusBar,
  View,
  Text,
  Pressable,
  Image,
  Box,
  Heading,
  Button,
} from "native-base";
import { TouchableOpacity } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import products from "../data/products";

const HomeBoard = ({ navigation }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getListProduct();
  }, []);
  const getListProduct = () => {
    const apiURL = "http://103.116.107.230:8081/api/product/product/branch";
    fetch(apiURL)
      .then((res) => res.json())
      .then((resJson) => {
        setData(resJson);
        // console.log("====================================");
        // console.log(resJson[0]);
        // console.log("====================================");
      })
      .catch((error) => {});
  };
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: Colors.white,
      }}
    >
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator>
        <View
          fontSize="18"
          color={Colors.backgroundMedium}
          flexDirection="row"
          justifyContent="space-between"
          padding={16}
        >
          <TouchableOpacity>
            <Entypo
              name="shopping-bag"
              style={{
                fontSize: 25,
                color: Colors.backgroundMedium,
                padding: 12,
                borderRadius: 10,
                backgroundColor: "#D5F5E3",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <MaterialCommunityIcons
              name="cart"
              style={{
                fontSize: 25,
                color: Colors.backgroundMedium,
                padding: 15,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: Colors.greenss,
                backgroundColor: "#D5F5E3",
              }}
            ></MaterialCommunityIcons>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 10,
            marginBottom: 10,
            padding: 15,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: Colors.black,
              fontWeight: "500",
              letterSpacing: 1,
              marginBottom: 5,
            }}
          >
            DOUBLE SCHOOL Shop &amp; Dịch vụ
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: Colors.black,
              fontWeight: "400",
              letterSpacing: 1,
              lineHeight: 24,
            }}
          >
            Chuyên cung cấp các loại điện thoại phổ biến hiện nay.
            {"\n"}Cửa hàng này bao uy tín nha
          </Text>
        </View>

        {data &&
          data.map((product,index) => (
            <View
            key={index}
              style={{
                padding: 16,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: Colors.black,
                      fontWeight: "500",
                      letterSpacing: 1,
                    }}
                  >
                    {Object.keys(product)[0]}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: Colors.black,
                      fontWeight: "400",
                      opacity: 0.5,
                      marginLeft: 10,
                    }}
                  >
                    {Object.values(product)[0] &&
                      Object.values(product)[0].length}
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 14,
                    color: Colors.blue,
                    fontWeight: "400",
                  }}
                  onPress={() => navigation.navigate("Home")}
                >
                  Xem thêm
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                }}
              >
                {Object.values(product)[0] &&
                  Object.values(product)[0]
                    .slice(0, 4)
                    .map((productD) => (
                      <Pressable
                        onPress={() => navigation.navigate("Single", productD)}
                        key={productD.id}
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
                            uri: `http://103.116.107.230:8081/image/Asset/${productD.image}`,
                          }}
                          alt={productD.productName}
                          w="full"
                          h={24}
                          resizeMode="contain"
                        />
                        <Box px={4} pt={1}>
                          <Heading size="sm" bold>
                            đ{productD.newPrice}
                          </Heading>
                          <Text fontSize={15} mt={1} isTruncated w="full">
                            {productD.productName}
                          </Text>
                        </Box>
                      </Pressable>
                    ))}
              </View>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default HomeBoard;
