import { Pressable, StyleSheet, Text } from "react-native";

import React from "react";
import colors from "../constants/colors";

const Buttons = ({funtion, newStyles,text}) => {
  return (
    <Pressable onPress={() => funtion} style={{...styles.button, ...newStyles}}>
      <Text style={{ ...styles.buttonText, fontFamily: fonts.RobotoMedium }}>
        {text}
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
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 500,
    borderRadius: 10,
    backgroundColor: colors.buttonColor
  }
});
