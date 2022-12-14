import { StyleSheet, View } from "react-native";

import Buscar from "../screens/Buscar";
import { COLORS } from "../constants/colors";
import Favoritos from "../screens/Favoritos";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import PerfilScreen from "../screens/PerfilScreen";
import PersonalNavigator from "./PersonalNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottonTabs = createBottomTabNavigator();

export default (BottonTabNavigator = ({ loggOut }) => {
  return (
    <NavigationContainer>
      <BottonTabs.Navigator
        initialRouteName="PrincipalScreen"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.secundario,
          tabBarInactiveTintColor: COLORS.nativo,
          tabBarStyle: styles.tabBar
        }}
      >
        <BottonTabs.Screen
          name="Profesionales"
          options={{
            tabBarIcon: ({ focus }) =>
              <View>
                <Ionicons
                  name="logo-capacitor"
                  size={30}
                  style={styles.icono}
                />
              </View>
          }}
        >
          {props => <PersonalNavigator {...props} onLoggout={loggOut} />}
        </BottonTabs.Screen>
        <BottonTabs.Screen
          name="Buscar"
          component={Buscar}
          options={{
            tabBarIcon: ({ focus }) => <Ionicons name="search" size={30} style={styles.icono}/>
          }}
        />
        <BottonTabs.Screen
          name="Favoritos"
          component={Favoritos}
          options={{
            tabBarIcon: ({ focus }) => <Ionicons name="star" size={30} style={styles.icono}/>
          }}
        />
        <BottonTabs.Screen
          name="Perfil"
          options={{
            tabBarIcon: ({ focus }) => <Ionicons name="person" size={30} style={styles.icono}/>
          }}
        >
          {props => <PerfilScreen {...props} onLoggout={loggOut} />}
        </BottonTabs.Screen>
      </BottonTabs.Navigator>
    </NavigationContainer>
  );
});

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: COLORS.primario,
    height: "10%",
    paddingBottom: 10
  },
  icono: {color:COLORS.nativo}
});
