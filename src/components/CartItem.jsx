import { Button, Input } from '@mui/material';
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateItemCartAmount } =
    useContext(ShopContext);
  return (
    <div className='cartItem'>
      <img src={productImage} />
      <div className='description'>
        <p>
          {' '}
          <b> {productName}</b>
        </p>
        <p> ${price}</p>
        <div className='countHandler'>
          <Button
            variant='outlined'
            color='primary'
            size='small'
            onClick={() => removeFromCart(id)}
          >
            {' '}
            -{' '}
          </Button>

          <Input
      size='small'
            value={cartItems[id]}
            onChange={(e) => {
              updateItemCartAmount(Number(e.target.value), id);
            }}
          />

          <Button
            variant='outlined'
            color='primary'
            size='small'
            onClick={() => {
              addToCart(id);
            }}
          >
            {' '}
            +{' '}
          </Button>
        </div>
      </div>
    </div>
  );
};
