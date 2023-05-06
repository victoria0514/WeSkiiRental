import React, { useState } from "react";
import "./Styling/Signup.css";
import logo from "../icons/WeSkiiLogo.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";

const Signup = () => {
  const navigate = useNavigate();

  // Account info
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Address Info
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const handleSubmit = async (e) => {
    // e.preventDefault()
    console.log(username);
    console.log(password);
    await createUserWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(errorMessage);
      });
  };

  return (
    <div className="form-wrapper">
      <div className="form-header">
        <img src={logo} alt="logo" className="logo"></img>
        <h1>Signup Page</h1>
      </div>
      <div className="form-body">
        <div className="account-info">
          <h3 className="title">Login Info</h3>
          <div className="outer">
            <TextField
              id="outlined-basic"
              label="email"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="inner"
            />
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="inner"
            />
          </div>
        </div>
        <div>
          {/* <AddressInfo /> */}
        </div>
      </div>
      <div className="form-submit">
        <Button variant="contained" onClick={handleSubmit}>
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Signup;
