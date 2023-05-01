import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entities: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    fetchCart: (state, action) => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      state.entities = cart;
    },
    addProductToCart: (state, action) => {
      const cart = [...state.entities];
      cart.push(action.payload.id);
      localStorage.setItem('cart', JSON.stringify(cart));
      state.entities = cart;
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { addProductToCart, fetchCart } = cartSlice.actions;

export default cartSlice;
