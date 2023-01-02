import { applyMiddleware, combineReducers, createStore } from "redux";

import AgendaReducer from "./reducers/agenda.reducer";
import CategoriasReducer from "./reducers/categorias.reducer";
import ProfesionalesReducer from "./reducers/profesionales.reducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
  categorias: CategoriasReducer,
  profesionales: ProfesionalesReducer,
  agenda: AgendaReducer,
});

// export default createStore(RootReducer);
export default createStore(RootReducer,applyMiddleware(thunk));

