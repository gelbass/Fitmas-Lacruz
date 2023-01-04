import { StyleSheet, Text, View } from "react-native";

import Buttons from "../components/Buttons";
import { COLORS } from "../constants/colors";
import Header from "../components/Header";
import Inputs from "../components/Inputs";
import React from "react";
import Styles from "./styles";

const RegisterScreen = ({ onIsLoggin,onExit, user, pass,fonts }) => {
  return (
    <View>
      <Header newStyles={fonts} text={"Registrarme"} />
      <Text style={{ fontFamily: "RobotoBlack", margin: 40, fontSize: 30 }}>
        FitMas
      </Text>
      <Inputs fonts={fonts} text={"Email"} value={user} keyboardType="email-address"/>
      <Inputs fonts={fonts} text={"Contraseña"} value={pass} password={true}/>
      <Inputs fonts={fonts} text={"Nuevamente Contraseña"} value={pass} password={true}/>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          paddingBottom: "20%"
        }}
      >
        <Buttons
          funtion={()=>onExit(false)}
          colorBase={COLORS.buttonColor}
          title={"SALIR"}
        />
        <Buttons
          funtion={()=>onIsLoggin(false)}
          colorBase={COLORS.buttonColor}
          title={"REGISTRAR"}
        />
      </View>
    </View>
  );
};

export default RegisterScreen;
