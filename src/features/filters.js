import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  genders: {
    hombre: false,
    mujer: false,
  },
  colors: {
    naranja: false,
    amarillo: false,
    morado: false,
    azul: false,
    rojo: false,
    verde: false,
    rosado: false,
    gris: false,
    marron: false,
    negro: false,
    blanco: false,
  },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleGender: (state, action) => {
      return {
        ...state,
        genders: {
          ...state.genders,
          [action.payload.gender]: !state.genders[action.payload.gender],
        },
      };
    },
    toggleColor: (state, action) => {
      return {
        ...state,
        colors: {
          ...state.colors,
          [action.payload.name]: !state.colors[action.payload.name],
        },
      };
    },
  },
});

export const filtersReducer = filtersSlice.reducer;

export const { toggleGender, toggleColor } = filtersSlice.actions;

export default filtersSlice;
