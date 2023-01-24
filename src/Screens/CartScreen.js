import React from "react";
import { Box, Center, ScrollView, Text } from "native-base";
import { Colors } from "../Color";
import CartEmpty from "../Components/CartEmpty";
import CartItems from "../Components/CartItems";

const CartScreen = () => {
  return (
    <Box flex={1} safeArea >
      {/* heared  */}
      <Center w="full" py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          Giỏ Hàng
        </Text>
      </Center>
      {/* giỏ hàng trống */}
      {/* <CartEmpty/> */}

      {/* cos asan pham */}
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        <CartItems />
      </ScrollView> */}
      <Text>DDaay la gio hang</Text>
    </Box>
  );
};

export default CartScreen;
