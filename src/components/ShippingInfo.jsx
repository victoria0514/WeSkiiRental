import { Input, TextField } from '@mui/material';
import React, { useState ,useEffect} from 'react';
import './Styling/ShippingInfo.css';
import { collection, getDocs,doc,query,where } from "firebase/firestore";

// db
import {auth,db} from '../firebase';

const ShippingInfo = () => {
  const [formData, setFormData] = useState({
    firstName: sessionStorage.getItem("firstName") || "",
    lastName: sessionStorage.getItem("lastName") || "",
    address: sessionStorage.getItem("address") || "",
    city: sessionStorage.getItem("city") || "",
    state: sessionStorage.getItem("state") || "",
    zip: sessionStorage.getItem("zip") || "",
  });
  // const collectionRef = collection(db,"Shipping info")
  const collectionRef = query(collection(db, "Shipping info"), where("id", "==", auth.currentUser.uid));
 

 

useEffect(() => {

 console.log("in use effect")
 const collectionRef = query(collection(db, "Shipping info"), where("id", "==", auth.currentUser.uid));
const getShipping = async() =>{

const data = await getDocs(collectionRef);

 
 const data1= data.docs.map((doc)=>({ ...doc.data(), id:doc.id
  })
 )
  console.log(data1[0]);

  // data
  sessionStorage.setItem("firstName",data1[0].firstName );
  sessionStorage.setItem("lastName",data1[0].lastName );
  sessionStorage.setItem("city",data1[0].city );
  sessionStorage.setItem("address",data1[0].address );
  sessionStorage.setItem("state",data1[0].state );
  sessionStorage.setItem("zip",data1[0].zip );
}


getShipping().catch(console.error);

}, [])


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    sessionStorage.setItem(name, value);
  };

  // constructor(){
  //   this.userId = firebase.auth().currentUser.uid;
  // }

  console.log("shipping page ")
  return (

    <div className='shipping-info'>
      <form>
        <div className="form-row">
          <div className="form-col">
            <TextField
              id="standard"
              variant="standard"
              type="text"
              name="firstName"
              label="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-col">
            <TextField
              id="standard"
              variant="standard"
              type="text"
              name="lastName"
              label="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <TextField
              id="standard"
              variant="standard"
              type="text"
              name="address"
              label="Address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-col">
            <TextField
              id="standard"
              variant="standard"
              type="text"
              name="city"
              label="City"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <TextField
              id="standard"
              variant="standard"
              type="text"
              name="state"
              label="State"
              value={formData.state}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-col">
            <TextField
              id="standard"
              variant="standard"
              type="text"
              name="zip"
              label="Zip"
              value={formData.zip}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShippingInfo;
