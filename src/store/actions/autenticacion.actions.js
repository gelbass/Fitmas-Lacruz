import { URL_AUTH_LOGIN, URL_AUTH_SIGNUP } from "../../constants/DateBase";

import { Alert } from "react-native";

export const REGISTRO = "REGISTRO";
export const LOGIN = "LOGIN";

export const registro = (email, password) => {
  return async dispatch => {
    console.log("entre REGISTRO Action");
    try {
      const response = await fetch(URL_AUTH_SIGNUP, {
        method: "POST",
        headers: {
          "Content-Type": "aplication/json"
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true
        })
      });
      const resData = await response.json();
      dispatch({
        type: REGISTRO,
        token: resData.idToken,
        userId: resData.localId
      });
      console.log(resData);
      if (resData.error.message == "EMAIL_EXISTS")
        Alert.alert("Error", "El email ingresado ya se encuentra registrado", [
          { text: "Ok" }
        ]);
    } catch (error) {
      Alert.alert(error);
    }
  };
};

export const loggin = (email, password) => {
  return async dispatch => {
    console.log("Entre Login action");
    try {
      const response = await fetch(URL_AUTH_LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "aplication/json"
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true
        })
      });
      const resData = await response.json();
      dispatch({
        type: LOGIN,
        token: resData.idToken,
        userId: resData.localId
      });
      console.log(resData);
    } catch (error) {
      console.log(error);
    }
  };
};
