import { Image, View } from "react-native";
import React, { useState } from "react";

import BottonTabNavigator from "./BottonTabNavigator";
import Buttons from "../components/Buttons";
import { COLORS } from "../constants/colors";
import LogginNavigator from "./LogginNavigator"
import { NavigationContainer } from "@react-navigation/native";
import Styles from "../screens/styles";
import { useSelector } from "react-redux";

export default () => {
  const userId = useSelector(state => state.autenticacion.userId)
  const error = useSelector(state => state.autenticacion.error)
  console.log(userId);
  console.log(error);
  return (
    <NavigationContainer>
    {userId ? <BottonTabNavigator/> : <LogginNavigator />}
  </NavigationContainer>
  );
};
