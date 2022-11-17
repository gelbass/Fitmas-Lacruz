import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const StylesModal = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    borderColor: colors.azul,
    borderEndWidth: 4,
    borderStartWidth: 4,
    borderTopWidth: 4,
    borderBottomWidth: 4,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    borderTopLeftRadius: 10,
    borderTopEndRadius: 10
  },
  texto:{
    fontWeight: 'bold',
    fontSize: 15,
    alignItems: 'center'
  },
  contanerButton:{
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: colors.buttonColor2,
    margin:10,
    padding:10,
    borderRadius: 10,
  }
});
export default StylesModal;
