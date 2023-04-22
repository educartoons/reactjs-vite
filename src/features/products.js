import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';

import { getGenders } from './utils';

const initialState = {
  entities: [],
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (filters = {}, thunkAPI) => {
    let q;

    if (Object.keys(filters).length === 0) {
      q = query(
        collection(db, 'products'),
        where('gender', 'in', ['Hombre', 'Mujer'])
      );
    } else {
      q = query(
        collection(db, 'products'),
        where('gender', 'in', getGenders(filters.genders))
      );
    }

    const querySnapshot = await getDocs(q);

    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    console.log(filters.genders);
    return products;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      return {
        ...state,
        entities: state.entities.concat(action.payload),
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      console.log(action.payload);
      state.entities = action.payload;
    });
  },
});

export const productsReducer = productsSlice.reducer;

export const { addProduct } = productsSlice.actions;

export default productsSlice;
