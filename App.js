import { NativeBaseProvider, Box } from "native-base";
import ProductDetailScreen from "./src/Screens/ProductDetailScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <ProductDetailScreen />
    </NativeBaseProvider>
  );
}
