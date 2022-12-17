import { CATEGORIAS } from "../../data/categorias";
import { SELECTED_CATEGORIA } from "../actions/categoria.action";

const initialState = {
  categorias: CATEGORIAS,
  selected: null
};

const CategoriasReducer = (state = initialState, action) => {
  console.log("CategoriasReducer");
  console.log(state);
  console.log(state.type);
  switch (action.type) {
    case SELECTED_CATEGORIA:
      console.log("Entro SELECTED_CATEGORIA");
      const IndexCategoria = state.categorias.findIndex(
        categ => categ.id === action.categoriaID
      );
      if (IndexCategoria === -1) return state;
      return { ...state, selected: state.categorias[IndexCategoria] };

    default:
      console.log("Entro default");
      return state;
  }
};

export default CategoriasReducer;
