import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Product = ({ product }) => {
  const [favorite, setFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <Box>
      <figure style={{ padding: 0, margin: 0, position: 'relative' }}>
        <img
          style={{
            width: '100%',
          }}
          src={`../../images/${product.image}`}
          alt=""
        />
        <IconButton
          style={{
            background: 'white',
            position: 'absolute',
            top: '0.3em',
            right: '0.3em',
          }}
          color="primary"
          aria-label="agregar a favoritos"
          onClick={handleToggleFavorite}
        >
          {favorite ? (
            <FavoriteIcon style={{ color: 'black', fontSize: '20px' }} />
          ) : (
            <FavoriteBorderOutlinedIcon
              style={{ color: 'black', fontSize: '20px' }}
            />
          )}
        </IconButton>
      </figure>
      <Typography variant="body1" gutterBottom>
        {product.name}
      </Typography>
      <Typography variant="body2" gutterBottom>
        Zapatillas para hombre
      </Typography>
      <Typography variant="body1" gutterBottom>
        {product.colors.length} color{product.colors.length > 1 && 'es'}
      </Typography>
      <Typography variant="body1" gutterBottom>
        S/ {product.price}
      </Typography>
    </Box>
  );
};

export default Product;
