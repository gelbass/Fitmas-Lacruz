import { FlatList, Image, Text, View } from "react-native";
import { connect, useDispatch, useSelector } from "react-redux";

import Buttons from "../components/Buttons";
import { COLORS } from "../constants/colors";
import Cards from "../components/Cards";
import Styles from "./styles";
import { selectedCategoria } from "../store/actions/categoria.action";

const PrincipalScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const categorias = useSelector(state => state.categorias.categorias);

  const handlerSelectCategoria = item => {
    dispatch(selectedCategoria(item.id));
    navigation.navigate("ListadoProfesionales", {
      nombre: item.nombre
    });
  };

  const renderCategorias = ({ item }) =>
    <Cards
      newStyles={{
        padding: 15,
        margin: 18,
        height: "auto"
      }}
      item={item}
      onSelected={() => {}}
    >
      <View style={{ flexDirection: "row", paddingTop: 10 }}>
        <Image source={item.img} style={styles.img} />
        <View>
          <Text
            style={{
              ...styles.text,
              fontFamily: "RobotoMedium",
              textAlign: "left",
              fontSize: 20,
              paddingBottom: 1
            }}
          >
            {item.nombre}
          </Text>
          <Text
            style={{
              ...styles.text,
              fontFamily: "RobotoMedium",
              textAlign: "left",
              fontSize: 12,
              paddingTop: 0
            }}
          >
            {item.slogan}
          </Text>
        </View>
      </View>
      <Image source={item.imgPrincipal} style={styles.imgGrande} />
      <Text
        style={{
          ...styles.text,
          fontFamily: "RobotoMedium",
          textAlign: "center",
          color: COLORS.primario
        }}
      >
        {item.detalle}
      </Text>
      <Buttons
        title={`${item.titulo.toUpperCase()}`}
        newStyles={{
          width: "90%",
          alignItems: "center",
          borderRadius: 18,
        }}
        colorBase={COLORS.nativo}
        newStylesText={{color:COLORS.blanco}}
        funtion={() => handlerSelectCategoria(item)}
      />
    </Cards>;

  return (
    <View style={{ justifyContent: "center" }}>
      <FlatList
        data={categorias}
        keyExtractor={item => item.id}
        renderItem={renderCategorias}
      />
    </View>
  );
};

export default connect()(PrincipalScreen);

const styles = Styles;
