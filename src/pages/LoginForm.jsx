import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './Styling/LoginForm.css';
import logo from '../icons/WeSkiiLogo.png';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    if (username === 'admin' && password === 'admin') {
      console.log('Login Successful');
      navigate('/landing');
    }
  };

  const handleSingupclick = () => {
    navigate('/signup');
  };

  return (
    <div>
      <div className='LoginForm-Wrapper'>
        <img
          src={logo}
          alt='logo'
          className='logo'
          style={{
            width: '300px',
            height: '300px',
          }}
        />

        <h1> We Skii Rental </h1>

        <TextField
          id='outlined-basic'
          label='Username'
          variant='outlined'
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <TextField
          id='outlined-basic'
          label='Password'
          variant='outlined'
          type='password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <div className='buttons'>
          <Button
            style={{
              width: '125px',
              marginRight: '12px',
              marginLeft: '12px',
            }}
            size='large'
            variant='contained'
            onClick={handleLoginClick}
          >
            Login
          </Button>

          <Button
            style={{
              width: '125px',
              marginRight: '12px',
              marginLeft: '12px',
            }}
            size='large'
            variant='contained'
            onClick={handleSingupclick}
          >
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
