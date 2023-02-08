import { View, Text } from "react-native";
import React, { useState,useEffect } from "react";
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
import { addToCart, selectCartItems, selectCartItemWithId,removeFromCart } from "../../features/cartSlice";

const ProductDetailScreen = ({ route }) => {
  


 
  const [value, setValue] = useState(0);
  const product = route.params;
  const dispatch = useDispatch();
  const items = useSelector((state)=>selectCartItemWithId(state,route.id))
  const addItemToCart=() =>{
    dispatch(addToCart({id,productName,newPrice,image}));
  }
  const removeItemFromCart = ()=>{
    if(!items.length > 0) return;
    dispatch(removeFromCart({id}))
  }
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: `http://192.168.1.50:8083/image/Asset/${product.image}` }}
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
          />
          <Spacer />
          <Heading bold color={Colors.black} fontSize={30}>
            đ {product.newPrice}
          </Heading>
          <HStack></HStack>
        </HStack>
        <Text lineHeight={30} fontSize={30}>
          {product.description}
        </Text>
        <Button
          bg={Colors.greenss}
          color={Colors.white}
          mt={10}
          borderRadius={30}
          height={60}
          fontSize={50}
          onPress={addItemToCart}
        >
          Thêm vào giỏ hàng
        </Button>
        {/* review */}
        <Review />
      </ScrollView>
    </Box>
  );
};

export default ProductDetailScreen;
