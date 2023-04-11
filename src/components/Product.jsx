import React from 'react'

export const Product = (props) => {
  const {id, productName, price, description, productImage} = props.data;
  return (
    <div className='product'>
    <img src={productImage} alt={productName} />
    </div>
  )
}

