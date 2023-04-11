import React from 'react';
import AccountInfo from '../components/AccountInfo';
import AddressInfo from '../components/AddressInfo';
import logo from '../icons/WeSkiiLogo.png';
import './Styling/Signup.css';

const Signup = () => {
  const styler = {
    marginTop: '20px ',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  };

  const imgStyle = {
    width: '200px',
    height: '200px',
  };

  const outer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <>
      <div style={outer}>
        <img style={imgStyle} src={logo} alt='logo' className='logo'></img>
        <h1>Signup Page</h1>
      </div>
      <div style={styler}>
        <div>
          <AccountInfo />
        </div>
        <div>
          <AddressInfo />
        </div>
      </div>
    </>
  );
};

export default Signup;
