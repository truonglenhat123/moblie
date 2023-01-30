import { View, Text, Pressable } from "react-native";
import React from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Spinner,
  VStack,
  Stack,
  HStack,
  IconButton,
  CloseIcon,
  Center,
} from "native-base";
import { Colors } from "../Color";
import { MaterialIcons, FontAwesome, Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "native-base";

const Register = () => {
  const navigation = useNavigation();
 
  
  const HandelRegister = (text) => {
   if(text.leng <3)
   {
      alert("ban can nhap du 3 ki tu");
   }
   else{
    alert("dang nhap thjanh co ng");
   }
   
    navigation.navigate("Login");
  };
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
        <Heading fontSize="50px">Đăng kí</Heading>
        <VStack space={6} pt="6">
          {/* name */}
          <Input
            InputLeftElement={
              <FontAwesome name="user" size={24} color="black" />
            }
            variant="underlined"
            placeholder="Tên người dùng"
            width="70%"
            color={Colors.red}
            pl={2}
            borderBottomColor={Colors.black}
            background={Colors.backgroundDark}
            fontSize="20px"
          ></Input>
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
            placeholder="Mật Khẩu"
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
          onPress={HandelRegister}
        >
          Đăng Kí
        </Button>
        <Pressable
          mt={4}
          onPress={() => {
            navigation.navigate("Cart");
          }}
        >
          <Text color={Colors.backgroundDark} fontSize="20px">
            Đăng Nhập
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
};

export default Register;
