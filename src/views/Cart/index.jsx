import React from 'react';
import CartView from '../../components/CartView';
import { useSelector } from 'react-redux';

const Cart = () => {
  const ids = useSelector((state) => state.cart.entities);
  return ids.length === 0 ? (
    <h1>No hay productos en su carrito de compras </h1>
  ) : (
    <CartView />
  );
};

export default Cart;
