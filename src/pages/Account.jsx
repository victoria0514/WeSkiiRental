import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './Styling/LoginForm.css';
import { useNavigate } from 'react-router-dom';
import ShippingInfo from '../components/ShippingInfo';

const Account = () => {
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  const password = sessionStorage.getItem('password');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    if (password === oldPassword) {
      alert('Password Changed');
      sessionStorage.setItem('password', newPassword)
    } else {
      alert('Password Incorrect');
    }
  };

  const handleSignOut = () => {
    sessionStorage.setItem('isLoggedIn', 'false');
    sessionStorage.setItem('password', '');
    sessionStorage.setItem('username', '');
    sessionStorage.setItem('firstName', '');
    sessionStorage.setItem('lastName', '');
    sessionStorage.setItem('address', '');
    sessionStorage.setItem('city', '');
    sessionStorage.setItem('state', '');
    sessionStorage.setItem('zip', '');
    navigate('/login');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleDisplayInfo = () => {
    console.log(sessionStorage.getItem('firstName'));
    console.log(sessionStorage.getItem('lastName'));
    console.log(sessionStorage.getItem('address'));
    console.log(sessionStorage.getItem('city'));
    console.log(sessionStorage.getItem('state'));
    console.log(sessionStorage.getItem('zip'));
    console.log(sessionStorage.getItem('password'));
  };

  const style_outer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  };

  return (
    <div>
      {isLoggedIn === 'true' ? (
        <div style={style_outer} className='outerContainer'>
          <div className='changePasswordContainer'>
            <h1>Change Password</h1>
            <TextField
              style={{ marginBottom: '20px' }}
              id='standard'
              label='Old Password'
              variant='standard'
              value={oldPassword}
              onChange={(e) => {
                setOldPassword(e.target.value);
              }}
            />
            <form onSubmit={handlePasswordSubmit}>
              <TextField
                id='standard'
                label='New Password'
                variant='standard'
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              />
            </form>
          </div>
          <div className='changeShippingContainer'>
            <h1> Your shipping info is </h1>
            <ShippingInfo />
          </div>
          <div>
            <h1> Sign Out</h1>
            <Button variant='contained' onClick={handleSignOut}>
              Sign Out
            </Button>

          </div>
        </div>
      ) : (
        <div>
          <h1> You are not logged in</h1>
          <Button variant='contained' onClick={handleLoginClick}>
            Login
          </Button>
        </div>
      )}
    </div>
  );
};

export default Account;
