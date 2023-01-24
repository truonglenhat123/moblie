import React from "react";
import { Box, Button, Center, Text } from "native-base";
import { Colors } from "../Color";
import { MaterialIcons } from "@expo/vector-icons";

const CartEmpty = () => {
  const backHomePage = () => {};
  return (
    <Box flex={1} px={4}>
      <Center h="90%">
        <Center w={200} h={200} bg={Colors.white} rounded="full">
          <MaterialIcons name="shopping-cart" size={64} color={Colors.green} />
        </Center>
        <Text color={Colors.black} bold mt={5} fontSize={20}>
          Giỏ hàng của bạn đang rỗng!
        </Text>
      </Center>
      <Button bg={Colors.black} color={Colors.white} onPress={backHomePage} borderRadius={20}>
        Bắt đầu mua hàng
      </Button>
    </Box>
  );
};

export default CartEmpty;
