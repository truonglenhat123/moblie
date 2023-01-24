import { View, Text } from "react-native";
import React from "react";
import { Center, Heading } from "native-base";
import { Colors } from "../Color";

const OrderInfo = ({ icon, title, subTitle, text, success, danger }) => {
  return (
    <Center
      bg={Colors.white}
      w={200}
      py={2}
      rounded={10}
      shadow={4}
      mb={2}
      ml={5}
      mr={1}
      px={4}
    >
      <Center bg={Colors.green} w={60} rounded="full" h={60}>
        {icon}
      </Center>
      <Heading
        bold
        fontSize={12}
        isTruncated
        mt={3}
        mb={2}
        color={Colors.black}
      >
        {title}
      </Heading>
      <Text fontSize={13} color={Colors.black}>
        {subTitle}
      </Text>

      <Text fontSize={13} color={Colors.black}>
        {text}
      </Text>
      {/* status  */}
      {success && (
        <Center py={2} mt={2} rounded={5} w="full" bg={Colors.blue}>
          <Text fontSize={12} color={Colors.white}>
            Thanh toán ngày : 21/11/2022
          </Text>
        </Center>
      )}
      {danger && (
        <Center py={2} mt={2} rounded={5} w="full" bg={Colors.red}>
          <Text fontSize={12} color={Colors.white}>
            khong vận chiueemr
          </Text>
        </Center>
      )}
    </Center>
  );
};

export default OrderInfo;
