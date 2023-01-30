import { View, Text, Pressable } from "react-native";
import React from "react";
import { Box, Button, Heading, Image, Input, VStack } from "native-base";
import { Colors } from "../Color";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        flex={1}
        alt="Logo"
        resizeMode="cover"
        size="lg"
        source={require("../../assets/image1.jpg")}
        w="full"
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center"
      >
        <Heading fontSize="50px">Đăng nhập</Heading>
        <VStack space={6} pt="6">
          {/* email */}
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={24} color="black" />
            }
            variant="underlined"
            placeholder="Email"
            width="70%"
            color={Colors.red}
            pl={2}
            borderBottomColor={Colors.black}
            background={Colors.backgroundDark}
            fontSize="20px"
          ></Input>
          {/* password */}
          <Input
            InputLeftElement={<AntDesign name="eye" size={24} color="black" />}
            variant="underlined"
            placeholder="Password"
            width="70%"
            type="password"
            color={Colors.red}
            pl={2}
            borderBottomColor={Colors.black}
            background={Colors.backgroundDark}
            fontSize="20px"
          ></Input>
        </VStack>
        <Button
          _pressed={{
            bg: Colors.red,
          }}
          my={30}
          w="40%"
          rounded={50}
          bg={Colors.backgroundDark}
          onPress={()=>navigation.navigate('Bottom')}
        >
          Đăng nhập
        </Button>
        <Pressable mt={4}  onPress={()=>navigation.navigate('Register')}>
          <Text color={Colors.backgroundDark} fontSize="20px">
            Đăng kí
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
};

export default Login;
