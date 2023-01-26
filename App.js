import { NativeBaseProvider, StatusBar } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/Screens/Login";
import Register from "./src/Screens/Register";
import Order from "./src/Screens/Order";
import BottomNav from "./src/Navigation/BottomNav";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Order" component={Order} />
          <Stack.Screen name="Bottom" component={BottomNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
