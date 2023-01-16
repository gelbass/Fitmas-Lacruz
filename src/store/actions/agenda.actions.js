export const ADD_AGENDA = "ADD_AGENDA";
export const REMOVE_AGENDA = "REMOVE_AGENDA";
export const CONFIRM_AGENDA = "CONFIRM_AGENDA";
export const GET_AGENDA = "GET_AGENDA"

export const addAgenda = item => ({
  type: ADD_AGENDA,
  item
});
export const removeAgenda = itemID => ({
  type: REMOVE_AGENDA,
  itemID,
});
export const confirmAgenda = () => ({
  type: CONFIRM_AGENDA,
  payload
});
export const getOrders = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/agendas.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      const agendas = Object.keys(result).map((key) => ({
        ...result[key],
        id: key,
      }));
      console.log(orders);
      dispatch({ type: GET_AGENDA, payload: agendas });
    } catch (error) {
      console.log(error.message);
    }
  };
};
