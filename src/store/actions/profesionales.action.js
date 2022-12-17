export const SELECTED_PROFESIONAL = "SELECTED_PROFESIONAL";
export const FILTER_PROFESIONAL = "FILTER_PROFESIONAL";

export const selectedProfesionales = id => ({
  type: SELECTED_PROFESIONAL,
  profesionalID: id
});

export const filterProfesional = id => ({
  type: FILTER_PROFESIONAL,
  categoriaID: id
});
