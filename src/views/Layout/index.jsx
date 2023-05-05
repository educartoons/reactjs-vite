import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Header from './Header';
import Home from '../Home';
import AddProduct from '../AddProduct';
import Product from '../Product';
import Cart from '../Cart';
import NotFound from '../NotFound';

const Layout = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container>
          <Header />
        </Grid>
        <Grid container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Grid>
      </Container>
    </BrowserRouter>
  );
};

export default Layout;
