import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from '@mui/icons-material';
import icon from '../icons/WeSkiiLogo.png';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <div className='navbar'>
        <div className='info'>
          <h2>Fantastic⁴ Store</h2>
        </div>

        <div className='links'>
          <Link to='/Login'> Login </Link>
          <Link to='/'> Shop </Link>
          <Link to='/Cart'>
            <ShoppingCart size={24} weight='fill' color='white' />
        </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
