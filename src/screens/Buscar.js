import * as Location from "expo-location";

import { Alert, Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import Buttons from "../components/Buttons";
import Header from "../components/Header";
import Inputs from "../components/Inputs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Mapa from "../components/Mapa";

const Buscar = () => {
  const [pickLocation, setPickLocation] = useState();

  const verificarPermisos = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permisos insuficientes",
        "Necesita dar permisos de localizacion para utilizar esta aplicacion",
        [{ text: "OK" }]
      );
      return false;
    }
    return true;
  };

  const handlerGetLocation = async () => {
    const isLocation = await verificarPermisos();

    if (!isLocation) return;

    const location = await Location.getCurrentPositionAsync({ timeout: 5000 });
    setPickLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude
    });
    console.log(location);
  };

  return (
    <View>
      <Header text={"Buscar"} />
        <Text style={styles.titulo}>Mi ubicación</Text>
      <View style={styles.container}>
        <Inputs newStyles={styles.input} text={"Buscar un profesional"} />
        <Buttons
          newStyles={styles.button}
          title={<Ionicons name="search" size={20} />}
          funtion={handlerGetLocation}
        />
      </View>
      <View>
        <Mapa location={pickLocation} newstyle={styles.mapa}>
          <Text>NO CARGO EL MAPA</Text>
        </Mapa>
      </View>
    </View>
  );
};

export default Buscar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: "space-between"
  },
  input: { width: 290 },
  button: {
    width: 40,
    margin: 0
  },
  titulo: {
    padding: 15,
    fontFamily: "RobotoBlack",
    fontSize: 36,
    fontWeight: "900",
    lineHeight: 42.19
  },
  mapa: { height: 350, margin: 15, padding: 20 }
});
