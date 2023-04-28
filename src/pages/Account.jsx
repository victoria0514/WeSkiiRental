import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './Styling/LoginForm.css';
import logo from '../icons/WeSkiiLogo.png';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  const password = sessionStorage.getItem('password');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    if (password === oldPassword) {
      console.log('Password Changed');
    } else {
      console.log('Password Incorrect');
      console.log(password);
    }
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div>
      {isLoggedIn === 'true' ? (
        <div>
          <h1> You are logged in</h1>
          <TextField
            id='outlined-basic'
            label='Old Password'
            variant='outlined'
            value={oldPassword}
            onChange={(e) => {
              setOldPassword(e.target.value);
            }}
          />
          <form onSubmit={handlePasswordSubmit}>
            <TextField
              id='outlined-basic'
              label='New Password'
              variant='outlined'
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            />
          </form>
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
