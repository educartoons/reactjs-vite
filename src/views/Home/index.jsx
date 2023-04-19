import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Products from '../../components/Products';
import Filters from '../../components/Filters';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@mui/material/Grid';

import { db } from '../../firebase';

const PRODUCTS_API = [
  {
    id: uuidv4(),
    name: 'Nike Air Max Pulse',
    gender: 'hombre',
    colors: ['blanco'],
    price: 769.9,
    image: 'DR0453_001_A_PREM.jpeg',
  },
  {
    id: uuidv4(),
    name: 'Jordan Max Aura 4',
    gender: 'hombre',
    colors: ['blanco'],
    price: 629.9,
    image: 'DN3687_003_A_PREM.jpeg',
  },
  {
    id: uuidv4(),
    name: 'Air Jordan 5 Retro SE',
    gender: 'hombre',
    colors: ['blanco'],
    price: 1099.9,
    image: 'DV1310_401_A_PREM.jpeg',
  },
  {
    id: uuidv4(),
    name: "Nike Air Force 1 '07 LX",
    gender: 'hombre',
    colors: ['blanco', 'negro'],
    price: 719.9,
    image: 'DV0791_100_A_PREM.jpeg',
  },
  {
    id: uuidv4(),
    name: "Nike Air Force 1 '07 LX",
    gender: 'hombre',
    colors: ['blanco', 'negro'],
    price: 769.9,
    image: 'DV0791_200_A_PREM.jpeg',
  },
  {
    id: uuidv4(),
    name: 'Zion 2',
    gender: 'hombre',
    colors: ['blanco'],
    price: 649.9,
    image: '196152027733_1_20230227120000-mrtPeru.webp',
  },
  {
    id: uuidv4(),
    name: 'Zoom Freak 4 ""Cookies and Cream""',
    gender: 'hombre',
    colors: ['blanco', 'verde'],
    price: 599.9,
    image: 'DHSHSHSHSHS.jpeg',
  },
  {
    id: uuidv4(),
    name: 'Zoom Freak 4 ""Cookies and Cream""',
    gender: 'hombre',
    colors: ['blanco', 'verde'],
    price: 599.9,
    image: 'DJ6149_001_A_PREM.jpeg',
  },
  {
    id: uuidv4(),
    name: 'Nike Air Max 90 SE',
    gender: 'hombre',
    colors: ['blanco'],
    price: 659.9,
    image: 'DZ5167_077_A_PREM.jpeg',
  },
];

const FILTERS = ['Basquet', 'Urbano', 'Skateboarding', 'Lifestyle'];

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setProducts(PRODUCTS_API);
    }, 1000);
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={2}>
            <Filters filters={FILTERS} />
          </Grid>
          <Grid md={10}>
            <Products products={products} />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Home;
