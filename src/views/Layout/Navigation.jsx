import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul style={{ listStyle: 'none' }}>
      <li style={{ display: 'inline-block', marginRight: '2em' }}>
        <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
          Productos
        </Link>
      </li>
      <li style={{ display: 'inline-block' }}>
        <Link
          style={{ color: 'black', textDecoration: 'none' }}
          to="/add-product"
        >
          Agregar producto
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
