import { NativeBaseProvider, Box } from "native-base";
import ProductDetailScreen from "./src/Screens/ProductDetailScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Order from "./src/Screens/Order";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NativeBaseProvider>
      <Order />
    </NativeBaseProvider>
  );
}
