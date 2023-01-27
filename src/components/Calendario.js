import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "../constants/colors";
import { Calendar } from "react-native-calendars";
import React from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

const Calendario = ({ onSelectDay }) => {
  const profesional = useSelector(state => state.profesionales.selected);
  const [selected, setSelected] = useState();
  const listadoDias = () => {
    let dia = {};
    profesional.disponibilidad.map(
      horario =>
        (dia[horario.fecha] = {
          customStyles: {
            container: {
              backgroundColor: COLORS.nativo,
              borderRadius: 25
            },
            text: {
              color: COLORS.blanco
            }
          }
        })
    );
    const marked = useMemo(
      () => ({
        [selected]: {
          customStyles: {
            container: {
              backgroundColor: COLORS.seleccionado,
              borderRadius: 25
            },
            text: {
              color: COLORS.blanco
            }
          }
        }
      }),
      [selected]
    );
    return {...dia,...marked};
  };
  return (
    <View style={{}}>
      <Calendar
        style={styles.calendario}
        minDate={"2022-11-31"}
        maxDate={"2025-12-31"}
        onDayPress={day => {
          onSelectDay(day.dateString), setSelected(day.dateString);
        }}
        markingType="custom"
        markedDates={listadoDias()}
        theme={{
          arrowColor: COLORS.primario
        }}
      />
    </View>
  );
};

export default Calendario;

const styles = StyleSheet.create({
  calendario: {
    width: "auto",
    height: 360,
    margin: 10,
    borderRadius: 12,
    elevation: 2
  }
});
// onDayPress={day => {
//   console.log("selected day", day);
// }}
// // Handler which gets executed on day long press. Default = undefined
// onDayLongPress={() => {}}
// // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
// monthFormat={"yyyy MM"}
// // Handler which gets executed when visible month changes in calendar. Default = undefined
// onMonthChange={month => {
//   console.log("month changed", month);
// }}
// disableMonthChange={true}
// // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
// firstDay={1}
// // Handler which gets executed when press arrow icon left. It receive a callback can go back month
// onPressArrowLeft={subtractMonth => subtractMonth()}
// // Handler which gets executed when press arrow icon right. It receive a callback can go next month
// onPressArrowRight={addMonth => addMonth()}
// // Disable left arrow. Default = false
// // disableArrowLeft={true}
// // Disable right arrow. Default = false
// // disableArrowRight={true}
// // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
// disableAllTouchEventsForDisabledDays={true}
// // Replace default month and year title with custom one. the function receive a date as parameter
// renderHeader={date => {
//   date.toISOString()
// }}
// // Enable the option to swipe between months. Default = false
// enableSwipeMonths={true}
// markedDates={{
//   "2022-12-10": {
//     selected: true,
//     marked: true,
//     selectedColor: COLORS.nativo
//   },
//   "2023-01-01": { marked: true, selectedColor: COLORS.nativo }
// }}
// theme={{
//   backgroundColor: "#ffffff",
//   calendarBackground: "#ffffff",
//   textSectionTitleColor: "#b6c1cd",
//   textSectionTitleDisabledColor: "#d9e1e8",
//   selectedDayBackgroundColor: "#00adf5",
//   selectedDayTextColor: "#ffffff",
//   todayTextColor: "#00adf5",
//   dayTextColor: "#2d4150",
//   textDisabledColor: "#d9e1e8",
//   dotColor: COLORS.nativo,
//   selectedDotColor: "#ffffff",
//   arrowColor: "orange",
//   disabledArrowColor: "#d9e1e8",
//   monthTextColor: "blue",
//   indicatorColor: "blue",
//   textDayFontFamily: "monospace",
//   textMonthFontFamily: "monospace",
//   textDayHeaderFontFamily: "monospace",
//   textDayFontWeight: "300",
//   textMonthFontWeight: "bold",
//   textDayHeaderFontWeight: "300",
//   textDayFontSize: 16,
//   textMonthFontSize: 16,
//   textDayHeaderFontSize: 16
// }}
