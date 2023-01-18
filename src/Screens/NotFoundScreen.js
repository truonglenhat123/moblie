import { View, Text } from "react-native";
import React from "react";
import { Box, Center, VStack, Button } from "native-base";
import { Colors } from "../Color";

const NotFoundScreen = () => {
  return (
    <Box flex={1} bg={Colors.green} safeAreaTop>
      <Center w="full" h={250}>
        {/* <Image */}
      </Center>
      <VStack space={6} px={5} alignItems="center">
        <Button
          _pressed={{
            bg: Colors.red,
          }}
          my={30}
          w="80%"
          h="60px"
          rounded={50}
          bg={Colors.red}
          color={Colors.backgroundDark}
        >
          Đăng Kí
        </Button>
        {/* nút đăng nhập */}
        <Button
          _pressed={{
            bg: Colors.red,
          }}
          my={30}
          w="80%"
          h="60px"
          rounded={50}
          bg={Colors.backgroundDark}
        >
         Đăng Nhập
        </Button>
      </VStack>
    </Box>
  );
};

export default NotFoundScreen;
