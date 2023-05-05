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
      cart.push(action.payload.product);
      localStorage.setItem('cart', JSON.stringify(cart));
      state.entities = cart;
    },
    removeProductFromCart: (state, action) => {
      const cart = [...state.entities];
      const newCart = cart.filter(
        (product) => product.id !== action.payload.id
      );
      localStorage.setItem('cart', JSON.stringify(newCart));
      state.entities = newCart;
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { addProductToCart, fetchCart, removeProductFromCart } =
  cartSlice.actions;

export default cartSlice;
