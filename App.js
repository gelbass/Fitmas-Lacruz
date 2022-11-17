import {
  Button,
  FlatList,
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import Header from "./components/Header/Header";
import Inputs from "./components/Inputs/Inputs";
import ScreenIndex from "./components/Screens/ScreenIndex";
import ScreenLoggin from "./components/Screens/ScreenLoggin";
import ScreenPrincipal from "./components/Screens/ScreenPrincipal";
import colors from "./constants/colors";
import { useFonts } from "expo-font";
import { useState } from "react";

export default function App() {
  const [isLogueado, setIsLogueado] = useState(false);

  const [loaded] = useFonts({
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoBlack: require("./assets/fonts/Roboto-Black.ttf")
  });

  const handleLoggin = loggin => {
    setIsLogueado(loggin);
  };

  if (!loaded) {
    return null;
  }
  let content = (
    <ScreenIndex
      onLoggin={handleLoggin}
      newStyles={{ fontFamily: "RobotoMedium" }}
    />
  );

  isLogueado &&
    (content = 
      // <ScreenPrincipal
      //   onLoggin={handleLoggin}
      //   fonts={{ RobotoMedium: "RobotoMedium", RobotoBlack: "RobotoBlack" }}
      // />
      (<ScreenLoggin fonts={{ RobotoMedium: "RobotoMedium", RobotoBlack: "RobotoBlack" }} />)
    );

  return (
    <View style={{ flex: 1, backgroundColor: colors.backgroundColor }}>
      {content}
    </View>
  );
}
