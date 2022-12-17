import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  filterProfesional,
  selectedProfesionales
} from "../store/actions/profesionales.action";

import Buttons from "../components/Buttons";
import Cards from "../components/Cards";

const ProfesionalesScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const categoria = useSelector(state => state.categorias.selected);
  const profesionales = useSelector(
    state => state.profesionales.filterProfesionales
  );
  useEffect(() => {
    // console.log(filterProfesional(categoria.id));
    console.log(dispatch(filterProfesional(categoria.id)));
    dispatch(filterProfesional(categoria.id));
  }, []);

  const handlerProfesionales = item => {
    console.log("handlerProfesionales");
    console.log(item);
    dispatch(selectedProfesionales(item.id));
    navigation.navigate("Detalle", {
      nombre: item.nombre
      // descripcion: item.descripcion,
      // disponibilidad: item.disponibilidad,
      // formacion: item.formacion,
      // ubicacion: item.ubicacion
    });
  };
  const renderProfesionales = ({ item }) =>
    <Cards
      newStyles={{ flexDirection: "row", paddingTop: 10, height: 150 }}
      item={item}
      onSelected={handlerProfesionales}
    >
      <View style={{ padding: 15, justifyContent: "center" }}>
        <Image source={item.foto} style={styles.img} />
        <Text style={{ padding: 10 }}>
          {item.calificacion}
        </Text>
      </View>
      <View style={styles.titulo}>
        <Text>
          {item.nombre}
        </Text>
        <Text style={{ width: "25%" }}>
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

export default connect()(ProfesionalesScreen);

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
