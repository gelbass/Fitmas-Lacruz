import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";

import { CATEGORIAS } from "../data/categorias";
import { COLORS } from "../constants/colors";
import Cards from "../components/Cards";
import React from "react";
import { useSelector } from "react-redux";

const Favoritos = () => {
  const profesionales = useSelector(state => state.profesionales.profesionales);

  const handlerprofesionales = ({ item }) =>
    <Cards newStyle={{ width: "50%", flexDirection: "column" }}>
      <Image source={item.foto} style={styles.img} />
      <Text>
        {CATEGORIAS.map(categoria => {
          if (categoria.id == item.id) categoria.nombre;
        })}
      </Text>
      <Text style={styles.nombre}>
        {item.nombre}
      </Text>
      <Text style={styles.ubicacion}>
        {item.ubicacion}
      </Text>
    </Cards>;
  return (
    <ScrollView>
      <Text style={styles.titulo}>Mis Favoritos</Text>
      <FlatList
        data={profesionales}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={handlerprofesionales}
      />
    </ScrollView>
  );
};

export default Favoritos;

const styles = StyleSheet.create({
  titulo: {
    padding: 15,
    fontSize: 36,
    fontWeight: "900",
    lineHeight: 42.19
  },
  img: {
    margin: 10,
    width: 152,
    height: 152,
    borderRadius: 100,
    borderWidth: 1
  },
  nombre:{
    fontSize:14,
    fontWeight:"700",
    padding:10,
    lineHeight: 16.41,
  },
  ubicacion:{
    fontSize:14,
    lineHeight:16.41,
    fontWeight:"400",
    padding:10,
    color:COLORS.gris,
    textAlign:"right"
  }
});
