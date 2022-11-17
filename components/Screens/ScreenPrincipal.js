import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import Buttons from "../Buttons";
import Cards from "../Cards/Cards";
import Header from "../Header/Header";
import React from "react";
import Styles from "./styles";

const ScreenPrincipal = ({onLoggout, user, fonts }) => {
  return (
    <View>
      <Header newStyles={fonts} text={"FitMas"} />
      <View style={{ height: "100%" }}>
        <Text
          style={{
            ...styles.text,
            fontFamily: fonts.RobotoBlack,
            fontSize: 20
          }}
        >
          Bienvenido {user}
        </Text>
        <Text
          style={{
            ...styles.text,
            fontFamily: fonts.RobotoBlack,
            fontSize: 20
          }}
        >
          Selecciona un servicio
        </Text>
        <Cards
          newStyles={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 10
          }}
        >
          <Image
            source={require("../../assets/img/nutricionista.jpg")}
            style={{
              width: 90,
              height: 90,
              borderRadius: 50,
              borderWidth: 1,
              borderColor: "#000"
            }}
          />
          <Text
            style={{
              ...styles.text,
              fontFamily: fonts.RobotoMedium,
              textAlign: "left"
            }}
          >
            Nutricionista
          </Text>
        </Cards>
        <Cards
          newStyles={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 10
          }}
        >
          <Image
            source={require("../../assets/img/entrenador.png")}
            style={{
              width: 90,
              height: 90,
              borderRadius: 50,
              borderWidth: 1,
              borderColor: "#000"
            }}
          />
          <Text
            style={{
              ...styles.text,
              fontFamily: fonts.RobotoMedium,
              textAlign: "left"
            }}
          >
            Entrendor
          </Text>
        </Cards>
        <View
          style={{
            ...styles.containerButton,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Buttons
            funtion={() => onLoggout(true)}
            newStyles={{ fontFamily: fonts.RobotoMedium }}
            title={"CERRAR SESIÓN"}
          />
        </View>
      </View>
    </View>
  );
};

export default ScreenPrincipal;

const styles = Styles;
