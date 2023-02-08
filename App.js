import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/Screens/Login";
import Register from "./src/Screens/Register";
import Order from "./src/Screens/Order";
import BottomNav from "./src/Navigation/BottomNav";
import { createStackNavigator } from "@react-navigation/stack";
import HomeBoard from "./src/Screens/HomeBoard";
import CartScreen from "./src/Screens/CartScreen";
import SettingScreen from "./src/Screens/SettingScreen";
import ProductDetailScreen from "./src/Screens/ProductDetailScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import { store } from "./store";

const Stack = createStackNavigator();
export default function App() {
  // const { userInfo } = useContext(AuthContext);
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Provider store={store}>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
           <Stack.Screen name="Login" component={Login} />
           <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="HomeBoard" component={BottomNav} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Single" component={ProductDetailScreen} />
          <Stack.Screen name="Checkout" component={Order} />
          <Stack.Screen name="Setting" component={SettingScreen} />
        </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
