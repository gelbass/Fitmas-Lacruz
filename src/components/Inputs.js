import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

import { COLORS } from "../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const Inputs = ({ value, text, newStyles, password}) => {
  const [textItem, setTextItem] = useState("");
  const onHandleChangeText = t => {
    setTextItem(t);
    value(textItem);
  };

  return (
    <View>
      <TextInput
        style={{ ...styles.input, ...newStyles }}
        placeholder={text}
        // value={textItem}
        // onChangeText={onHandleChangeText}
        secureTextEntry={password}
      />
    </View>
  );
};

export default Inputs;

const styles = StyleSheet.create({
  input: {
    margin: 20,
    padding: 10,
    width: "90%",
    borderRadius: 10,
    backgroundColor: COLORS.blanco,
    border: 1,
    borderRadius: 10,
    shadowColor: COLORS.nativo,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 60,
    shadowOpacity: 1
  }
});
