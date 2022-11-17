import ScreenIndex from "./components/Screens/ScreenIndex";
import ScreenLoggin from "./components/Screens/ScreenLoggin";
import ScreenPrincipal from "./components/Screens/ScreenPrincipal";
import { View } from "react-native";
import colors from "./constants/colors";
import { useFonts } from "expo-font";
import { useState } from "react";

export default function App() {
  const [goTologgin, setGoTologgin] = useState(false);
  const [isLogueado, setIsLogueado] = useState(true);
  const [user, setUser] = useState("");

  const [loaded] = useFonts({
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoBlack: require("./assets/fonts/Roboto-Black.ttf")
  });

  const handleGoTologgin = loggin => {
    setGoTologgin(loggin);
  };
  const handleIsLoggin = loggin => {
    setIsLogueado(loggin);
  };

  if (!loaded) {
    return null;
  }
  let content = (
    <ScreenIndex
      onGoTologgin={handleGoTologgin}
      fonts={{ RobotoMedium: "RobotoMedium", RobotoBlack: "RobotoBlack" }}
    />
  );

  goTologgin &&
    (content = (
      <ScreenLoggin
        onExit={handleGoTologgin}
        onIsLoggin={handleIsLoggin}
        user={setUser}
        fonts={{ RobotoMedium: "RobotoMedium", RobotoBlack: "RobotoBlack" }}
      />
    ));

  isLogueado ||
    (content = (
      <ScreenPrincipal
        onExit={handleGoTologgin}
        onLoggout={handleIsLoggin}
        user={user}
        fonts={{ RobotoMedium: "RobotoMedium", RobotoBlack: "RobotoBlack" }}
      />
    ));

  return (
    <View style={{ flex: 1, backgroundColor: colors.backgroundColor }}>
      {content}
    </View>
  );
}
