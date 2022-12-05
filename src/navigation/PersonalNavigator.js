import AgendarProfesional from "../screens/AgendarProfesional";
import { COLORS } from "../constants/colors";
import DetalleProfesional from "../screens/DetalleProfesional";
import PrincipalScreen from "../screens/PrincipalScreen";
import ProfesionalesScreen from "../screens/ProfesionalesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default (PersonalNavigator = ({ onLoggout }) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primario },
        headerTintColor: COLORS.blanco,
        headerTitleStyle: { fontFamily: "RobotoBlack" },
        headerTitleAlign: "center"
      }}
    >
      <Stack.Screen name="Home" options={{ title: "FitMas" }}>
        {props => <PrincipalScreen {...props} onLoggout={onLoggout} />}
      </Stack.Screen>
      <Stack.Screen
        name="Profesionales"
        component={ProfesionalesScreen}
        options={({ route }) => ({ title: route.params.nombre })}
      />
      <Stack.Screen name="Agenda" component={AgendarProfesional}/>
      <Stack.Screen name="Detalle" component={DetalleProfesional}/>
    </Stack.Navigator>
  );
});
