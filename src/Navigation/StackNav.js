import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import ProductDetailScreen from "../Screens/ProductDetailScreen";
import Order from "../Screens/Order";
import HomeBoard from "../Screens/HomeBoard";
import SettingScreen from "../Screens/SettingScreen";



const Stack = createNativeStackNavigator();
const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeBoard"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="HomeBoard" component={HomeBoard} />
      <Stack.Screen name="Single" component={ProductDetailScreen} />
      <Stack.Screen name="Checkout" component={Order} />
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  );
};

export default StackNav;
