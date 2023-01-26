import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import ProductDetailScreen from "../Screens/ProductDetailScreen";
import Order from "../Screens/Order";



const Stack = createNativeStackNavigator();
const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Single" component={ProductDetailScreen} />
      <Stack.Screen name="Checkout" component={Order} />
    </Stack.Navigator>
  );
};

export default StackNav;
