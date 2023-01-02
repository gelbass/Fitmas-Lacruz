import { Pressable, StyleSheet, Text } from "react-native";

import { COLORS } from "../constants/colors";

const Buttons = ({ funtion, newStyles, title, icono}) => {
  return (
    <Pressable onPress={funtion} style={{ ...styles.button ,...newStyles}}>
      <Text style={{ ...styles.buttonText, ...newStyles }}>
        {icono}{title}
      </Text>
    </Pressable>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  button: {
    width: 160,
    height: 40,
    margin: 20,
    alignSelf:"center",
    alignItems: "center",
    justifyContent:"center",
    borderRadius: 8,
    backgroundColor: COLORS.buttonColor,
    elevation:5,
  },
  buttonText: {
    padding: 8,
    color: COLORS.primario,
    textAlign: "center",
    fontWeight: "500",
  
  }
});
