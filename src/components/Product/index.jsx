import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const [favorite, setFavorite] = useState(false);

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorite(!favorite);
  };

  return (
    <Box>
      <Link to={`/product/${product.id}`}>
        <figure style={{ padding: 0, margin: 0, position: 'relative' }}>
          <img
            style={{
              width: '100%',
            }}
            src={product.imageUrls[0]}
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
            data-testid="favorite-button"
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
      </Link>
      <Typography variant="body1" gutterBottom>
        {product.name}
      </Typography>
      <Typography variant="body2" gutterBottom>
        Zapatillas para {product.gender}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {product.colors.length} color{product.colors.length > 1 && 'es'}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`S/ ${product.price}0`}
      </Typography>
    </Box>
  );
};

export default Product;
