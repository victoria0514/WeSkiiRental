import React from 'react'

const Success = () => {
  const purchaseType = sessionStorage.getItem('purchaseType');
  const totalAmount = sessionStorage.getItem('totalAmount');
  return (
    <div>Success, your stuff is here {purchaseType} ${totalAmount} </div>
  )
}

export default Success
