import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

import Buttons from "../components/Buttons";
import { COLORS } from "../constants/colors";
import { statusAgenda } from "../store/actions/agenda.actions";
import { useDispatch } from "react-redux";

const AgendaRealizadaScreen = ({ navigation }) => {

  const goToHome = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Image source={require("../assets/img/imgConfirmar.jpg")} />
      <View style={styles.containerItems}>
        <View style={styles.containerButton}>
          <Text style={styles.text}>
            ¡Felicidades, tu cita con tu nutricionista ha sido confirmada!
          </Text>
          <Buttons
            title={"VER MÁS PROFESIONALES"}
            colorBase={COLORS.buttonColor}
            funtion={goToHome}
          />
        </View>
      </View>
    </View>
  );
};

export default AgendaRealizadaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor
  },
  containerItems: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    height: "80%"
  },
  containerButton: {
    flexDirection: "column",
    alignItems: "center"
  },
  text: {
    width: "55%",
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 23.44,
    fontFamily: "RobotoBlack",
    textAlign: "center",
    padding:20
  }
});
