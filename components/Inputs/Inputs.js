import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

import colors from "../../constants/colors";

const Inputs = ({value, text, newStyles }) => {
  const [textItem, setTextItem] = useState("");
  const onHandleChangeText = t => {
    setTextItem(t);
    value(textItem)
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
