import { CATEGORIAS } from "../../data/categorias";
import { SELECTED_CATEGORIA } from "../actions/categoria.action";

const initialState = {
  categorias: CATEGORIAS,
  selected: null
};

const CategoriasReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_CATEGORIA:
      const IndexCategoria = state.categorias.findIndex(
        categ => categ.id === action.categoriaID
      );
      if (IndexCategoria === -1) return state;
      return { ...state, selected: state.categorias[IndexCategoria] };
    default:
      return state;
  }
};

export default CategoriasReducer;
