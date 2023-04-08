import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='links'>
        <Link to='/Login'> Login </Link>
        <Link to='/'> Shop </Link>
        <Link to='/Cart'>
          <ShoppingCart size={24} weight='fill' color='white' />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
