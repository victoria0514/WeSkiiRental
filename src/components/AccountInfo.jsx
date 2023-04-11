import React, { useState } from 'react';
import './Styling/Title.css';
import { TextField } from '@mui/material';
import './Styling/AccountInfo.css';

const AccountInfo = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <h3 className='title'>Login Info</h3>
      <div className='outer'>
        <TextField
          id='outlined-basic'
          label='email'
          variant='outlined'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='inner'
        />
        <TextField
          id='outlined-basic'
          label='password'
          variant='outlined'
          value={password}
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          className='inner'
        />
      </div>
    </>
  );
};

export default AccountInfo;
