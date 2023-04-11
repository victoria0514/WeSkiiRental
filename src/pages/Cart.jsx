import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { CartItem } from '../components/CartItem';
import { PRODUCTS } from '../Products';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import './Styling/Cart.css';

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  const styles = {
    display: 'flex',
    justifyContent: 'center',
  };

  const bttnStyle = {
    width: '215px',
    marginRight: '12px',
    marginLeft: '12px',
  };

  return (
    <div className='cart'>
      <div className='cartItems'>
        {PRODUCTS.map((Product) => {
          if (cartItems[Product.id] > 0) {
            return <CartItem data={Product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className='checkout'>
          <h1 style={styles}> Your Cart Items </h1>
          <p style={styles}>Subtotal ${totalAmount}</p>
          <div className='buttons'>
            <Button
              style={bttnStyle}
              variant='contained'
              onClick={() => {
                navigate('/');
              }}
            >
              {' '}
              Continue Shopping{' '}
            </Button>
            <Button style={bttnStyle} variant='contained'>
              {' '}
              Checkout{' '}
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
