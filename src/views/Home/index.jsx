import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Products from '../../components/Products';
import Filters from '../../components/Filters';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@mui/material/Grid';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const FILTERS = ['Basquet', 'Urbano', 'Skateboarding', 'Lifestyle'];

async function getProducts() {
  const querySnapshot = await getDocs(collection(db, 'products'));
  const products = [];
  querySnapshot.forEach((doc) => {
    products.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return products;
}

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const data = await getProducts();
    setProducts(data);
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
