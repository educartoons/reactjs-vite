import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  genders: {
    hombre: true,
  },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleGender: (state) => state,
  },
});

export const filtersReducer = filtersSlice.reducer;

export const { toggleGender } = filtersSlice.actions;

export default filtersSlice;
