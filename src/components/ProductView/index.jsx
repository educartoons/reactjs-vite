import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import ErrorBoundary from '../ErrorBoundary';

const ProductView = ({ product }) => {
  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <Grid container spacing={5}>
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
