import React, { useState } from 'react';
import './Styling/Title.css';
import { TextField } from '@mui/material';

const AccountInfo = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const inner = { marginLeft: '10px', marginRight: '10px' };
  const outer = {
    width: '600px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  };

  return (
    <>
    <h3 className='title'>Login Info</h3>
    <div style={outer}>
      <TextField
        id='outlined-basic'
        label='email'
        variant='outlined'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={inner}
      />
      <TextField
        id='outlined-basic'
        label='password'
        variant='outlined'
        value={password}
        type='password'
        onChange={(e) => setPassword(e.target.value)}
        style={inner}
      />
    </div>
    </>
  );
};

export default AccountInfo;
