import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useReducer, useState } from "react";

import Buttons from "../components/Buttons";
import { COLORS } from "../constants/colors";
import Header from "../components/Header";
import Inputs from "../components/Inputs";
import { loggin } from "../store/actions/autenticacion.actions";
import { useDispatch } from "react-redux";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      inputValues: updatedValues,
      inputValidities: updatedValidities,
      formIsValid: updatedFormIsValid
    };
  }
  return state;
};
const LogginScreen = () => {
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: ""
    },
    inputValidities: {
      email: false,
      password: false
    },
    formIsValid: false
  });
  const handlerLogin = () => {
    if (formState.formIsValid) {
      dispatch(
        loggin(formState.inputValues.email, formState.inputValues.password)
      );
    } else {
      Alert.alert("Ingreso invalido", "Ingresa email y contraseña nuevamente", [
        { text: "ok" }
      ]);
    }
  };

  const onInputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier
      });
    },
    [dispatchFormState]
  );
  return (
    <View>
      <Text style={{ fontFamily: "RobotoBlack", margin: 40, fontSize: 30 }}>
        FitMas
      </Text>
      <Inputs
        id={"email"}
        label="Email"
        placeholder={"Ingrese email"}
        email
        keyboardType="email-address"
        errorText={"Por favor ingrese un email válido"}
        onInputChange={onInputChangeHandler}
      />
      <Inputs
        id={"password"}
        placeholder={"Contraseña"}
        keyboardType="default"
        secureTextEntry
        password
        errorText={"Por favor ingrese una contraseña válida"}
        onInputChange={onInputChangeHandler}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          paddingBottom: "20%"
        }}
      >
        <Buttons
          funtion={handlerLogin}
          colorBase={COLORS.buttonColor}
          title={"INICIAR SESIÓN"}
        />
      </View>
    </View>
  );
};

export default LogginScreen;
