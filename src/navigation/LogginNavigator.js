import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "../constants/colors";
import IndexScreen from "../screens/IndexScreen";
import LogginScreen from "../screens/LogginScreen";
import React from "react";
import RegisterScreen from "../screens/RegistrarScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default (LogginNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="index"
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primario },
        headerTintColor: COLORS.blanco,
        headerTitleStyle: { fontFamily: "RobotoBlack" },
        headerTitleAlign: "center"
      }}
    >
      <Stack.Screen
        name="index"
        component={IndexScreen}
        options={{ headerShown: false, }}
      />
      <Stack.Screen
        name="loggin"
        component={LogginScreen}
        options={{ title: "Inicio de Sesión" }}
      />
      <Stack.Screen
        name="register"
        component={RegisterScreen}
        options={{ title: "Registráme" }}
      />
    </Stack.Navigator>
  );
});
