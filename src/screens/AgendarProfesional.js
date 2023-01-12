import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Buttons from "../components/Buttons";
import { COLORS } from "../constants/colors";
import Calendario from "../components/Calendario";
import Horarios from "../components/Horarios";
import { addAgenda } from "../store/actions/agenda.actions";

// OBTENER FECHA ACTUAL
const getCurrentDate = () => {
  let date = new Date().getDate();
  let month = new Date().getMonth() + 1;
  let year = new Date().getFullYear();
  return year + "-" + month + "-" + date;
};

const AgendarProfesional = () => {
  const dispatch = useDispatch();
  const profesional = useSelector(state => state.profesionales.selected);
  const agenda = useSelector(state => state.agenda);
  const [newAgenda, setNewAgenda] = useState({});
  const [fecha, setFecha] = useState(getCurrentDate);
  const [hora, setHora] = useState("");

  const handlerAddAgenda = () => {
    dispatch(
      addAgenda({
        id: profesional.id,
        nombre: "PEPE",
        nombreProfesional: profesional.nombre,
        categoria: profesional.categoria,
        fecha: fecha,
        hora: hora
      })
      );
    };
    console.log(agenda);
  return (
    <ScrollView>
      <Calendario onSelectDay={setFecha} />
      <Text style={styles.titulo}>Horarios disponibles</Text>
      <View style={styles.horarios}>
        {profesional.disponibilidad.map(
          cupo =>
            cupo.fecha === fecha
              ? <Horarios
                  key={cupo.fecha}
                  horarios={cupo.horarios}
                  onSelectedHour={setHora}
                />
              : <Text />
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
