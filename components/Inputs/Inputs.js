import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import Header from "../Header/Header";
import colors from "../../constants/colors";

const Inputs = ({ text, newStyles }) => {
  const [textItem, setTextItem] = useState("");
  const onHandleChangeText = t => {
    setTextItem(t);
  };
  return (
    <View>
      <TextInput
        style={{ ...styles.input, ...newStyles }}
        placeholder={text}
        value={textItem}
        onChangeText={onHandleChangeText}
      />
    </View>
  );
};

export default Inputs;

const styles = StyleSheet.create({
  input: {
    margin:20,
    padding:10,
    width:'90%',
    // height:192,
    borderRadius:10,
    backgroundColor: colors.blanco,
    border: 1,
    borderRadius: 10,
    shadowColor: colors.nativo,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 60,
    shadowOpacity: 1,
  }
});
