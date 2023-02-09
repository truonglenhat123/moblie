import { View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack,
  FormControl,
  Input,
} from "native-base";
import { Colors } from "../Color";
import Tab from "../Components/Profile/Tab";
import ProfileComponents from "../Components/Profile/ProfileComponents";
import {AsyncStorage} from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const Inputs = [
    {
      label: "Username",
      type: "text",
    },
    {
      label: "Email",
      type: "text",
    },
    {
      label: "New Password",
      type: "password",
    },
    {
      label: "Confirm Password",
      type: "password",
    },
  ];
  const [email,setEmail] = useState(AsyncStorage.getItem('email'))
  useEffect(()=>{
      console.log(email);
  },[email])

  return (
    <ScrollView>
      <Box>
        <Center bg={Colors.white} pt={10} pb={6}>
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png",
            }}
            alt="profile"
            w={150}
            h={150}
            resizeMode="cover"
            borderRadius={100}
          />
          <Heading bold fontSize={20} isTruncated my={2} color={Colors.black}>
           {/* {email} */}
          </Heading>
          <Text italic fontSize={15} color={Colors.black}>
            ngày thêm 22/12/2022
          </Text>
        </Center>

        {/* Tab */}
        {/* <ProfileComponents /> */}

        <ProfileComponents />
        <Button
          bg={Colors.greenss}
          color={Colors.white}
          mt={5}
          w="300px"
          h="50px"
          borderRadius={20}
          fontSize={20}
        >
          Cập nhật trang cá nhân
        </Button>
      </Box>
    </ScrollView>
  );
};

export default ProfileScreen;
