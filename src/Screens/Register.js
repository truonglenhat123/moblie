import { Text, Pressable } from "react-native";
import React from "react";
import { Box, Button, Heading, Image, Input, VStack } from "native-base";
import { Colors } from "../Color";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import Spinner from "react-native-loading-spinner-overlay";

const Register = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState(null);
  const [username, setUserName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState(null);
  const [checkValidEmail,setCheckValidEmail] = useState(false);

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);
  const handleCheckEmail = (text) => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };
  const handelRegister = () => {
    fetch("http://103.116.107.230:8081/api/Auth/SignUp", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
        phone: phone,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log("resdata ", resJson);

        alert(resJson);
        if (resJson === "Register completed") {
          navigation.navigate("Login", {
            emailParam: email,
            passwordParam: password,
          });
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert(error);
      });
  };

  return (
    <Box flex={1} bg={Colors.white}>
      <Spinner visible={false} />
      {/* <Image
        flex={1}
        alt="Logo"
        resizeMode="cover"
        size="lg"
        source={require("../../assets/image1.jpg")}
        w="full"
      /> */}
      
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
            value={username}
            onChangeText={(text) => setUserName(text)}
          ></Input>

          {/*so dien thoai*/}
          <Input
            InputLeftElement={
              <FontAwesome name="user" size={24} color="black" />
            }
            variant="underlined"
            placeholder="Số điện thoại"
            width="70%"
            color={Colors.red}
            pl={2}
            borderBottomColor={Colors.black}
            background={Colors.backgroundDark}
            fontSize="20px"
            value={phone}
            onChangeText={(text) => setPhone(text)}
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
            value={email}
            onChangeText={(text) => handleCheckEmail(text)}
          ></Input>
          {checkValidEmail ? (
            <Text color="#ff0000" fontSize={15}>
              Không đúng định danh email
            </Text>
          ) : null}

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
            value={password}
            onChangeText={(text) => setPassword(text)}
          ></Input>
        </VStack>
        <Button
          _pressed={{
            bg: Colors.red,
          }}
          my={30}
          w="40%"
          rounded={50}
          bg={Colors.greenss}
          onPress={handelRegister}
          isDisabled={checkValidEmail}
        >
          Đăng Kí
        </Button>
        <Pressable mt={4}>
          <Text
            color={Colors.backgroundDark}
            fontSize="20px"
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            Đăng Nhập
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
};

export default Register;
