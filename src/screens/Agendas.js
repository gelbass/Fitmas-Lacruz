import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cards from "../components/Cards";
import { getAgendas } from "../store/actions/agenda.actions";

const Agendas = () => {
  const dispatch = useDispatch();
  const agenda = useSelector(state => state.agenda.agendas).map(item=>item.items);

  useEffect(() => {
    dispatch(getAgendas());
  }, [])
  console.log(agenda);
  const handlerAgendas = ({ item }) =>
    <Cards>
      <Text>
        Profesional:
        {item.map(i =>i.nombreProfesional)}
      </Text>
      <Text>
        Fecha: {item.map(i =>i.fecha)} Hora: {item.map(i =>i.hora)}
      </Text>
    </Cards>
  return (
    <View>
      {agenda < 0
        ? <Text>No ha realizado ninguna agenda</Text>
        : <FlatList
            data={agenda}
            keyExtractor={item => 1}
            renderItem={handlerAgendas}
          />
      // : console.log("Log")
      }
    </View>
  );
};

export default Agendas;

const styles = StyleSheet.create({});
