import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Buttons from "../components/Buttons";
import Cards from '../components/Cards';
import React from "react";

const Agendas = () => {
  const agenda = useSelector(state => state.agenda.agendas);

  const handlerAgendas = ({ item }) =>
    <Cards>
      <Text>
        Profesional:
        {item.nombreProfesional}
      </Text>
      <Text>
        Fecha: {item.fecha} Hora: {item.hora}
      </Text>
    </Cards>;
  return (
    <View>
      <FlatList
        data={agenda}
        keyExtractor={item => item.id}
        renderItem={handlerAgendas}
      />
      <Buttons title={"CONFIRMAR"} />
    </View>
  );
};

export default Agendas;

const styles = StyleSheet.create({});
