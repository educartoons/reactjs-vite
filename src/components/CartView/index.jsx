import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Product from './Product';

const CartView = () => {
  const products = useSelector((state) => state.cart.entities);

  return (
    <Grid container>
      <Grid item sm={8}>
        <Grid container spacing={2}>
          <Grid item sm={6}>
            <Typography variant="subtitle2" gutterBottom>
              Producto
            </Typography>
          </Grid>
          <Grid item sm={3}>
            <Typography variant="subtitle2" gutterBottom>
              Cantidad
            </Typography>
          </Grid>
          <Grid item sm={3}>
            <Typography variant="subtitle2" gutterBottom>
              Precio
            </Typography>
          </Grid>
        </Grid>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Grid>
      <Grid item sm={4}></Grid>
    </Grid>
  );
};

export default CartView;
