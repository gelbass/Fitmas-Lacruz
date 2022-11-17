import { StyleSheet, Text, View } from "react-native";

import Buttons from "../Buttons";
import Header from "../Header/Header";
import Inputs from "../Inputs/Inputs";
import React from "react";
import Styles from "./styles";

const ScreenLoggin = ({ text, fonts }) => {
  return (
    <View>
      <Header newStyles={fonts} text={"Inicio de Sesión"} />
      <Text style={{fontFamily: fonts.RobotoBlack, margin:40, fontSize:30}}>FitMas</Text>
      <Inputs fonts={fonts} text={"Usuario"} />
      <Inputs fonts={fonts} text={"Contraseña"} />
      <View
        style={{
          // position: "absolute",
          // zIndex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignContent: "flex-end",
          width: "100%",
          height: "100%",
          paddingBottom: "20%"
        }}
      >
        <Buttons
          newStyles={{ fontFamily: fonts.RobotoMedium }}
          text={"SALIR"}
        />
        <Buttons
          newStyles={{ fontFamily: fonts.RobotoMedium }}
          text={"INICIAR SESIÓN"}
        />
      </View>
    </View>
  );
};

export default ScreenLoggin;

const styles = Styles;
