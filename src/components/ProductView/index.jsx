import React, { useState } from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import ErrorBoundary from '../ErrorBoundary';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../features/cart';

const ProductView = ({ product }) => {
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const dispatch = useDispatch();

  if (!product) {
    return <h1>Loading...</h1>;
  }

  const handleAddProductToCart = () => {
    dispatch(addProductToCart({ product }));
    setOpenSnackBar(true);
  };

  return (
    <Grid container spacing={5} mt={0}>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={() => {
          setOpenSnackBar(false);
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={() => {
            setOpenSnackBar(false);
          }}
          severity="success"
          sx={{ width: '100%' }}
        >
          El producto <b>{product.name}</b> ha sido agregado satisfactoriamente
          a tu carrito de compras.
        </Alert>
      </Snackbar>
      <Grid item sm={8}>
        <Grid container spacing={1}>
          {product.imageUrls.map((url, id) => (
            <Grid key={id} item sm={6}>
              <img src={url} alt="" style={{ width: '100%' }} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item sm={4}>
        <Typography variant="h6" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          Zapatilla para {product.gender}
        </Typography>
        <Box mt={1} mb={1}>
          <Button
            variant="contained"
            fullWidth
            style={{
              background: 'black',
              textTransform: 'none',
              boxShadow: 'none',
              borderRadius: '1.5em',
              paddingTop: '0.7em',
              paddingBottom: '0.7em',
            }}
            onClick={handleAddProductToCart}
          >
            Agregar a carrito
          </Button>
        </Box>
        <Typography variant="body1" gutterBottom>
          {product.description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default function ProductViewErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <ProductView {...props} />
    </ErrorBoundary>
  );
}
