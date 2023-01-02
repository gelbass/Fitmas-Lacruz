import {
  ADD_AGENDA,
  CONFIRM_AGENDA,
  REMOVE_AGENDA
} from "../actions/agenda.actions";

const initialState = {
  agendas:[]
};
const AgendaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AGENDA:
      const indexItem = state.agendas.findIndex(
        item => item.id === action.item.id
      );
      if (indexItem === -1) {
        const item = { ...action.item };
        const updateAgenda = [...state.agendas, item];
        return { ...state, agendas: updateAgenda };
      }
      const agendas = [...state.agendas].map(item => {
        id(item.id === action.item.id);
      });
      return agendas;
      break;

    case REMOVE_AGENDA:
      const cleanAgenda = [
        ...state.agendas,
        filter(item => item.id !== action.itemID)
      ];
      return { ...state, items: cleanAgenda };
      break;

    case CONFIRM_AGENDA:
      return {...state,agendas:[]}

    default:
      return state;
  }
};

export default AgendaReducer;
