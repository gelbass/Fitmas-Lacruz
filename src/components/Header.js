import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "../constants/colors";

const Header = ({ newStyles, text }) => {
  return (
    <View style={{ ...style.header }}>
      <Text style={{ ...style.titulo, ...newStyles }}>
        {text}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    width: "100%",
    height: 68,
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: COLORS.primario
  },
  titulo: {
    fontSize: 20,
    fontStyle: "normal",
    color: COLORS.blanco,
    fontFamily: "RobotoBlack"
  }
});
export default Header;
