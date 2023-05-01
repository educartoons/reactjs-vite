import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './features/products';
import { filtersReducer } from './features/filters';
import { cartReducer } from './features/cart';

const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
    cart: cartReducer,
  },
});

export default store;
