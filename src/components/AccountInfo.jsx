import React, { useState } from 'react';
import './Styling/Title.css';
import { TextField } from '@mui/material';
import './Styling/AccountInfo.css';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import {auth,db} from '../firebase';
import { useNavigate,Link } from 'react-router-dom';
import { collection, addDoc,doc } from "firebase/firestore";

const AccountInfo = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    // e.preventDefault()
    const collectionRef = collection(db,"Shipping info")

    console.log(username);
    console.log(password);
    await createUserWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // navigate("/login")
          // ...
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        
      });


// ADD HERE
     await addDoc(collectionRef,{
        firstName: firstName, lastName:lastName,
        // the rest go here
        email:auth.currentUser.email, id:auth.currentUser.uid
      }

    
     ).then(()=>{

      navigate("/login")
     })
     
     .catch((error) =>{
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
     })
  }
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


  
       
   { console.log(username)}
    {console.log(password)}
    <h3 className='title'> Shipping Info </h3>

<div className='outer'>
  <TextField
    id='outlined-basic'
    label='First Name'
    variant='outlined'
    value={firstName}
    onChange={(e) => setFirstName(e.target.value)}
    className='inner'
  />
  <TextField
    id='outlined-basic'
    label='Last Name'
    variant='outlined'
    value={lastName}
    onChange={(e) => setLastName(e.target.value)}
    className='inner'
  />
</div>

<div className='outer'>
  <TextField
    id='outlined-basic'
    label='Address'
    variant='outlined'
    value={address}
    onChange={(e) => setAddress(e.target.value)}
    className='inner'
  />

  <TextField
    id='outlined-basic'
    label='City'
    variant='outlined'
    value={city}
    onChange={(e) => setCity(e.target.value)}
    className='inner'
  />
</div>

<div className='outer'>
  <TextField
    id='outlined-basic'
    label='State'
    variant='outlined'
    value={state}
    onChange={(e) => setState(e.target.value)}
    className='inner'
  />

  <TextField
    id='outlined-basic'
    label='Zip'
    variant='outlined'
    value={zip}
    onChange={(e) => setZip(e.target.value)}
    className='inner'
  />
</div>



<button onClick={onSubmit} > On submit </button>





    </>



  );
};

export default AccountInfo;
