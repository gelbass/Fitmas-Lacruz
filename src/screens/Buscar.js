import * as Location from "expo-location";

import { Alert, Button, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useState } from "react";

import Buttons from "../components/Buttons";
import {COLORS} from '../constants/colors';
import Inputs from "../components/Inputs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Mapa from "../components/Mapa";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      inputValues: updatedValues,
      inputValidities: updatedValidities,
      formIsValid: updatedFormIsValid
    };
  }
  return state;
};

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
    console.log("tengo permisos para mapa");
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
    console.log("Location");
    console.log(location);
  };
  const onInputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {},
    []
  );
  return (
    <View>
      <Text style={styles.titulo}>Mi ubicación</Text>
      <View style={styles.container}>
        <Inputs
          id={"direccion"}
          label={"Dirección"}
          placeholder={"Buscar un profesional"}
          onInputChange={onInputChangeHandler}
          newStyle={styles.input}
        />
        <Buttons
          newStyles={styles.button}
          title={<Ionicons name="search" size={20} />}
          colorBase={COLORS.buttonColor}
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
    alignItems:"center",
    justifyContent:"space-between",
    alignContent: "space-between"
  },
  input: { width: "160%",},
  button: {
    width: 40,
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
