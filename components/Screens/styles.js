import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor
  },
  text: {
    padding: 10,
    textAlign:"center",
    justifyContent: "center",
    color: colors.font,
  },

  containerButton: {
    position: "absolute",
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    width: "100%",
    height: "100%",
    paddingBottom: "20%"
  },
  button: {
    width: 160,
    height: 40,
    margin: 20,
    justifyContent:"center",
    fontWeight: 500,
    borderRadius: 10,
    backgroundColor: colors.buttonColor,
  },
  buttonText: {
    padding: 8,
    color: colors.primario,
    textAlign:"center",
    // fontWeight:500,
  },
});

export default Styles;
