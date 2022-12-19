export const SELECTED_PROFESIONAL = "SELECTED_PROFESIONAL";
export const FILTERED_PROFESIONAL = "FILTERED_PROFESIONAL";

export const selectedProfesionales = id => ({
  type: SELECTED_PROFESIONAL,
  profesionalID: id
});

export const filterProfesional = id => ({
  type: FILTERED_PROFESIONAL,
  categoriaID: id
});
