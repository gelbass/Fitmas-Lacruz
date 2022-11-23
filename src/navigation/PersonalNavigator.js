import EntrenadoresScreen from "../screens/EntrenadoresScreen";
import Header from "../components/Header";
import { NavigationContainer } from "@react-navigation/native";
import NutricionistasScreen from "../screens/NutricionistasScreen";
import PrincipalScreen from "../screens/PrincipalScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default (PersonalNavigator = ({loggOut}) => {
  return (
    <NavigationContainer>
      <Header text={"FitMas"} />
      <Stack.Navigator>
        <Stack.Screen name="Home">{(props)=> <PrincipalScreen {...props} onLoggout={loggOut}/>}</Stack.Screen>
        <Stack.Screen name="Nutricionistas" component={NutricionistasScreen} />
        <Stack.Screen name="Entrenadores" component={EntrenadoresScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
});
