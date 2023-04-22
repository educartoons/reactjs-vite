import React from 'react';
import { createRoot } from 'react-dom/client';

import Home from './views/Home';
import AddProduct from './views/AddProduct';
import Layout from './views/Layout';
import { Provider } from 'react-redux';
import store from './lib/store';

import { fetchProducts } from './features/products';

const dom = document.getElementById('root');

store.dispatch(fetchProducts());

const root = createRoot(dom);

root.render(
  <Provider store={store}>
    <Layout />
  </Provider>
);
