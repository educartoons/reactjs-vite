import React from 'react';
import { createRoot } from 'react-dom/client';

import Home from './views/Home';
import AddProduct from './views/AddProduct';
import Layout from './views/Layout';
import { Provider } from 'react-redux';
import { fetchProducts } from './features/products';

import store from './store';

store.dispatch(fetchProducts());

const dom = document.getElementById('root');

const root = createRoot(dom);

root.render(
  <Provider store={store}>
    <Layout />
  </Provider>
);
