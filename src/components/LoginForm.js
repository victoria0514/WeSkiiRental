import React, { useState } from 'react'
import './loginform.css'

const LoginForm = () => {
  const [popupStyle, showPopup] = useState('hide')
  const popup = () => {
    showPopup('login-popup')
    setTimeout(() => showPopup('hide'), 1500)
  }



  return (
    <div className='cover'>
      <h1> We Skii Rental </h1>
      <input type='text' placeholder='username' />
      <input type='password' placeholder='password' />
      <div className='login-btn' onClick={popup}>
        Login{' '}
      </div>

      <p className='text'> Or login using </p>

      <div className='alt-login'>
        <div className='facebook'> </div>
        <div className='google'> </div>
      </div>

      <div className={popupStyle}>
        <h3> Login Failed</h3>
        <p> Username or Password incorrect </p>
      </div>
    </div>
  )
}

export default LoginForm
