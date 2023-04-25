import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  genders: {
    hombre: false,
    mujer: false,
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
          [action.payload.gender]: action.payload.value,
        },
      };
    },
  },
});

export const filtersReducer = filtersSlice.reducer;

export const { toggleGender } = filtersSlice.actions;

export default filtersSlice;
