import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Products from '../../components/Products';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@mui/material/Grid';

import { useSelector } from 'react-redux';

import Filters from './Filters';

const Home = () => {
  const products = useSelector((state) => state.products.entities);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={2}>
            <Filters />
          </Grid>
          <Grid item md={10}>
            <Products products={products} />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Home;
