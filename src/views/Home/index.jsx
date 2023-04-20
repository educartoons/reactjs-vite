import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Products from '../../components/Products';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@mui/material/Grid';

import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase';

import Filters from './Filters';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [gender, setGenders] = React.useState({
    hombre: false,
    mujer: false,
  });

  const getGenders = () => {
    if (!gender.hombre && !gender.mujer) {
      return ['Hombre', 'Mujer'];
    }
    const genders = [];
    if (gender.hombre) {
      genders.push('Hombre');
    }
    if (gender.mujer) {
      genders.push('Mujer');
    }
    return genders;
  };

  useEffect(() => {
    async function getProducts() {
      const q = query(
        collection(db, 'products'),
        where('gender', 'in', getGenders())
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
    }
    getProducts();
  }, [gender]);

  const handleChangeGenders = (event) => {
    setGenders({
      ...gender,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={2}>
            <Filters
              gender={gender}
              handleChangeGenders={handleChangeGenders}
            />
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
