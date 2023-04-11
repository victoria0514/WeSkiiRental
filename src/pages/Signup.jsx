import React from 'react';
import AccountInfo from '../components/AccountInfo';
import AddressInfo from '../components/AddressInfo';
import logo from '../icons/WeSkiiLogo.png';
import './Styling/Signup.css';

const Signup = () => {
  const styler = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <div>
      <div className='Signup-Wrapper'>
        <img
          src={logo}
          alt='logo'
          className='logo'
          style={{
            width: '300px',
            height: '300px',
          }}
        />
        <h1>Signup Page</h1>
          <AccountInfo />
          <AddressInfo />
      </div>
    </div>
  );
};

export default Signup;
