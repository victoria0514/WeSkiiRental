import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { CartItem } from '../components/CartItem';
import { PRODUCTS } from '../Products';
import './Styling/Cart.css';

const Cart = () => {
  const { cartItems, getTotalCartAmount  } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
 

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
      <div className='checkout'>
        <p>Subtotal ${totalAmount}</p>
        <button> Continue Shopping </button>
        <button> Checkout </button>
      </div>
    </div>
  );
};

export default Cart;
