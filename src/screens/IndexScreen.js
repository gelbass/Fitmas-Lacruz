import { Image, View } from "react-native";

import Buttons from "../components/Buttons";
import React from "react";
import Styles from "./styles";

const IndexScreen = ({ onGoTologgin }) => {
  return (
    <View>
      <View style={{ height: "5%", backgroundColor: "#561D74" }} />
      <Image source={require("../assets/img/index.jpg")} />
      <View style={styles.containerButton}>
        <Buttons
          funtion={() => onGoTologgin(true)}
          newStyles={{ fontFamily: "RobotoMedium" }}
          title={"REGÍSTRATE"}
        />
        <Buttons
          funtion={()=> onGoTologgin(true)}
          newStyles={{ fontFamily: "RobotoMedium" }}
          title={"INICIAR SESIÓN"}
        />
      </View>
    </View>
  );
};

export default IndexScreen;

const styles = Styles;
