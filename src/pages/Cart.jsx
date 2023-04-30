import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { CartItem } from '../components/CartItem';
import { PRODUCTS } from '../data/Products';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import './Styling/Cart.css';
import PaymentPage from './Payment';

const Cart = () => {
  const { clearCart, cartItems, getTotalCartAmount } = useContext(ShopContext);
  const { buyAmount, rentAmount } = getTotalCartAmount();
  const navigate = useNavigate();

  const handleBackToShop = () => {
    navigate('/');
  };

  const handleCheckout = () => {
    let orderID = Math.random() * 100000000;
    orderID = Math.floor(orderID);
    alert(`Your order ID is ${orderID}`);
  };

  const rentCart = () => {
    let totalAmount = Math.round(rentAmount * 100) / 100;
    sessionStorage.setItem('purchaseType', 'Rental');
    sessionStorage.setItem('totalAmount', totalAmount);
    clearCart();
    navigate('/success');
  };

  const buyCart = () => {
    let totalAmount = Math.round(buyAmount * 100) / 100;
    sessionStorage.setItem('purchaseType', 'Purchase');
    sessionStorage.setItem('totalAmount', totalAmount);
    clearCart();
    navigate('/success');
  } 





  return (
    <div className='cart'>
      <div className='cartItems'>
        {PRODUCTS.map((Product) => {
          if (cartItems[Product.id] > 0) {
            return <CartItem data={Product} />;
          }
        })}
      </div>

      {buyAmount > 0 ? (
        <div className='not-cart-items'>
          <div className='subtotal'>
            <h1>Checkout:</h1>
            <Button variant='contained' onClick={buyCart}>
              Buy Gear ${Math.round(buyAmount * 100) / 100}
            </Button>
            <Button variant='contained' onClick={rentCart}>
              Rent Gear ${Math.round(rentAmount * 100) / 100}
            </Button>
          </div>
          <div className='checkout'>
            <Button variant='outlined' onClick={handleBackToShop}>
              ← Back to Shop
            </Button>
          </div>
        </div>
      ) : (
        <h1> Your Cart is Empty! </h1>
      )}
    </div>
  );
};

export default Cart;
