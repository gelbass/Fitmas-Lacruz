import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const StylesHeader = StyleSheet.create({
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
  }
})
export default StylesHeader;