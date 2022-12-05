import BottonTabNavigator from "./src/navigation/BottonTabNavigator";
import { COLORS } from "./src/constants/colors";
import IndexScreen from "./src/screens/IndexScreen";
import LogginScreen from "./src/screens/LogginScreen";
import PersonalNavigator from "./src/navigation/PersonalNavigator";
import { View } from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";

export default function App() {
  const [goTologgin, setGoTologgin] = useState(false);
  const [isLogueado, setIsLogueado] = useState(true);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

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

  if (!loaded) {
    return null;
  }
  let content = (
    // <BottonTabNavigator />
    <IndexScreen
      onGoTologgin={handleGoTologgin}
    />
  );

  goTologgin &&
    (content = (
      <LogginScreen
        onExit={handleGoTologgin}
        onIsLoggin={handleIsLoggin}
        user={setUser}
        pass={setPass}
      />
    ));

  isLogueado ||
    (content = (
      <BottonTabNavigator loggOut={handleIsLoggin}/>
      // <PersonalNavigator loggOut={handleIsLoggin} />
      // <PrincipalScreen
      //   onExit={handleGoTologgin}
      //   onLoggout={handleIsLoggin}
      //   user={user}
      // />
    ));

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
      {content}
    </View>
  );
}
