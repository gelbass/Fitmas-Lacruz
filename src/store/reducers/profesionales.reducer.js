import {
  FILTER_PROFESIONAL,
  SELECTED_PROFESIONAL
} from "../actions/profesionales.action";

import { PROFESIONALES } from "../../data/profesionales";

const initialState = {
  profesionales: PROFESIONALES,
  filterProfesionales: [],
  selected: null
};

const ProfesionalesReducer = (state = initialState, action) => {
  switch (action.tipo) {
    case SELECTED_PROFESIONAL:
      return {
        ...state,
        selected: state.profesionales.find(
          profesional => profesional.id === action.profesionalID
        )
      };
    case FILTER_PROFESIONAL:
      return {
        ...state,
        filterProfesionales: state.profesionales.filter(
          profesional => profesional.categoria === action.categoriaID
        )
      };
    default:
      return state;
  }
};
export default ProfesionalesReducer;
