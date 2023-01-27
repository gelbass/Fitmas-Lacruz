import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cards from "../components/Cards";
import { getAgendas } from "../store/actions/agendasConfirmadas.actions";

const Agendas = () => {
  const dispatch = useDispatch();
  const agenda = useSelector(
    state => state.agendasConfirmadas.agendasConfirmadas
  );
  useEffect(() => {
    dispatch(getAgendas());
  }, []);

  console.log("LISTADO AGENDA");
  console.log(agenda);
  const handlerAgendas = ({ item }) => (
    <Cards newStyles={{padding:20}}>
      <Text>
        Profesional:
        {item[0].nombreProfesional}
      </Text>
      <Text>
        Fecha: {item[0].fecha} Hora: {item[0].hora} 
      </Text>
    </Cards>
  );

  console.log(agenda.length == 0);
  return (
    <View style={styles.container}>
      {agenda.length == 0
        ? <Text style={styles.text}>No ha realizado ninguna agenda</Text>
        : <FlatList
            data={agenda}
            keyExtractor={item => item[0].id}
            renderItem={handlerAgendas}
          />
      // : console.log("Log")
      }
    </View>
  );
};

export default Agendas;

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  text: {
    padding: 10,
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center"
  }
});
