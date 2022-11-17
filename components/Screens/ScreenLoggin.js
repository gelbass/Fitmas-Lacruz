import { StyleSheet, Text, View } from "react-native";

import Buttons from "../Buttons";
import Header from "../Header/Header";
import Inputs from "../Inputs/Inputs";
import React from "react";
import Styles from "./styles";

const ScreenLoggin = ({ onIsLoggin,onExit, user, fonts }) => {
  return (
    <View>
      <Header newStyles={fonts} text={"Inicio de Sesión"} />
      <Text style={{ fontFamily: fonts.RobotoBlack, margin: 40, fontSize: 30 }}>
        FitMas
      </Text>
      <Inputs fonts={fonts} text={"Usuario"} user={user}/>
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
          funtion={()=>onExit(false)}
          newStyles={{ fontFamily: fonts.RobotoMedium }}
          title={"SALIR"}
        />
        <Buttons
          funtion={()=>onIsLoggin(false)}
          newStyles={{ fontFamily: fonts.RobotoMedium }}
          title={"INICIAR SESIÓN"}
        />
      </View>
    </View>
  );
};

export default ScreenLoggin;

const styles = Styles;
