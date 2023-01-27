import { URL_API } from "../../constants/DateBase";

export const GET_AGENDA = "GET_AGENDA";

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
        ...result[key].agenda,
        id: key
      }));
      dispatch({ type: GET_AGENDA, agendas: agendas });
    } catch (error) {
      console.log("ERROR: GET_AGENDA");
      console.log(error.message);
    }
  };
};
