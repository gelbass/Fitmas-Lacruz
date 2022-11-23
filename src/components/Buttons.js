import { Pressable, StyleSheet, Text } from "react-native";

import React from "react";
import colors from "../constants/colors";

const Buttons = ({funtion, newStyles,title}) => {
  return (
    <Pressable onPress={funtion} style={{...styles.button, }}>
      <Text style={{ ...styles.buttonText,  ...newStyles}}>
        {title}
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
    justifyContent:"center",
    fontWeight: 500,
    borderRadius: 10,
    backgroundColor: colors.buttonColor,
  },
  buttonText: {
    padding: 8,
    color: colors.primario,
    textAlign:"center",
  },
});
