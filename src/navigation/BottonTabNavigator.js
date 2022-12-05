import { StyleSheet, Text, View } from "react-native";

import Buscar from "../screens/Buscar";
import { COLORS } from "../constants/colors";
import Favoritos from "../screens/Favoritos";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import Perfil from "../screens/Perfil";
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
          // tabBarShowLabel: false,
          tabBarStyles: styles.tabBar
        }}
      >
        <BottonTabs.Screen
          name="Profesionales"
          options={{
            tabBarIcon: ({ focus }) =>
              <View>
                <Ionicons name="logo-capacitor" size={30}  />
              </View>
          }}
        >
          {props => <PersonalNavigator {...props} onLoggout={loggOut} />}
        </BottonTabs.Screen>
        <BottonTabs.Screen name="Buscar" component={Buscar} options={{
            tabBarIcon: ({ focus }) =>
                <Ionicons name="search" size={30}  />
          }}/>
        <BottonTabs.Screen name="Favoritos" component={Favoritos} options={{
            tabBarIcon: ({ focus }) =>
                <Ionicons name="star" size={30}  />
          }}/>
        <BottonTabs.Screen name="Perfil" component={Perfil} options={{
            tabBarIcon: ({ focus }) =>
                <Ionicons name="person" size={30}  />
          }}/>
      </BottonTabs.Navigator>
    </NavigationContainer>
    // <View>
    //   <Text>HOLA</Text>
    // </View>
  );
});

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: COLORS.primario,
    color: COLORS.nativo,
    height: 200
  }
});
