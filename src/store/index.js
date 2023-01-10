import { applyMiddleware, combineReducers, createStore } from "redux";

import AgendaReducer from "./reducers/agenda.reducer";
import AutenticacionReducer from "./reducers/autenticacion.reducer";
import CategoriasReducer from "./reducers/categorias.reducer";
import ProfesionalesReducer from "./reducers/profesionales.reducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
  categorias: CategoriasReducer,
  profesionales: ProfesionalesReducer,
  agenda: AgendaReducer,
  autenticacion: AutenticacionReducer
});

export default createStore(RootReducer, applyMiddleware(thunk));
