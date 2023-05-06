import React , { useState }  from 'react';
import LoginForm from './pages/LoginForm';
import Signup from './pages/Signup';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Account from './pages/Account';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route,useNavigate  } from 'react-router-dom';
import { ShopContextProvider } from './context/ShopContext';
import NotFound from './pages/NotFound';
import { Link } from 'react-router-dom';
import { ShoppingCart } from '@mui/icons-material';
import icon from './icons/WeSkiiLogo.png';
// import './'
import { auth } from "./firebase";
function App() {
  const [isAuth, setIsAuth] = useState(false);
 
 
const navigate = useNavigate()
 
  const signOut = () => {
    // signOut(auth).then(()=>{
  
    sessionStorage.clear();
setIsAuth(false)
    navigate("/login")

     
    // })

    // signOut(auth).then(() => {
    //   // Sign-out successful.
    // }).catch((error) => {
    //   // An error happened.
    // });
  }

  console.log(isAuth);

  return (
    <div>
      <ShopContextProvider>
     
          {/* <Navbar isAuth={isAuth} /> */}


          <>
      <div className='navbar'>
        <div className='info'>
          <h2>Fantastic⁴ Store</h2>
        </div>

        <div className='links'>
          <Link to='/Account'> Account </Link>
          <Link to='/'> Shop </Link>
          <Link to='/Cart'>
            <ShoppingCart size={24} weight='fill' color='white' />
          </Link>
          {!sessionStorage.getItem('isAuth') ? <Link to= "/login">  Login in</Link> : <button onClick={signOut}> Log out</button>}


        </div>
      </div>
    </>
          <Routes>
            <Route path='/login' element={<LoginForm  setIsAuth={setIsAuth}/>} exact />
            <Route path='/signup' element={<Signup />} exact />
            <Route path='/cart' element={<Cart />} exact />
            <Route path='/account' element={<Account />} exact />
            <Route path='/not-found' element={<NotFound />} exact />
            {/* <Route path='/success' element={<Success />} exact /> */}
            <Route path='/' element={<Shop />} exact />
            <Route path='*' element={<NotFound />} />
          </Routes>

      </ShopContextProvider>
    </div>
  );
}

export default App;
