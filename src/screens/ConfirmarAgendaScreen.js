import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Buttons from "../components/Buttons";
import { COLORS } from "../constants/colors";
import Cards from "../components/Cards";
import React from "react";
import { confirmarAgenda } from "../store/actions/agenda.actions";

const ConfirmarAgendaScreen = () => {
  const dispatch = useDispatch();
  const agenda = useSelector(state => state.agenda.agendas);
  console.log(agenda);
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

  const handleConfirmarAgenda = () => {
    dispatch(confirmarAgenda(agenda));
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

const styles = StyleSheet.create({});
