import React, { useState } from 'react';
import { TextField } from '@mui/material';

const ContactInfo = () => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  return (
    <div>
      <TextField
        id='outlined-basic'
        label='Address'
        variant='outlined'
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <TextField
        id='outlined-basic'
        label='City'
        variant='outlined'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <TextField
        id='outlined-basic'
        label='State'
        variant='outlined'
        value={state}
        onChange={(e) => setState(e.target.value)}
      />

      <TextField
        id='outlined-basic'
        label='Zip'
        variant='outlined'
        value={zip}
        onChange={(e) => setZip(e.target.value)}
      />
    </div>
  );
};

export default ContactInfo;
