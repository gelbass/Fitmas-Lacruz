import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const StylesCards = StyleSheet.create({
  container: {
    margin: 10,
    height: 113,
    backgroundColor: colors.blanco,
    color: colors.negro,
    border: 1,
    borderRadius: 10,
    shadowColor: colors.nativo,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 60,
    shadowOpacity: 1,
  }
});

export default StylesCards