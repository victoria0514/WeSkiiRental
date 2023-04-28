import React  from 'react';
import LoginForm from './pages/LoginForm';
import Signup from './pages/Signup';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Account from './pages/Account';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShopContextProvider } from './context/ShopContext';

function App() {
  return (
    <div>
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} exact />
            <Route path='/login' element={<LoginForm />} exact />
            <Route path='/signup' element={<Signup />} exact />
            <Route path='/cart' element={<Cart />} exact />
            <Route path='/account' element={<Account />} exact /> 
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
