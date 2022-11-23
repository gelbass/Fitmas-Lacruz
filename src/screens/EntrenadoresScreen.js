import { StyleSheet, View } from "react-native";

import Buttons from "../components/Buttons";
import React from "react";

const EntrenadoresScreen = ({navigation}) => {
  return (
    <View>
      <Buttons
        funtion={() => navigation.navigate("Home")}
        newStyles={{ fontFamily: "RobotoMedium" }}
        title={"Ir al Inicio"}
      />
    </View>
  );
};

export default EntrenadoresScreen;

const styles = StyleSheet.create({});
