import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from '../Product';
import Skeleton from '../Product/Skeleton';

function Products({ products }) {
  const [numProducts, setNumProducts] = useState(3);

  useEffect(
    function () {
      console.log('El usuario esta viendo mas productos');
      return () => {
        console.log('Este componente ha sido eliminado');
      };
    },
    [numProducts]
  );

  const handleClick = () => {
    console.log('onClick');
    setNumProducts(numProducts + 3);
  };

  return (
    <Box>
      <Grid container spacing={2}>
        {products.length > 0
          ? products.map((product) => (
              <Grid key={product.id} item md={4}>
                <Product product={product} />
              </Grid>
            ))
          : Array(3)
              .fill(null)
              .map((item, idx) => {
                return (
                  <Grid key={idx} item={true} md={4}>
                    <Skeleton />
                  </Grid>
                );
              })}
      </Grid>
    </Box>
  );
}

export default Products;
