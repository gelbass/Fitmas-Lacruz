import IndexScreen from "./src/screens/IndexScreen";
import LogginScreen from "./src/screens/LogginScreen";
import PersonalNavigator from "./src/navigation/PersonalNavigator";
import { View } from "react-native";
import colors from "./src/constants/colors";
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
      <PersonalNavigator loggOut={handleIsLoggin} />
      // <PrincipalScreen
      //   onExit={handleGoTologgin}
      //   onLoggout={handleIsLoggin}
      //   user={user}
      // />
    ));

  return (
    <View style={{ flex: 1, backgroundColor: colors.backgroundColor }}>
      {content}
    </View>
  );
}
