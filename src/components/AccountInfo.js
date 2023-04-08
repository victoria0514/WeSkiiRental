import React, { useState } from 'react';
import { TextField } from '@mui/material';

const AccountInfo = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const inner = { marginLeft: '10px', marginRight: '10px' };
  const outer = {
    width: '600px',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  };

  return (
    <div style={outer}>
      <TextField
        id='outlined-basic'
        label='username'
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
  );
};

export default AccountInfo;
