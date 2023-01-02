export const ADD_AGENDA = "ADD_AGENDA";
export const REMOVE_AGENDA = "REMOVE_AGENDA";
export const CONFIRM_AGENDA = "CONFIRM_AGENDA";

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
