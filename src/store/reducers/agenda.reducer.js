import {
  ADD_AGENDA,
  CONFIRM_AGENDA,
  DELETE_AGENDA
} from "../actions/agenda.actions";

const initialState = {
  agendas: []
};
const AgendaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AGENDA:
      console.log(action.type);
      const indexItem = state.agendas.findIndex(item => {
        item == action.item;
      });
      if (indexItem === -1) {
        const item = { ...action.item };
        const updateAgenda = [...state.agendas, item];
        return { ...state, agendas: updateAgenda };
      }
      const agendas = [...state.agendas].map(item => {
        item.id === action.item.id;
      });
      console.log(agendas);
      return agendas;

    case DELETE_AGENDA:
      console.log(agendas);
      return {
        ...state,
        agendas: [...state.agendas].filter(item => item.id !== action.agendaID)
      };

    case CONFIRM_AGENDA:
      return { ...state, agendas: [] };

    default:
      return state;
  }
};

export default AgendaReducer;
