import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './Header';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../Home';
import AddProduct from '../AddProduct';
import NotFound from '../NotFound';

const Layout = () => {
  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </React.Fragment>
    </Router>
  );
};

export default Layout;
