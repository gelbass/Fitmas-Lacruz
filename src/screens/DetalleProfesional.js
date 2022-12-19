import { StyleSheet, Text, View } from "react-native";

import { useEffect } from "react";
import { useSelector } from "react-redux";

const DetalleProfesional = () => {
  const profesional = useSelector(state => state.profesionales.selected);
  // useEffect(() => {console.log(profesional);}, []);

  return (
    <View>
      <Text>
        {profesional.nombre}
      </Text>
    </View>
  );
};

export default DetalleProfesional;

const styles = StyleSheet.create({});
