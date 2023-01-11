import { Pressable, StyleSheet, Text } from "react-native";

import { COLORS } from "../constants/colors";

const Buttons = ({ funtion, newStyles, newStylesText,colorBase, title, icono }) => {
  return (
    <Pressable
      onPress={funtion}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? COLORS.seleccionado : colorBase
        },
        { ...styles.button },
        { ...newStyles }
      ]}
    >
      <Text style={{ ...styles.buttonText,...newStylesText}}>
        {icono}
        {title}
      </Text>
    </Pressable>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  button: {
    margin: 20,
    width: "40%" ,
    justifyContent: "center",
    borderRadius: 8,
    elevation: 5,
  },
  buttonText: {
    fontFamily: "RobotoMedium",
    padding: 8,
    color: COLORS.primario,
    textAlign: "center",
    fontWeight: "500"
  }
});
