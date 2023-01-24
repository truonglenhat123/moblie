import { View, Text, useWindowDimensions, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Profile from "./ProfileComponents";
import Order from "./Order";
import { Colors } from "../../Color";
import ProfileComponents from "./ProfileComponents";

const renderScence = SceneMap({
  first: ProfileComponents,
  second: Order,
});
const Tab = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "first",
      title: "PROFILE",
    },
    {
      key: "second",
      title: "ORDER",
    },
  ]);
  const renderTabsBar = (props) => {
    <TabBar
      {...props}
      tabStyle={styles.tabStyle}
      indicatorContainerStyle={{ backgroundColor: Colors.black }}
      activeColor={Colors.green}
      inactiveColor={Colors.white}
      renderLabel={({ route, color }) => (
        <Text style={{ color, ...styles.text }}>{route.title}</Text>
      )}
    />;
  };
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScence}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabsBar}
    />
  );
};
const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: "black",
  },
  text: {
    fontSize: 13,
    fontWeight: "bold",
  },
});

export default Tab;
