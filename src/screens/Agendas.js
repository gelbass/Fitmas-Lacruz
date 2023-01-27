import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Buttons from "../components/Buttons";
import { COLORS } from "../constants/colors";
import Cards from "../components/Cards";
import { deleteAgenda } from "../store/actions/agenda.actions";
import { getAgendas } from "../store/actions/agendasConfirmadas.actions";

const Agendas = () => {
  const dispatch = useDispatch();
  const agenda = useSelector(
    state => state.agendasConfirmadas.agendasConfirmadas
  );
  useEffect(() => {
    dispatch(getAgendas());
  }, []);

  const handlerDeleteAgendaItem = (item)=> {
    console.log(item.id);
    dispatch(deleteAgenda(item.id)) && Alert.alert("Registro eliminado")
    
  }

  const handlerAgendas = ({ item }) =>
    <Cards newStyles={styles.cards}>
      <Text style={styles.text}>
        {item[0].nombreProfesional}
      </Text>
      <Text style={styles.text}>
        Fecha: {item[0].fecha} Hora: {item[0].hora}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <Buttons
          funtion={()=>handlerDeleteAgendaItem(item)}
          colorBase={COLORS.buttonColor}
          title={"ELIMINAR"}
        />
      </View>
    </Cards>;

  return (
    <View style={styles.container}>
      {agenda.length == 0
        ? <Text style={styles.text}>No ha realizado ninguna agenda</Text>
        : <FlatList
            data={agenda}
            keyExtractor={item => item.id}
            renderItem={handlerAgendas}
          />}
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
  },
  cards: {
    padding: 10,
    justifyContent: "center"
  }
});
