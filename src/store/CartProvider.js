import React from 'react';
import CartContext from './cart-context';

const CartProvider = () => {
  return <CartContext.Provider value={3}>{children}</CartContext.Provider>
};

export default CartProvider