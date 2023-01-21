import { Alert } from "react-native";
import { URL_API } from "../../constants/DateBase";

export const ADD_AGENDA = "ADD_AGENDA";
export const CLEAN_AGENDA = "CLEAN_AGENDA";
export const CONFIRM_AGENDA = "CONFIRM_AGENDA";
export const GET_AGENDA = "GET_AGENDA";

export const statusAgenda = confirm => ({
  type: CONFIRM_AGENDA,
  confirm
});
export const addAgenda = item => ({
  type: ADD_AGENDA,
  item
});
export const cleanAgenda = item => ({
  type: CLEAN_AGENDA,
  item
});

export const getAgendas = () => {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_API}/agendas.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const result = await response.json();
      const agendas = Object.keys(result).map(key => ({
        ...result[key],
        id: key
      }));
      dispatch({ type: GET_AGENDA, agendas: agendas });
    } catch (error) {
      console.log("ERROR: GET_AGENDA");
      console.log(error.message);
    }
  };
};
export const confirmarAgenda = (payload, user) => {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_API}/agendas.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ date: Date.now(), items: { ...payload }, user })
      });

      const result = await response.json();
      console.log(result);
      dispatch({
        type: CONFIRM_AGENDA,
        confirm: true
      });
      if (result.error) Alert.alert(result.error);
    } catch (err) {
      console.log(err);
    }
  };
};
