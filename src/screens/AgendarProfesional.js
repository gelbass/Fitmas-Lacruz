import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Buttons from "../components/Buttons";
import { COLORS } from "../constants/colors";
import Calendario from "../components/Calendario";
import Horarios from "../components/Horarios";
import { addAgenda } from "../store/actions/agenda.actions";

const AgendarProfesional = () => {
  const dispatch = useDispatch();
  const profesional = useSelector(state => state.profesionales.selected);
  const agenda = useSelector(state => state.agenda.addAgenda);

  const getCurrentDate = () => {
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    return year + "-" + month + "-" + date;
  };
  const [newAenda, setNewAgenda] = useState({});
  const [fecha, setFecha] = useState(getCurrentDate);
  const [hora, setHora] = useState("");
  console.log(profesional);
  const handlerAddAgenda = () =>
    dispatch(
      addAgenda(
        setNewAgenda({
          profesional: profesional,
          fecha: fecha,
          hora: hora
        })
      )
    );
  console.log(newAenda);
  console.log(agenda);
  return (
    <ScrollView>
      <Calendario onSelectDay={setFecha} />
      <Text style={styles.titulo}>Horarios disponibles</Text>
      <View style={styles.horarios}>
        {profesional.disponibilidad.map(
          item =>
            item.fecha === fecha
              ? <Horarios horarios={item.horarios} onSelectedHour={setHora} />
              : <Text></Text>
        )}
        {console.log(hora)}
        </View>
        <View style={{ flexDirection: "row" }}>
          <Buttons title={"CANCELAR"} colorBase={COLORS.buttonColor} />
          <Buttons
            title={"ACEPTAR"}
            colorBase={COLORS.nativo}
            newStylesText={{ color: COLORS.buttonColor }}
            funtion={handlerAddAgenda}
          />
        </View>
    </ScrollView>
  );
};

export default AgendarProfesional;

const styles = StyleSheet.create({
  calendario: { height: 360, width: 372 },
  titulo: {
    fontFamily: "RobotoMedium",
    fontSize: 14,
    fontWeight: "600",
    margin: 10
  },
  horarios: {
    flexDirection: "row",
    justifyContent: "center"
  }
});
