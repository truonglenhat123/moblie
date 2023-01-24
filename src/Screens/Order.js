import { View, Text } from "react-native";
import React from "react";
import { Box, Heading, InfoIcon, ScrollView } from "native-base";
import { Colors } from "../Color";
import OrderInfo from "../Components/OrderInfo";
import { FontAwesome, FontAwesome5, Entypo } from "@expo/vector-icons";
import OrderItems from "../Components/OrderItems";
import PlaceOrderModel from "../Components/PlaceOrderModel";
const Order = () => {
  return (
    <Box bg={Colors.subScreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title="Khách hàng"
            subTitle="Admin"
            text="admin@gmail.com"
            icon={<FontAwesome name="user" size={30} color={Colors.white} />}
          />
          <OrderInfo
            title="Thoong tin dat ahng"
            subTitle="van chuyen:truong dz"
            text="Che do thanh toan: paypal"
            icon={
              <FontAwesome5
                name="shipping-fast"
                size={30}
                color={Colors.white}
              />
            }
          />
          <OrderInfo
            title="Thoong tin van chuyen"
            subTitle="Địa chỉ:"
            text="sai gon , cali"
            icon={<Entypo name="location" size={30} color={Colors.white} />}
          />
        </ScrollView>
      </Box>
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={20} isTruncated my={4}>Sanr Pham</Heading>
        <OrderItems/>
        {/* tong cong  */}
        <PlaceOrderModel/>
      </Box>
    </Box>
  );
};

export default Order;
