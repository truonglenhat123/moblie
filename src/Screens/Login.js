import {  Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import { Box, Button, Heading, Image, VStack, Input,Text } from "native-base";
import { Colors } from "../Color";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";




const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkValidEmail,setCheckValidEmail] = useState(false);

  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  const handelLogin = () => {
    fetch("http://103.116.107.230:8081/api/Auth/SignIn", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) =>res.json())
      .then((resJson) => {
        console.log("resdata ", resJson);
        if (resJson === "UserName or Password incorrect") {
          alert(resJson);
          return;
        }
        if (resJson.status == 400) {
         alert("Đăng nhập thất bại");
          return;
        }
        
        navigation.navigate("HomeBoard");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <Box flex={1} bg={Colors.white}>
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
        <Heading fontSize="50px">Đăng nhập</Heading>
        {/* <Text>{val}</Text> */}
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
            fontSize={20}
            value={email}
            onChangeText={(text) => handleCheckEmail(text)}
          ></Input>
          {checkValidEmail ? <Text color='#ff0000' fontSize={15}>Không đúng định dạnh email</Text> :""}
         
          {/* password */}
          <Input
            InputLeftElement={<AntDesign name="lock" size={24} color="black" />}
            variant="underlined"
            placeholder="Password"
            width="70%"
            type="password"
            color='#ff0000'
            pl={2}
            borderBottomColor={Colors.black}
            background={Colors.backgroundDark}
            fontSize={20}
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
          onPress={handelLogin}
          isDisabled={checkValidEmail}
          color={Colors.black}
        >
          Đăng nhập
        </Button>
        <Pressable mt={4} onPress={() => navigation.navigate("Register")}>
          <Text color={Colors.backgroundDark} fontSize="20px">
            Đăng kí
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
};

export default Login;
