import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Buttons from "../components/Buttons";
import { COLORS } from "../constants/colors";
import Cards from "../components/Cards";
import React from "react";
import { confirmarAgenda } from "../store/actions/agenda.actions";

const ConfirmarAgendaScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const agenda = useSelector(state => state.agenda.agendas);
  const handlerAgendas = ({ item }) =>
    <Cards newStyles={styles.cards}>
      <Text style={styles.text}>
        {item.nombreProfesional}
      </Text>
      <Text style={styles.text}>
        Fecha: {item.fecha} Hora: {item.hora}
      </Text>
    </Cards>;

  const handleConfirmarAgenda = () => {
    dispatch(confirmarAgenda(agenda)) && navigation.navigate("AgendaExitosa");
  };
  return (
    <View>
      <FlatList
        data={agenda}
        keyExtractor={item => item.id}
        renderItem={handlerAgendas}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <Buttons
          title={"CONFIRMAR"}
          colorBase={COLORS.buttonColor}
          funtion={handleConfirmarAgenda}
        />
      </View>
    </View>
  );
};

export default ConfirmarAgendaScreen;

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
    padding: 10
  }
});
