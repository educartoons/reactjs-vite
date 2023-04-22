import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';

const initialState = {
  products: [],
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const q = query(
      collection(db, 'products'),
      where('gender', 'in', ['Mujer'])
    );
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return products;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      return state.products.concat(action.payload);
    },
    removeProduct: (state) => state,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const productsReducer = productsSlice.reducer;

export const { addProduct, removeProduct } = productsSlice.actions;

export default productsSlice;
