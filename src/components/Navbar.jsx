import React , { useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from '@mui/icons-material';
import icon from '../icons/WeSkiiLogo.png';
import './Styling/Navbar.css';
import { auth } from "../firebase";

import { useNavigate } from 'react-router-dom';
function Navbar({isAuth}) {

  // const [isAuth,setIsAuth]=useState(sessionStorage.getitem('isAuth'))

//   useEffect(() => {
//     // Perform localStorage action
//     // const [isAuth,setIsAuth]=useState(localStorage.getitem('isAuth'))

  
// //  console.log(localStorage.getitem('isAuth'))
//  console.log(sessionStorage.getItem('isAuth')); // 
 
//   }, [])

const navigate = useNavigate()

  const signOut = () => {
    // signOut(auth).then(()=>{
  
    //   // sessionStorage.clear();
    //   // setIsAuth(false)
    //   // navigate("/login")

      
    // })

    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }


  return (
    <>
      <div className="navbar">
        <div className="info">
          <h2>Fantastic⁴ Store</h2>
        </div>

        <div className="links">
          <Link to="/Account"> Account </Link>
          <Link to="/"> Shop </Link>
          <Link to="/Cart">
            <ShoppingCart size={24} weight="fill" color="white" />
          </Link>
          {!isAuth ? <Link to= "/login"></Link> : <button onClick={signOut}> Log out</button>}


        </div>
      </div>
    </>
  );
}

export default Navbar;
