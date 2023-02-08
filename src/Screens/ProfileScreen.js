import { View } from "react-native";
import React from "react";
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

  return (
    <ScrollView>
      <Box>
        <Center bg={Colors.white} pt={10} pb={6}>
          <Image
            source={{
              uri: "https://i.pinimg.com/564x/5d/18/b2/5d18b25ff369b7916f4fe85d6c76a563.jpg",
            }}
            alt="profile"
            w={150}
            h={150}
            resizeMode="cover"
            borderRadius={100}
          />
          <Heading bold fontSize={20} isTruncated my={2} color={Colors.black}>
            Anh Bảy
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
