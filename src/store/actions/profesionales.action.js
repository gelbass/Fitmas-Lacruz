export const SELECTED_PROFESIONAL = "SELECTED_PROFESIONAL";
export const FILTER_PROFESIONAL = "FILTER_PROFESIONAL";

export const selectedProfesionales = id => ({
  tipo: SELECTED_PROFESIONAL,
  profesionalID: id
});

export const filterProfesional = id => ({
  tipo: FILTER_PROFESIONAL,
  categoriaID: id
});
