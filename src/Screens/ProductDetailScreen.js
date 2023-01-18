import { View, Text } from "react-native";
import React, { useState } from "react";
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

const ProductDetailScreen = () => {
  const [value, setValue] = useState(0);
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../assets/images/products/boat1.png")}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={20} mb={2} lineHeight={22}>
          Iphone 14 pro max
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
            rightButtonBackgroundColor={Colors.green}
            leftButtonBackgroundColor={Colors.green}
          />
          <Spacer />
          <Heading bold color={Colors.black} fontSize={30}>
            đ400
          </Heading>
          <HStack></HStack>
        </HStack>
        <Text lineHeight={30} fontSize={30}>
          The image name is resolved the same way JS modules are resolved. In
          the example above, the bundler will look for my-icon.png in the same
          folder as the component that requires it. You can use the @2x and @3x
          suffixes to provide images for different screen densities. If you have
          the following file structure: The image name is resolved the same way
          JS modules are resolved. In the example above, the bundler will look
          for my-icon.png in the same folder as the component that requires it.
          You can use the @2x and @3x suffixes to provide images for different
          screen densities. If you have the following file structure:
        </Text>
        <Button
          bg={Colors.green}
          color={Colors.white}
          mt={10}
          borderRadius={30}
          height={60}
          fontSize={50}
        >
          Thêm vào giỏ hàng
        </Button>
        {/* review */}
        <Review/>
      </ScrollView>
    </Box>
  );
};

export default ProductDetailScreen;
