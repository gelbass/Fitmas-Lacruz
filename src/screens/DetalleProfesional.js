import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import Buttons from "../components/Buttons";
import { COLORS } from "../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSelector } from "react-redux";

const DetalleProfesional = ({ navigation }) => {
  const profesional = useSelector(state => state.profesionales.selected);

  const handlerCaledario = item => {
    navigation.navigate("Agenda", {
      nombre: item.nombre
    });
  };
  // CREAR EL MAPA PARA ESTUDIOS
  const estudios = () => {};
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerProfesional}>
          <Image source={profesional.foto} style={styles.img} />
          <Text style={styles.titulo}>
            {profesional.nombre}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>Esta a 1km</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.titulo}>Bio</Text>
        </View>
        <Text style={styles.text}>
          {profesional.bio}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyItems: "flex-start"
          }}
        >
          <Ionicons name="school" size={30} style={styles.icono} />
          <Text style={styles.titulo}>Formación profesional</Text>
        </View>
        {}
      </View>
      <View style={styles.container}>
        {profesional.estudios.map(estudio =>
          <View key={estudio.titulo}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyItems: "flex-start"
              }}
            >
              <Ionicons name="star" size={30} style={styles.icono} />
              <Text
                style={{
                  ...styles.text,
                  fontSize: 11.8481,
                  lineHeight: 14,
                  letterSpacing: 0.0025,
                  fontWeight: "700"
                }}
              >
                {estudio.titulo}
              </Text>
            </View>
            <Text
              style={{
                ...styles.text,
                fontSize: 11.8481,
                lineHeight: 13.88,
                letterSpacing: 0.0025,
                marginLeft: "8.5%",
                paddingTop: 0
              }}
            >
              {estudio.universidad}
            </Text>
          </View>
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Buttons
          title={"VER CALENDARIO"}
          newStyles={{
            width: "50%"
          }}
          colorBase={COLORS.buttonColor}
          newStylesText={{
            fontSize: 14,
            fontWeight: "500"
          }}
          icono={<Ionicons name="calendar" size={20} />}
          funtion={handlerCaledario}
        />
      </View>
    </ScrollView>
  );
};

export default DetalleProfesional;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    alignItems: "stretch"
  },
  containerProfesional: {
    padding: 20,
    alignItems: "center"
  },
  img: {
    margin: 16,
    width: 152,
    height: 152,
    borderRadius: 100,
    borderWidth: 1
  },
  titulo: {
    padding: 10,
    textAlign: "center",
    justifyContent: "center",
    color: COLORS.font,
    fontFamily: "RobotoMedium",
    fontSize: 20,
    fontWeight: "400"
  },
  text: {
    padding: 10,
    // textAlign: "center",
    justifyContent: "center",
    fontFamily: "RobotoMedium",
    color: COLORS.font,
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.0025,
    fontWeight: "400"
  },

  icono: {
    color: COLORS.primario
  }
});
