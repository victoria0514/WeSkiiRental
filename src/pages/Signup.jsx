import React from 'react';
import AccountInfo from '../components/AccountInfo';
import AddressInfo from '../components/AddressInfo';
import './Styling/Signup.css';
import logo from '../icons/WeSkiiLogo.png';

const Signup = () => {
  return (
    <>
      <div className='Form-outer'>
        <img src={logo} alt='logo' className='logo'></img>
        <h1>Signup Page</h1>
      </div>
      <div className='form-wrapper'>
        <div>
          <AccountInfo />
        </div>
        <div>
          <AddressInfo />
        </div>
      </div>
    </>
  );
};

export default Signup;
