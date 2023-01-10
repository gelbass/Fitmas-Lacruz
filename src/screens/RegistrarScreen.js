import { Alert, Text, View } from "react-native";
import React, { useCallback, useReducer } from "react";

import Buttons from "../components/Buttons";
import { COLORS } from "../constants/colors";
import Inputs from "../components/Inputs";
import { registro } from "../store/actions/autenticacion.actions";
import { useDispatch } from "react-redux";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  console.log(action);
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

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
      repetirPassword: ""
    },
    inputValidities: {
      email: false,
      password: false,
      repetirPassword: false
    },
    formIsValid: false
  });

  const handlerRegistro = () => {
    if (
      formState.inputValues.password ===
        formState.inputValues.repetirPassword &&
      formState.formIsValid
    ) {
      dispatch(
        registro(formState.inputValues.email, formState.inputValues.password)
      );
    } else {
      Alert.alert("formulaio invalido", "Ingresa email y usuario valido", [
        { text: "ok" }
      ]);
    }
  };

  const onInputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      console.log(inputIdentifier, inputValue, inputValidity);
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
        placeholder={"Email"}
        email
        keyboardType="email-address"
        errorText={"Por favor ingrese un email válido"}
        onInputChange={onInputChangeHandler}
      />
      <Inputs
        id={"password"}
        placeholder={"Ingrese su contraseña"}
        password
        secureTextEntry
        keyboardType="default"
        errorText={"Por favor ingrese una contraseña válida"}
        onInputChange={onInputChangeHandler}
      />
      <Inputs
        id={"repetirPassword"}
        placeholder={"Ingrese nuevamente su contraseña"}
        password
        secureTextEntry
        keyboardType="default"
        errorText={
          "Las contraseñas no coinciden, Ingrese nuevamente su contraseña"
        }
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
          funtion={handlerRegistro}
          colorBase={COLORS.buttonColor}
          title={"REGISTRAR"}
        />
      </View>
    </View>
  );
};

export default RegisterScreen;
