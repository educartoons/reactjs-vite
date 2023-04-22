import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './features/products';
import { filtersReducer } from './features/filters';

const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
  },
});

export default store;
