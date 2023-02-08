import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  ScrollView,
  Spacer,
} from "native-base";
import { Colors } from "../Color";
import NumericInput from "react-native-numeric-input";
import Review from "../Components/Review";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";

const ProductDetailScreen = ({ route, navigation }) => {
  const [value, setValue] = useState(0);
  const product = route.params;
  const dispatch = useDispatch();

  const goBack = () => {
    navigation.goBack(null);
  };
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <View style={style.header}>
        <MaterialIcons
          name="arrow-back-ios"
          size={28}
          onPress={() => goBack()}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Chi tiết sản phẩm
        </Text>
      </View>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={{
            uri: `http://103.116.107.230:8081/image/Asset/${product.image}`,
          }}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={20} mb={2} lineHeight={22}>
          {product.productName}
        </Heading>
        <HStack space={2} alignItems="center" my={5}>
          <NumericInput
            value={value}
            totalWidth={140}
            totalHeight={50}
            iconSize={25}
            step={1}
            maxValue={15}
            minValue={0}
            borderColor={Colors.backgroundDark}
            rounded
            textColor={Colors.black}
            iconStyle={{ color: Colors.white }}
            rightButtonBackgroundColor={Colors.greenss}
            leftButtonBackgroundColor={Colors.greenss}
            onChange={(value) => setValue(value)}
          />
          <Spacer />
          <Heading bold color={Colors.black} fontSize={30}>
            đ {product.newPrice}
          </Heading>
          <HStack></HStack>
        </HStack>
        <Text lineHeight={30} fontSize={30}>
          {product.descriptionshort}
        </Text>
        <Button
          bg={Colors.greenss}
          color={Colors.white}
          mt={10}
          borderRadius={30}
          height={60}
          fontSize={50}
        >
          Thêm vào giỏ hàng
        </Button>
        {/* review */}
        <Review />
      </ScrollView>
    </Box>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
});

export default ProductDetailScreen;
