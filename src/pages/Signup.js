import React from 'react';
import AccountInfo from '../components/AccountInfo';
import Names from '../components/Names';
import ContactInfo from '../components/ContactInfo';
import logo from '../icons/WeSkiiLogo.png';
import './Signup.css';

const Signup = () => {
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

        <Names />
        <AccountInfo />
        <ContactInfo />
      </div>
    </div>
  );
};

export default Signup;
