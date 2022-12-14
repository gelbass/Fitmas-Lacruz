import { combineReducers, createStore } from "redux";

import CategoriasReducer from "./reducers/categorias.reducer";
import ProfesionalesReducer from "./reducers/profesionales.reducer";

const RootReducer = combineReducers({
  categorias: CategoriasReducer,
  profesionales: ProfesionalesReducer
});

export default createStore(RootReducer);
