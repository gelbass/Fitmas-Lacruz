import { Alert } from "react-native";
import { URL_API } from "../../constants/DateBase";

export const ADD_AGENDA = "ADD_AGENDA";
export const CLEAN_AGENDA = "CLEAN_AGENDA";
export const CONFIRM_AGENDA = "CONFIRM_AGENDA";
export const GET_AGENDA = "GET_AGENDA";
export const DELETE_AGENDA = "DELETE_AGENDA";

export const addAgenda = item => ({
  type: ADD_AGENDA,
  item
});
export const cleanAgenda = item => ({
  type: CLEAN_AGENDA,
  item
});

export const confirmarAgenda = (payload, user) => {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_API}/agendas.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ date: Date.now(), agenda: { ...payload }, user })
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
export const deleteAgenda = id => {
  return async dispatch => {
    console.log("DELETE AGENDA");
    try {
      console.log(id);
      await fetch(`${URL_API}/agendas/${id}.json`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      });
      dispatch({type: DELETE_AGENDA, agendaID: id})
    } catch (error) {
      console.log("ERROR: DELETE_AGENDA");
      console.log(error);
    }
  };
};
