import { Image, Text, TouchableOpacity, View } from "react-native";

import Buttons from "../components/Buttons";
import Cards from "../components/Cards/Cards";
import React from "react";
import Styles from "./styles";

const PrincipalScreen = ({ navigation, onLoggout, user }) => {
  return (
    <View>
      <View style={{ height: "100%" }}>
        <Text
          style={{
            ...styles.text,
            fontFamily: "RobotoBlack",
            fontSize: 20
          }}
        >
          Bienvenido {user}
        </Text>
        <Text
          style={{
            ...styles.text,
            fontFamily: "RobotoBlack",
            fontSize: 20
          }}
        >
          Selecciona un servicio
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Nutricionistas")}>
          <Cards
            newStyles={{
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 10
            }}
          >
            <Image
              source={require("../assets/img/nutricionista.jpg")}
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
                fontFamily: "RobotoMedium",
                textAlign: "left"
              }}
            >
              Nutricionista
            </Text>
          </Cards>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Entrenadores")}>
          <Cards
            newStyles={{
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 10
            }}
          >
            <Image
              source={require("../assets/img/entrenador.png")}
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
                fontFamily: "RobotoMedium",
                textAlign: "left"
              }}
            >
              Entrendor
            </Text>
          </Cards>
        </TouchableOpacity>
        <Buttons
          funtion={() => onLoggout(true)}
          newStyles={{ fontFamily: "RobotoMedium" }}
          title={"CERRAR SESIÓN"}
        />
      </View>
    </View>
  );
};

export default PrincipalScreen;

const styles = Styles;
