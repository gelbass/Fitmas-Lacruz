import { StyleSheet, View } from "react-native";

import Agendas from "../screens/Agendas";
import Buscar from "../screens/Buscar";
import { COLORS } from "../constants/colors";
import Favoritos from "../screens/Favoritos";
import Header from "../components/Header";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import PerfilScreen from "../screens/PerfilScreen";
import PersonalNavigator from "./PersonalNavigator";
import UbicacionScreen from "../screens/UbicacionScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottonTabs = createBottomTabNavigator();

export default (BottonTabNavigator = ({ loggOut }) => {
  return (
    // <NavigationContainer>
    <BottonTabs.Navigator
      initialRouteName="PrincipalScreen"
      screenOptions={{
        // headerShown: false,
        headerStyle: styles.header,
        headerTitleStyle: { color: COLORS.blanco, fontFamily: "RobotoBlack" },
        headerTitleAlign: "center",
        tabBarActiveTintColor: COLORS.secundario,
        tabBarInactiveTintColor: COLORS.nativo,
        tabBarStyle: styles.tabBar
      }}
      backBehavior={"firstRoute"}
    >
      <BottonTabs.Screen
        name="Profesionales"
        options={{
          headerShown: false,
          tabBarIcon: ({ focus }) =>
            <View>
              <Ionicons name="barbell-sharp" size={30} style={styles.icono} />
            </View>
        }}
      >
        {props => <PersonalNavigator {...props} onLoggout={loggOut} />}
      </BottonTabs.Screen>
      <BottonTabs.Screen
        name="Buscar"
        component={Buscar}
        options={{
          tabBarIcon: ({ focus }) =>
            <Ionicons name="search" size={30} style={styles.icono} />
        }}
      />
      <BottonTabs.Screen
        name="Favoritos"
        component={Favoritos}
        options={{
          tabBarIcon: ({ focus }) =>
            <Ionicons name="star" size={30} style={styles.icono} />
        }}
      />
      <BottonTabs.Screen
        name="Agendas"
        component={Agendas}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ focus }) =>
            <Ionicons name="calendar" size={30} style={styles.icono} />
        }}
      />
      <BottonTabs.Screen
        name="Perfil"
        options={{
          tabBarIcon: ({ focus }) =>
            <Ionicons name="person" size={30} style={styles.icono} />
        }}
      >
        {props => <PerfilScreen {...props} onLoggout={loggOut} />}
      </BottonTabs.Screen>
      {/* <BottonTabs.Screen
          name="UBICACION"
          component={UbicacionScreen}
          options={{
            tabBarIcon: ({ focus }) =>
              <Ionicons name="calendar" size={30} style={styles.icono} />
          }}
        /> */}
    </BottonTabs.Navigator>
    // </NavigationContainer>
  );
});

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: COLORS.primario,
    height: "10%",
    paddingBottom: 10
  },
  icono: { color: COLORS.nativo },
  header: {
    backgroundColor: COLORS.primario
  }
});
