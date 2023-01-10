import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import React, { useEffect, useReducer } from "react";

import { COLORS } from "../constants/colors";

const INPUT_CHANGE = "INPUT_CHANGE";
const INPUT_BLUR = "INPUT_BLUR";

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid
      };
    case INPUT_BLUR:
      return {
        ...state,
        touched: true
      };
    default:
      return state;
  }
};
const Inputs = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue ? props.initialValue : "",
    isValid: props.initiallyValid,
    touched: false
  });

  const { onInputChange, id } = props;

  useEffect(
    () => {
      onInputChange(id, inputState.value, inputState.isValid);
    },
    [inputState, onInputChange, id]
  );

  const textChangeHandler = text => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;

    if (props.requiered && text.trim().length === 0) isValid = false;
    if (props.email && !emailRegex.test(text.toLowerCase())) isValid = false;
    if (props.max != null && +text > props.max) isValid = false;
    if (props.minLength != null && text.length < props.minLength)
      isValid = false;

    dispatch({
      type: INPUT_CHANGE,
      value: text,
      isValid: isValid
    });
  };

  const onBlurHandler = () => dispatch({ type: INPUT_BLUR });

  return (
    <KeyboardAvoidingView keyboardVerticalOffset={50} behavior="padding">
      <View>
        <TextInput
          style={{ ...styles.input, ...props.newStyle }}
          value={inputState.value}
          onChangeText={textChangeHandler}
          onBlur={onBlurHandler}
          {...props}
        />
        {!inputState.isValid &&
          inputState.touched &&
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>
              {props.errorText}
            </Text>
          </View>}
      </View>
    </KeyboardAvoidingView>
  );
};

export default Inputs;

const styles = StyleSheet.create({
  input: {
    fontFamily: "RobotoMedium",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.blanco,
    border: 1,
    borderRadius: 10,
    shadowColor: COLORS.nativo,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 60,
    shadowOpacity: 1,
    elevation: 5
  },
  errorContainer: {
    marginTop: 6,
    marginBottom: 8
  },
  errorText: {
    color: "#ff0000"
  }
});
