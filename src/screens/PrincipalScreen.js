import { FlatList, Image, Text, View } from "react-native";

import Buttons from "../components/Buttons";
import { CATEGORIAS } from "../data/categorias";
import Cards from "../components/Cards";
import Styles from "./styles";

const PrincipalScreen = ({ navigation, onLoggout, user }) => {
  const handlerSelectCategoria = (item) => {
    navigation.navigate("Profesionales", {
      profesionalID: item.id,
      nombre: item.nombre,
    });
  };
  const renderCategorias = ({ item }) =>
    <Cards
      newStyles={{
        paddingLeft: 10,
        height: 250
      }}
      item={item}
      onSelected={handlerSelectCategoria}
    >
      <View style={{ flexDirection: "row", paddingTop: 10 }}>
        <Image
          source={item.img}
          style={styles.img}
        />
        <View>
          <Text
            style={{
              ...styles.text,
              fontFamily: "RobotoMedium",
              textAlign: "left"
            }}
          >
            {item.nombre}
          </Text>
          <Text
            style={{
              ...styles.text,
              fontFamily: "RobotoMedium",
              textAlign: "left"
            }}
          >
            {item.slogan}
          </Text>
        </View>
      </View>
      <Text
        style={{
          ...styles.text,
          fontFamily: "RobotoMedium",
          textAlign: "center"
        }}
      >
        {item.detalle}
      </Text>
    </Cards>;

  return (
    <View style={{ justifyContent: "center" }}>
      <Text
        style={{
          ...styles.text,
          fontFamily: "RobotoBlack",
          fontSize: 20
        }}
      >
        Bienvenido {user}
      </Text>
      <Text
        style={{
          ...styles.text,
          fontFamily: "RobotoBlack",
          fontSize: 20
        }}
      >
        Selecciona un servicio
      </Text>
      <FlatList
        data={CATEGORIAS}
        keyExtractor={item => item.id}
        renderItem={renderCategorias}
      />
      <Buttons
        funtion={() => onLoggout(true)}
        newStyles={{ fontFamily: "RobotoMedium" }}
        title={"CERRAR SESIÓN"}
      />
    </View>
  );
};

export default PrincipalScreen;

const styles = Styles;
