import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import logo from '../icons/WeSkiiLogo.png';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleLoginClick = () => { };

  return(
    <div> this is the signup page </div>
  )
};

export default Signup;
