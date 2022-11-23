import { StyleSheet, Text, View } from "react-native";

import colors from "../constants/colors";

const Header = ({newStyles, text}) =>{
  return(
    <View style={{...style.header}}>
      <Text style={{...style.titulo, ...newStyles}}>{text}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  header:{
    width: "100%",
    height: 68,
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: colors.primario,
  },
  titulo: {
    fontSize: 20,
    fontStyle:"normal",
    color: colors.blanco,
    fontFamily: "RobotoBlack"
  }
})
export default Header;