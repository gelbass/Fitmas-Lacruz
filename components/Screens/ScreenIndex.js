import { Image, Pressable, Text, View } from "react-native";

import Buttons from "../Buttons";
import React from "react";
import Styles from "./styles";

const ScreenIndex = ({ onGoTologgin, newStyles,fonts }) => {
  return (
    <View>
      <View style={{ height: "5%", backgroundColor: "#561D74" }} />
      <Image source={require("../../assets/img/index.jpg")} />
      <View style={styles.containerButton}>
        <Buttons
          funtion={() => onGoTologgin(true)}
          newStyles={{ fontFamily: fonts.RobotoMedium }}
          title={"REGÍSTRATE"}
        />
        <Buttons
          funtion={()=> onGoTologgin(true)}
          newStyles={{ fontFamily: fonts.RobotoMedium }}
          title={"INICIAR SESIÓN"}
        />
      </View>
    </View>
  );
};

export default ScreenIndex;

const styles = Styles;
