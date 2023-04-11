import React, { useContext, useState } from 'react';
import { Product } from '../components/Product';
import { ShopContext } from '../context/ShopContext';
import { PRODUCTS } from '../Products';

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <div className='cart'>
      <div>
        <h1> Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((Product) => {
          if (cartItems[Product.id] > 0) {
            return <CartItem data={Product} />;
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
