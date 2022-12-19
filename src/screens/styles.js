import { COLORS } from "../constants/colors";
import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor
  },
  text: {
    padding: 10,
    textAlign: "center",
    justifyContent: "center",
    color: COLORS.font
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
  img: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 1
  },
  imgGrande: {
    marginTop: 10,
    width: "100%",
    height: 140,
    borderRadius: 10,
  }
});

export default Styles;
