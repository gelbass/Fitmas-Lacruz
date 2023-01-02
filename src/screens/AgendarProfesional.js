import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
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
  const [newAenda, setNewAgenda]  = useState({});
  const [fecha, setFecha] = useState(getCurrentDate);
  const [hora, setHora] = useState("8:30");
  console.log(profesional);
  const handlerAddAgenda = (profesional) =>
    dispatch(
      addAgenda(
        setNewAgenda({
          profesionalID: profesional,
          fecha: fecha,
          hora: hora
        })
      )
    );
  console.log(newAenda);
  return (
    <ScrollView>
      <Calendario onSelectDay={setFecha} />
      <Text>
        <Horarios
          horarios={profesional.disponibilidad}
          onSelectedHour={setHora}
        />
      </Text>
      <View>
        {profesional.disponibilidad.forEach(
          element =>
            element.fecha == fecha
              ? element.horarios.map(cupo =>
                  <Horarios horarios={cupo} onSelectedHour={setHora} />
                )
              : <Text>NO HAY CUPO</Text>
        )}
        <View style={{ flexDirection: "row" }}>
          <Buttons
            title={"CANCELAR"}
            newStyles={{
              backgroundColor: COLORS.buttonColor,
              color: COLORS.primario,
              fontFamily: "RobotoMedium",
              fontSize: 14,
              fontWeight: "500"
            }}
          />
          <Buttons
            title={"ACEPTAR"}
            newStyles={{
              backgroundColor: COLORS.nativo,
              color: COLORS.buttonColor,
              fontFamily: "RobotoMedium",
              fontSize: 14,
              fontWeight: "500"
            }}
            funtion={handlerAddAgenda}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AgendarProfesional;

const styles = StyleSheet.create({ calendario: { height: 360, width: 372 } });
