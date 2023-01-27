import {
  GET_AGENDA
} from "../actions/agenda.actions";

const initialState = {
  agendasConfirmadas: []
};
const AgendasConfirmadasReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AGENDA:
      return { ...state, agendasConfirmadas: action.agendas };
    default:
      return state;
  }
};

export default AgendasConfirmadasReducer;
