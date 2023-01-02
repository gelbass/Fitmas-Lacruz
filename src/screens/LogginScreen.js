import { StyleSheet, Text, View } from "react-native";

import Buttons from "../components/Buttons";
import Header from "../components/Header";
import Inputs from "../components/Inputs";
import React from "react";
import Styles from "./styles";

const LogginScreen = ({ onIsLoggin,onExit, user, pass,fonts }) => {
  return (
    <View>
      <Header newStyles={fonts} text={"Inicio de Sesión"} />
      <Text style={{ fontFamily: "RobotoBlack", margin: 40, fontSize: 30 }}>
        FitMas
      </Text>
      <Inputs fonts={fonts} text={"Usuario"} value={user}/>
      <Inputs fonts={fonts} text={"Contraseña"} value={pass} password={true}/>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignContent: "flex-end",
          width: "100%",
          height: "100%",
          paddingBottom: "20%"
        }}
      >
        <Buttons
          funtion={()=>onExit(false)}
          newStyles={{ fontFamily: "RobotoMedium",justifyContent: "center", alignSelf:"auto" }}
          title={"SALIR"}
        />
        <Buttons
          funtion={()=>onIsLoggin(false)}
          newStyles={{ fontFamily: "RobotoMedium",justifyContent: "center", alignSelf:"auto" }}
          title={"INICIAR SESIÓN"}
        />
      </View>
    </View>
  );
};

export default LogginScreen;
