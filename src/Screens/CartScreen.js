import React from "react";
import { Box, Button, Text, View,Center } from "native-base";
import { Colors } from "../Color";
import { SafeAreaView, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { useState } from "react";

const CartScreen = ({ route, navigation }) => {
  const [checkEmpty, setCheckEmpty] = useState(true);
  const goBackHome = () => {
    navigation.goBack(null);
  };
  // const CartCard = ({ item }) => {
  //   return (
  //     <View style={style.cartCard}>
  //       <Image source={item.productImage} style={{ height: 80, width: 80 }} />
  //       <View
  //         style={{ height: 100, marginLeft: 10, paddingVertical: 20, flex: 1 }}
  //       >
  //         <Text style={{ fontWeight: "bold", fontSize: 16 }}>
  //           {item.productName}
  //         </Text>
  //         <Text
  //           style={{
  //             fontWeight: "bold",
  //             fontSize: 13,
  //             color: Colors.backgroundDark,
  //           }}
  //         >
  //           {item.category}
  //         </Text>
  //         <Text
  //           style={{
  //             fontWeight: "bold",
  //             fontSize: 15,
  //             color: Colors.backgroundDark,
  //           }}
  //         >
  //           ${item.productPrice}
  //         </Text>
  //       </View>
  //       <View style={{ marginRight: 20, alignItems: "center" }}>
  //         <Text style={{ fontWeight: "bold", fontSize: 18 }}>3</Text>
  //         <View style={style.actionButton}>
  //           <Ionicons name="remove" size={25} color={Colors.white} />
  //           <Ionicons name="add" size={25} color={Colors.white} />
  //         </View>
  //       </View>
  //     </View>
  //   );
  // };

  return (
    <SafeAreaView style={{ backgroundColor: Colors.white, flex: 1 }}>
      <View style={style.header}>
        {/* <MaterialIcons name="arrow-back-ios" size={28} onPress={() => goBack()}/> */}
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Giỏ Hàng</Text>
      </View>
      {/* <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={products.slice(0, 3)}
        renderItem={({ item }) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal:20,marginTop:20}}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 15,
              }}
            >
              <Text fontSize={18} fontWeight='bold'>Tổng giá</Text>
              <Text fontSize={18} fontWeight='bold'>$111111</Text>
            </View>
            <View style={{marginHorizontal:50}}>
              <Button h={10} borderRadius={30} backgroundColor={Colors.cam}>Thanh toán</Button>
            </View>
          </View>
        )}
      /> */}
      {checkEmpty && (
        <Box flex={1} px={4}>
          <Center h="90%">
            <Center w={200} h={200} bg={Colors.white} rounded="full">
              <MaterialIcons
                name="shopping-cart"
                size={64}
                color={Colors.green}
              />
            </Center>
            <Text color={Colors.black} bold mt={5} fontSize={20}>
              Giỏ hàng của bạn đang rỗng!
            </Text>
          </Center>
          <Button
            bg={Colors.black}
            color={Colors.white}
            onPress={goBackHome}
            borderRadius={20}
          >
            Bắt đầu mua hàng
          </Button>
        </Box>
      )}
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
});

export default CartScreen;
