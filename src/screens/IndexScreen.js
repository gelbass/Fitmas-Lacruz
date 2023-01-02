import { Image, View } from "react-native";

import Buttons from "../components/Buttons";
import { COLORS } from "../constants/colors";
import React from "react";
import Styles from "./styles";

const IndexScreen = ({ onGoTologgin, onGoToRegister , navigation }) => {
  
  const goToLoggin =() =>{
    navigation.navigate("loggin", {
      // nombre: item.nombre
    });
  }
  return (
    <View>
      <View style={{ height: "5%", backgroundColor: COLORS.primario }} />
      <Image source={require("../assets/img/index.jpg")} />
      <View style={styles.containerButton}>
        <Buttons
          funtion={() => onGoToRegister(true)}
          newStyles={{ fontFamily: "RobotoMedium", justifyContent: "center", alignSelf:"auto", }}
          title={"REGÍSTRATE"}
        />
        <Buttons
          funtion={onGoTologgin}
          newStyles={{ fontFamily: "RobotoMedium", justifyContent: "center", alignSelf:"auto", }}
          title={"INICIAR SESIÓN"}
        />
      </View>
    </View>
  );
};

export default IndexScreen;

const styles = Styles;
