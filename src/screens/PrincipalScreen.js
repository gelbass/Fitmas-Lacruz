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
    navigation.navigate("Profesionales", {
      nombre: item.nombre
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
        <Image source={item.img} style={styles.img} />
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
      {/* <TouchableOpacity item={item} onSelected={handlerSelectCategoria}> */}
      <Buttons
        title={item.titulo}
        newStyles={{
          width: "90%",
          alignItems: "center",
          backgroundColor: COLORS.nativo,
          color: COLORS.blanco
        }}
        // funtion={() => handlerSelectCategoria(item)}
      />
      {/* </TouchableOpacity> */}
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
