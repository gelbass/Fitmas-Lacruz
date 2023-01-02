import * as ImagePicker from "expo-image-picker";

import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import Buttons from "../components/Buttons";
import { COLORS } from "../constants/colors";
import Cards from "../components/Cards";
import Header from "../components/Header";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

// import * as Permissions from "expo-permissions"

const PerfilScreen = ({ onLoggout }) => {
  const [pickedURI, setPickedURI] = useState();

  const verificarPermisos = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permisos Insuficientes",
        "Necesitas dar permisos a la camara para utilizar desde la aplicación",
        [{ text: "OK " }]
      );
      return false;
    }
    return true;
  };

  const handlerImagen = async () => {
    const isCamaraOK = await verificarPermisos();
    if (!isCamaraOK) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8
    });

    setPickedURI(image.uri);
  };

  return (
    <View style={{}}>
      <Header text={"FitMas"} />
      <ScrollView>
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={handlerImagen}
        >
          {!pickedURI
            ? <Image
                source={require("../assets/img/user.png")}
                style={styles.img}
              />
            : <Image source={{ uri: pickedURI }} style={styles.img} />}
        </TouchableOpacity>
        <Cards newStyles={{ padding: 15, height: 428 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyItems: "flex-start",
              paddingBottom: 10
            }}
          >
            <Ionicons
              name="star"
              size={30}
              style={{ ...styles.icono, paddingRight: 10 }}
            />
            <Text
              style={{
                ...styles.text,
                fontSize: 16,
                lineHeight: 18.75,
                color: COLORS.gris
              }}
            >
              En algun lado del planeta
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyItems: "flex-start",
              paddingBottom: 10
            }}
          >
            <Ionicons
              name="add-circle-sharp"
              size={30}
              style={{ ...styles.icono, paddingRight: 10 }}
            />
            <Text
              style={{
                ...styles.text,
                fontSize: 24,
                lineHeight: 28.13,
                fontWeight: "400"
              }}
            >
              Bio
            </Text>
          </View>
          <Text
            style={{
              ...styles.text,
              fontSize: 14,
              lineHeight: 16.41,
              fontWeight: "400"
            }}
          >
            Hola, creo que es necesario cuidado integral para vivir en plenitud.
            Es por eso que busco graduar mi nivel de preparación física.
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyItems: "flex-start",
              paddingBottom: 10
            }}
          >
            <Ionicons
              name="star"
              size={30}
              style={{ ...styles.icono, paddingRight: 10 }}
            />
            <Text
              style={{
                ...styles.text,
                fontSize: 24,
                lineHeight: 28.13,
                fontWeight: "400"
              }}
            >
              Mis Objetivos
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
            Definición. Aumento de masa muscular.
          </Text>
        </Cards>
        <View>
          <Buttons
            funtion={() => onLoggout(true)}
            newStyles={{ fontFamily: "RobotoMedium" }}
            title={"CERRAR SESIÓN"}
          />
          <Cards>
            <Text>Mis próximas citas</Text>
          </Cards>
        </View>
      </ScrollView>
    </View>
  );
};

export default PerfilScreen;

const styles = StyleSheet.create({
  icono: {
    color: COLORS.primario
  },
  img: {
    margin: 16,
    width: 152,
    height: 152,
    borderRadius: 100,
    borderWidth: 1
  }
});
