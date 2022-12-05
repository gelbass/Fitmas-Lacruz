import { FlatList, Image, StyleSheet, Text, View } from "react-native";

import Buttons from "../components/Buttons";
import Cards from "../components/Cards";
import { PROFESIONALES } from "../data/profesionales";
import React from "react";

const ProfesionalesScreen = ({ navigation, route }) => {
  const profesionales = PROFESIONALES.filter(
    profesional => profesional.categoria == route.params.profesionalID
  );
  const handlerProfesionales = item => {
    navigation.navigate("Detalle", {
      profesionalID: item.id,
      nombre: item.nombre,
      descripcion: item.descripcion,
      disponibilidad: item.disponibilidad,
      formacion: item.formacion,
      ubicacion: item.ubicacion
    });
  };
  const renderProfesionales = ({ item }) =>
    <Cards
      newStyles={{ flexDirection: "row", paddingTop: 10, height: 150 }}
      item={item}
      onSelected={handlerProfesionales}
    >
      <View style={{ padding: 15, justifyContent: "center" }}>
        <Image
          source={item.img}
          style={styles.img}
        />
        <Text style={{ padding: 10 }}>
          {item.calificacion}
        </Text>
      </View>
      <View style={styles.titulo}>
        <Text>
          {item.nombre}
        </Text>
        <Text style={{width:"25%"}}>
          {item.descripcion}
        </Text>
      </View>
    </Cards>;

  return (
    <View>
      <FlatList
        data={profesionales}
        keyExtractor={item => item.id}
        renderItem={renderProfesionales}
      />
      {/* <Buttons
        funtion={() => navigation.navigate("Home")}
        newStyles={{ fontFamily: "RobotoMedium" }}
        title={"Ir al Inicio"}
      /> */}
    </View>
  );
};

export default ProfesionalesScreen;

const styles = StyleSheet.create({
  titulo: { fontFamily: "RobotoBlack", padding: 15 },
  img: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#000"
  }
});
