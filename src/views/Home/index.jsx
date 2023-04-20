import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Products from '../../components/Products';
import Filters from '../../components/Filters';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@mui/material/Grid';

import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase';

const FILTERS = ['Basquet', 'Urbano', 'Skateboarding', 'Lifestyle'];

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      // const querySnapshot = await getDocs(collection(db, 'products'));

      const q = query(
        collection(db, 'products'),
        where('gender', 'in', ['Mujer', 'Hombre']),
        where('colors', 'array-contains', 'azul')
      );

      const querySnapshot = await getDocs(q);

      const products = [];
      querySnapshot.forEach((doc) => {
        products.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setProducts(products);
    };

    getProducts();
  }, []);

  return (
    <React.Fragment>
      <Grid container mt={4}>
        <Grid item md={2}>
          <Filters filters={FILTERS} />
        </Grid>
        <Grid item md={10}>
          <Products products={products} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
