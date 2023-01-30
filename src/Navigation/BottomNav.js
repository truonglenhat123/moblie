import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNav from "../Navigation/StackNav";
import ProfileScreen from "../Screens/ProfileScreen";
import CartScreen from "../Screens/CartScreen";
import { Center, Pressable } from "native-base";
import { Colors } from "../Color";
import {
  Entypo,
  AntDesign,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import HomeScreen from "../Screens/HomeScreen";

const Tab = createBottomTabNavigator();
const CustomTab = ({ children, onPress }) => (
  <Pressable
    onPress={onPress}
    h={70}
    w={70}
    rounded="full"
    bg={Colors.greenss}
    top={-30}
    shadow={2}
  >
    {children}
  </Pressable>
);

const BottomNav = () => {
  return (
    <Tab.Navigator
      backBehavior="Main"
      initialRouteName="Main"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { ...styles.tab },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Main"
        component={StackNav}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <Entypo name="home" size={24} color={Colors.greenss} />
              ) : (
                <AntDesign
                  name="home"
                  size={24}
                  color={Colors.backgroundDark}
                />
              )}
            </Center>
          ),
        }}
      />
       <Tab.Screen
        name="Shop"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <Entypo name="shop" size={24} color={Colors.greenss} />
              ) : (
                <FontAwesome5
                  name="shopping-bag"
                  size={24}
                  color={Colors.backgroundDark}
                />
              )}
            </Center>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarButton: (props) => <CustomTab {...props} />,
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <FontAwesome5
                  name="shopping-cart"
                  size={24}
                  color={Colors.white}
                />
              ) : (
                <FontAwesome5
                  name="shopping-cart"
                  size={24}
                  color={Colors.white}
                />
              )}
            </Center>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <FontAwesome5 name="user" size={24} color={Colors.greenss} />
              ) : (
                <FontAwesome5
                  name="user"
                  size={24}
                  color={Colors.backgroundDark}
                />
              )}
            </Center>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <AntDesign name="setting" size={24} color={Colors.greenss} />
              ) : (
                <AntDesign
                  name="setting"
                  size={24}
                  color={Colors.backgroundDark}
                />
              )}
            </Center>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tab: {
    elevation: 0,
    backgroundColor: Colors.white,
    height: 60,
    // paddingTop
  },
});
export default BottomNav;
