import { View } from "react-native";
import React from "react";
import { Box, Center, Heading, Image, Text } from "native-base";
import { Colors } from "../Color";
import Tab from "../Components/Profile/Tab"
import ProfileComponents from "../Components/Profile/ProfileComponents";

const ProfileScreen = () => {
  return (
    <Box>
      <Center bg={Colors.green} pt={10} pb={6}>
        <Image
          source={{
            uri: "https://i.pinimg.com/564x/5d/18/b2/5d18b25ff369b7916f4fe85d6c76a563.jpg",
          }}
          alt="profile"
          w={24}
          h={24}
          resizeMode="cover"
        />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          Anh Bảy
        </Heading>
        <Text italic fontSize={10} color={Colors.white}>
         ngày thêm 22/12/2022
        </Text>
      </Center>

      {/* Tab */}
      <ProfileComponents/>

    </Box>
  );
};

export default ProfileScreen;
