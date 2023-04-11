import React, { useState } from 'react';
import './Styling/Title.css';
import { TextField } from '@mui/material';
import Names from './Names';

const ContactInfo = () => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const styler = {
    width: '600px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const inner = {
    marginLeft: '10px',
    marginRight: '10px',
  };

  return (
    <>
      <h3 className='title'> Shipping Info </h3>

      <div style={styler}>
        <Names />
      </div>

      <div style={styler}>
        <TextField
          id='outlined-basic'
          label='Address'
          variant='outlined'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={inner}
        />

        <TextField
          id='outlined-basic'
          label='City'
          variant='outlined'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={inner}
        />
      </div>

      <div style={styler}>
        <TextField
          id='outlined-basic'
          label='State'
          variant='outlined'
          value={state}
          onChange={(e) => setState(e.target.value)}
          style={inner}
        />

        <TextField
          id='outlined-basic'
          label='Zip'
          variant='outlined'
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          style={inner}
        />
      </div>
    </>
  );
};

export default ContactInfo;
