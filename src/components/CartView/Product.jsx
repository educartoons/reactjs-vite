import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Button, Typography } from '@mui/material';
import { removeProductFromCart } from '../../features/cart';

const Product = (props) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeProductFromCart({ id: props.product.id }));
  };

  return (
    <Grid container spacing={2} mb={2}>
      <Grid item sm={6}>
        <figure style={{ padding: 0, margin: 0 }}>
          <img
            src={props.product?.imageUrls[0]}
            alt=""
            style={{ width: '50%' }}
          />
        </figure>
      </Grid>
      <Grid item sm={3}>
        <Button variant="contained" onClick={handleRemove}>
          Remover
        </Button>
      </Grid>
      <Grid item sm={3}>
        <Typography variant="body2" gutterBottom>
          {props.product?.price}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Product;
