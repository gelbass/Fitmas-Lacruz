import * as Location from "expo-location";

import { Alert, Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import Buttons from "../components/Buttons";
import Header from "../components/Header";
import Ionicons from "@expo/vector-icons/Ionicons";
import Mapa from "../components/Mapa";

const UbicacionScreen = () => {
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

    if(!isLocation)return;

    const location = await Location.getCurrentPositionAsync({timeout:5000}); 
    setPickLocation({lat: location.coords.latitude,
    lng: location.coords.longitude})
  };

  return (
    <View>
      <Header text={"UBICACION"} />
      <Buttons
          newStyles={styles.button}
          title={<Ionicons name="search" size={20} />}
          funtion={handlerGetLocation}/>
      <View>
        {pickLocation
          ? <Mapa></Mapa>
          : <Text>sin ubcacion</Text>}
          
      </View>
    </View>
  );
};

export default UbicacionScreen;

const styles = StyleSheet.create({});
