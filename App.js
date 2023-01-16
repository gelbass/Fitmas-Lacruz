import BottonTabNavigator from "./src/navigation/BottonTabNavigator";
import { COLORS } from "./src/constants/colors";
// import IndexScreen from "./src/screens/IndexScreen";
import LogginNavigator from "./src/navigation/LogginNavigator";
import LogginScreen from "./src/screens/LogginScreen";
import MainNavigator from "./src/navigation"
import { Provider } from "react-redux";
import RegisterScreen from "./src/screens/RegistrarScreen";
import { View } from "react-native";
import store from "./src/store";
import { useFonts } from "expo-font";
import { useState } from "react";

export default function App() {
  const [goTologgin, setGoTologgin] = useState(false);
  const [goToRegister, setGoToRegister] = useState(false);
  const [isLogueado, setIsLogueado] = useState(true);

  const [loaded] = useFonts({
    RobotoMedium: require("./src/assets/fonts/Roboto-Medium.ttf"),
    RobotoBlack: require("./src/assets/fonts/Roboto-Black.ttf")
  });

  const handleGoTologgin = loggin => {
    setGoTologgin(loggin);
  };
  const handleIsLoggin = loggin => {
    setIsLogueado(loggin);
  };
  const handleGoToRegister = loggin => {
    setGoToRegister(loggin);
  };
  const handleRegister = loggin => {
    setGoToRegister(loggin);
  };

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
