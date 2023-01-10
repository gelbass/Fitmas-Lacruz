import { Image, View } from "react-native";
import React, { useState } from "react";

import Buttons from "../components/Buttons";
import { COLORS } from "../constants/colors";
import Styles from "../screens/styles";

const IndexScreen = ({ navigation }) => {
  const handlerLoggin = () => {
    navigation.navigate("loggin");
  };
  const handlerRegister = () => {
    navigation.navigate("register");
  };

  return (
    <View>
      <Image source={require("../assets/img/index.jpg")} />
      <View style={styles.containerButton}>
        <Buttons
          funtion={handlerRegister}
          colorBase={COLORS.buttonColor}
          title={"REGÍSTRATE"}
        />
        <Buttons
          funtion={handlerLoggin}
          colorBase={COLORS.buttonColor}
          title={"INICIAR SESIÓN"}
        />
      </View>
    </View>
  );
};

export default IndexScreen;

const styles = Styles;
