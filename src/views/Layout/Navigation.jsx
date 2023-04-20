import React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 4,
        },
      }}
    >
      <Link to="/">Productos</Link>
      <Link to="/add-product">Agregar producto</Link>
    </Box>
  );
};

export default Navigation;
