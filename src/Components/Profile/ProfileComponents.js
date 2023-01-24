import { Box, Button, FormControl, Input, ScrollView, VStack } from "native-base";
import React from "react";
import { Colors } from "../../Color";

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

const ProfileComponents = () => {
  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {Inputs.map((i,index) => (
            <FormControl key={index}>
              <FormControl.Label
                _text={{
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {i.label}
              </FormControl.Label>
              <Input
                borderWidth={0.2}
                borderColor={Colors.backgroundDark}
                bg={Colors.subScreen}
                py={4}
                color={Colors.green}
                type={i.type}
                fontSize={20}
                _focus={{
                  bg: Colors.subScreen,
                  borderColor: Colors.green,
                  borderWidth: 1,
                }}
              />
            </FormControl>
          ))}
          <Button bg={Colors.blue} color={Colors.white} borderRadius={10}>Cập nhật trang cá nhân</Button>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default ProfileComponents;
