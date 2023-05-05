import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <h2>
      La vista a la que estas intentando accedes no se encuentra. Click{' '}
      <Link to="/">aqui</Link> para volver a la página de inicio.
    </h2>
  );
};

export default NotFound;
